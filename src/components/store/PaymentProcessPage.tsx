"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { StoreViewData } from "./store-data";

type PaymentMethod = "qris" | "bank" | "cash";

function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function generateOrderId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "SCI-";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/* Simple deterministic QR-like pattern - purely decorative */
function QRCodeDisplay({ value }: { value: string }) {
  const size = 21;
  const grid: boolean[][] = [];

  // Seed from value string
  let seed = 0;
  for (let i = 0; i < value.length; i++) {
    seed = (seed * 31 + value.charCodeAt(i)) & 0x7fffffff;
  }
  const rng = () => {
    seed = (seed * 16807 + 0) % 2147483647;
    return seed / 2147483647;
  };

  for (let y = 0; y < size; y++) {
    grid[y] = [];
    for (let x = 0; x < size; x++) {
      // Finder patterns (top-left, top-right, bottom-left)
      const inFinderTL = x < 7 && y < 7;
      const inFinderTR = x >= size - 7 && y < 7;
      const inFinderBL = x < 7 && y >= size - 7;

      if (inFinderTL || inFinderTR || inFinderBL) {
        const fx = inFinderTR ? x - (size - 7) : x;
        const fy = inFinderBL ? y - (size - 7) : y;
        const isOuter = fx === 0 || fx === 6 || fy === 0 || fy === 6;
        const isInner = fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4;
        grid[y][x] = isOuter || isInner;
      } else {
        grid[y][x] = rng() > 0.5;
      }
    }
  }

  const cellSize = 8;
  const svgSize = size * cellSize;

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      className="mx-auto"
      aria-label="QR Code pembayaran"
      role="img"
    >
      <rect width={svgSize} height={svgSize} fill="white" rx="4" />
      {grid.map((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect
              key={`${x}-${y}`}
              x={x * cellSize}
              y={y * cellSize}
              width={cellSize}
              height={cellSize}
              fill="#121212"
              rx="1"
            />
          ) : null,
        ),
      )}
    </svg>
  );
}

function QRISView({
  total,
  orderId,
  timeLeft,
  accentClassName,
}: {
  total: number;
  orderId: string;
  timeLeft: number;
  accentClassName: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5 rounded-3xl bg-white p-5 shadow-[0_0_40px_rgba(30,215,96,0.15)]">
        <QRCodeDisplay value={`scanin-pay-${orderId}-${total}`} />
      </div>
      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]">
        Scan QR dengan e-wallet kamu
      </p>
      <p className="mb-5 text-xs text-[#535353]">GoPay · OVO · DANA · ShopeePay · LinkAja</p>
      <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
        <span className="material-symbols-outlined text-[16px] text-[#1ed760]" aria-hidden="true">
          timer
        </span>
        <span
          className={`font-mono text-sm font-bold ${timeLeft <= 60 ? "text-red-400" : "text-white"}`}
        >
          {formatTime(timeLeft)}
        </span>
      </div>
      <div className="mt-4 w-full rounded-xl bg-[#181818] p-4">
        <div className="flex justify-between text-sm">
          <span className="text-[#b3b3b3]">Total</span>
          <span
            className={`font-bold ${accentClassName.includes("4cf479") ? "text-[#4cf479]" : "text-[#1ed760]"}`}
          >
            {formatRupiah(total)}
          </span>
        </div>
      </div>
    </div>
  );
}

function BankTransferView({
  total,
  orderId,
  timeLeft,
}: {
  total: number;
  orderId: string;
  timeLeft: number;
}) {
  const [copied, setCopied] = useState<string | null>(null);
  const vaNumber = `8810${orderId.replace(/\D/g, "").padEnd(10, "0").slice(0, 10)}`;

  function handleCopy(text: string, label: string) {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  }

  const banks = [
    { name: "BCA", code: "014", color: "#003399" },
    { name: "Mandiri", code: "008", color: "#003876" },
    { name: "BNI", code: "009", color: "#f05a22" },
  ];

  const [selectedBank, setSelectedBank] = useState(banks[0]);

  return (
    <div className="space-y-4">
      {/* Bank selector */}
      <div className="flex gap-2">
        {banks.map((bank) => (
          <button
            key={bank.code}
            type="button"
            onClick={() => setSelectedBank(bank)}
            className={`flex-1 rounded-xl border py-3 text-center text-xs font-bold transition-all ${
              selectedBank.code === bank.code
                ? "border-[#1ed760]/40 bg-[#1ed760]/5 text-white"
                : "border-white/5 bg-[#181818] text-[#b3b3b3] hover:border-white/10"
            }`}
          >
            {bank.name}
          </button>
        ))}
      </div>

      {/* VA Number */}
      <div className="rounded-xl border border-white/5 bg-[#181818] p-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b3b3b3]">
          Nomor Virtual Account ({selectedBank.name})
        </p>
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-lg font-bold tracking-wider text-white">
            {selectedBank.code} {vaNumber.match(/.{1,4}/g)?.join(" ")}
          </p>
          <button
            type="button"
            onClick={() => handleCopy(`${selectedBank.code}${vaNumber}`, "va")}
            className="flex items-center gap-1 rounded-full bg-[#1ed760]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1ed760] transition-colors hover:bg-[#1ed760]/20"
          >
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
              {copied === "va" ? "check" : "content_copy"}
            </span>
            {copied === "va" ? "Tersalin" : "Salin"}
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="rounded-xl border border-white/5 bg-[#181818] p-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b3b3b3]">
          Jumlah Transfer
        </p>
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-black text-[#1ed760]">{formatRupiah(total)}</p>
          <button
            type="button"
            onClick={() => handleCopy(total.toString(), "amount")}
            className="flex items-center gap-1 rounded-full bg-[#1ed760]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1ed760] transition-colors hover:bg-[#1ed760]/20"
          >
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
              {copied === "amount" ? "check" : "content_copy"}
            </span>
            {copied === "amount" ? "Tersalin" : "Salin"}
          </button>
        </div>
      </div>

      {/* Timer */}
      <div className="flex items-center justify-center gap-2 rounded-full bg-white/5 py-2">
        <span className="material-symbols-outlined text-[16px] text-[#1ed760]" aria-hidden="true">
          timer
        </span>
        <span
          className={`font-mono text-sm font-bold ${timeLeft <= 60 ? "text-red-400" : "text-white"}`}
        >
          Bayar dalam {formatTime(timeLeft)}
        </span>
      </div>

      {/* Instructions */}
      <div className="rounded-xl bg-[#181818] p-4">
        <p className="mb-3 text-xs font-bold text-white">Cara Bayar:</p>
        <ol className="space-y-2 text-xs text-[#b3b3b3]">
          <li className="flex gap-2">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[10px] font-bold text-white">
              1
            </span>
            <span>Buka aplikasi m-banking atau ATM {selectedBank.name}</span>
          </li>
          <li className="flex gap-2">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[10px] font-bold text-white">
              2
            </span>
            <span>Pilih menu Transfer → Virtual Account</span>
          </li>
          <li className="flex gap-2">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[10px] font-bold text-white">
              3
            </span>
            <span>Masukkan nomor VA di atas</span>
          </li>
          <li className="flex gap-2">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[10px] font-bold text-white">
              4
            </span>
            <span>Konfirmasi dan selesaikan pembayaran</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function CashView({
  total,
  orderId,
  storeName,
}: {
  total: number;
  orderId: string;
  storeName: string;
}) {
  const [queueNumber] = useState(() => Math.floor(Math.random() * 90) + 10);

  return (
    <div className="flex flex-col items-center">
      {/* Queue number */}
      <div className="mb-6 flex flex-col items-center rounded-3xl border border-[#1ed760]/20 bg-gradient-to-b from-[#1ed760]/5 to-transparent p-8">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#b3b3b3]">
          Nomor Antrian
        </p>
        <p className="text-6xl font-black text-[#1ed760]">{queueNumber}</p>
        <p className="mt-2 text-xs text-[#b3b3b3]">{orderId}</p>
      </div>

      {/* Total */}
      <div className="mb-6 w-full rounded-xl bg-[#181818] p-4 text-center">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b3b3b3]">
          Total Bayar di Kasir
        </p>
        <p className="text-2xl font-black text-[#1ed760]">{formatRupiah(total)}</p>
      </div>

      {/* Instructions */}
      <div className="w-full rounded-xl bg-[#181818] p-4">
        <div className="flex items-start gap-3">
          <span
            className="material-symbols-outlined mt-0.5 text-[20px] text-[#1ed760]"
            aria-hidden="true"
          >
            info
          </span>
          <div>
            <p className="text-xs font-semibold text-white">Instruksi</p>
            <p className="mt-1 text-xs leading-5 text-[#b3b3b3]">
              Tunjukkan nomor antrian ini ke kasir {storeName} dan lakukan pembayaran tunai. Pesanan
              akan diproses setelah pembayaran diterima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentProcessPage({ store }: { store: StoreViewData }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const method = (searchParams.get("method") ?? "qris") as PaymentMethod;
  const total = parseInt(searchParams.get("total") ?? "0", 10);
  const customerName = searchParams.get("name") ?? "";
  const tableNumber = searchParams.get("table") ?? "";

  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [orderId] = useState(() => generateOrderId());
  const [isProcessing, setIsProcessing] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (method === "cash") return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [method]);

  const handleConfirmPayment = useCallback(() => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      const params = new URLSearchParams({
        orderId,
        method,
        total: total.toString(),
        name: customerName,
        table: tableNumber,
      });
      router.push(`/store/${store.slug}/payment/success?${params.toString()}`);
    }, 2000);
  }, [orderId, method, total, customerName, tableNumber, router, store.slug]);

  // Auto-confirm for QRIS/Bank after simulated delay
  useEffect(() => {
    if (method === "cash") return;
    const timeout = setTimeout(() => {
      handleConfirmPayment();
    }, 8000); // auto-confirm after 8 seconds for demo
    return () => clearTimeout(timeout);
  }, [method, handleConfirmPayment]);

  const methodLabels: Record<PaymentMethod, string> = {
    qris: "QRIS",
    bank: "Transfer Bank",
    cash: "Tunai",
  };

  const methodIcons: Record<PaymentMethod, string> = {
    qris: "qr_code_2",
    bank: "account_balance",
    cash: "payments",
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#121212]/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-[40px_1fr_40px] items-center gap-3">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5"
            type="button"
            aria-label="Kembali"
            title="Kembali"
            onClick={() => router.back()}
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              arrow_back
            </span>
          </button>
          <div className="min-w-0 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1ed760]">
              Langkah 3 dari 3
            </p>
            <h1 className="truncate font-display text-[1.15rem] font-black text-white">
              {methodLabels[method]}
            </h1>
          </div>
          <div />
        </div>
      </header>

      <main className="w-full px-4 pb-40 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Processing overlay */}
          {isProcessing && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212]/95 backdrop-blur-xl">
              <div className="relative mb-6">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#1ed760]/20 border-t-[#1ed760]" />
              </div>
              <p className="text-sm font-bold text-white">Memverifikasi pembayaran...</p>
              <p className="mt-1 text-xs text-[#b3b3b3]">Harap tunggu sebentar</p>
            </div>
          )}

          {/* Method badge */}
          <div className="mb-6 flex items-center justify-center">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <span
                className="material-symbols-outlined text-[18px] text-[#1ed760]"
                aria-hidden="true"
              >
                {methodIcons[method]}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                {methodLabels[method]}
              </span>
            </div>
          </div>

          {/* Content by method */}
          {method === "qris" && (
            <QRISView
              total={total}
              orderId={orderId}
              timeLeft={timeLeft}
              accentClassName={store.accentClassName}
            />
          )}

          {method === "bank" && (
            <BankTransferView total={total} orderId={orderId} timeLeft={timeLeft} />
          )}

          {method === "cash" && (
            <CashView total={total} orderId={orderId} storeName={store.storeName} />
          )}
        </div>
      </main>

      {/* Bottom CTA - only for cash */}
      {method === "cash" && (
        <div className="fixed bottom-0 left-0 z-40 w-full border-t border-surface-bright bg-[#121212]/95 p-4 shadow-[0px_-8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-6">
          <div className="mx-auto max-w-2xl">
            <button
              className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[10px] font-black uppercase tracking-[0.18em] transition-all ${store.accentClassName} text-[#121212] hover:opacity-90`}
              type="button"
              onClick={handleConfirmPayment}
              disabled={isProcessing}
              aria-label="Sudah bayar di kasir"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                check_circle
              </span>
              <span>Sudah Bayar di Kasir</span>
            </button>
          </div>
        </div>
      )}

      {/* Bottom info for QRIS/Bank */}
      {method !== "cash" && (
        <div className="fixed bottom-0 left-0 z-40 w-full border-t border-surface-bright bg-[#121212]/95 p-4 shadow-[0px_-8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-6">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#1ed760]" />
              <p className="text-xs text-[#b3b3b3]">
                Menunggu pembayaran... otomatis terverifikasi
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
