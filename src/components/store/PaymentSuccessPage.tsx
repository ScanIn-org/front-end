"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { StoreViewData } from "./store-data";

function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

const methodLabels: Record<string, string> = {
  qris: "QRIS",
  bank: "Transfer Bank",
  cash: "Tunai",
};

export default function PaymentSuccessPage({ store }: { store: StoreViewData }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId") ?? "SCI-000000";
  const method = searchParams.get("method") ?? "qris";
  const total = parseInt(searchParams.get("total") ?? "0", 10);
  const customerName = searchParams.get("name") ?? "";
  const tableNumber = searchParams.get("table") ?? "";

  const [showContent, setShowContent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [estimatedTime] = useState(() => Math.floor(Math.random() * 10) + 10); // 10-20 minutes

  useEffect(() => {
    const t1 = setTimeout(() => setShowContent(true), 400);
    const t2 = setTimeout(() => setShowDetails(true), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          {/* Success Animation */}
          <div className="mb-8 flex flex-col items-center">
            {/* Animated checkmark circle */}
            <div className="relative mb-6">
              {/* Outer pulse rings */}
              <div
                className="absolute inset-0 animate-ping rounded-full bg-[#1ed760]/20"
                style={{ animationDuration: "2s" }}
              />
              <div
                className="absolute -inset-3 animate-pulse rounded-full bg-[#1ed760]/5"
                style={{ animationDuration: "3s" }}
              />

              {/* Main circle */}
              <div
                className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#1ed760] to-[#0fb34a] shadow-[0_0_40px_rgba(30,215,96,0.4)]"
                style={{
                  animation: "scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
                }}
              >
                <span
                  className="material-symbols-outlined text-[48px] text-[#121212]"
                  aria-hidden="true"
                  style={{
                    fontVariationSettings: "'FILL' 1, 'wght' 700",
                  }}
                >
                  check
                </span>
              </div>
            </div>

            {/* Success text */}
            <div
              className="text-center transition-all duration-700"
              style={{
                opacity: showContent ? 1 : 0,
                transform: showContent ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h1 className="mb-2 text-2xl font-black text-white">Pembayaran Berhasil!</h1>
              <p className="text-sm text-[#b3b3b3]">
                Pesananmu sedang diproses oleh {store.storeName}
              </p>
            </div>
          </div>

          {/* Order Details */}
          <div
            className="space-y-4 transition-all duration-700"
            style={{
              opacity: showDetails ? 1 : 0,
              transform: showDetails ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* Order ID Card */}
            <div className="rounded-2xl border border-[#1ed760]/20 bg-gradient-to-br from-[#1a2e1a] to-[#181818] p-5 text-center">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#b3b3b3]">
                Order ID
              </p>
              <p className="font-mono text-xl font-black tracking-wider text-[#1ed760]">
                {orderId}
              </p>
            </div>

            {/* Details */}
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#181818]">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="text-xs text-[#b3b3b3]">Pelanggan</span>
                <span className="text-sm font-semibold text-white">{customerName}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="text-xs text-[#b3b3b3]">Nomor Meja</span>
                <span className="text-sm font-semibold text-white">Meja {tableNumber}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="text-xs text-[#b3b3b3]">Metode Bayar</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  <span
                    className="material-symbols-outlined text-[14px] text-[#1ed760]"
                    aria-hidden="true"
                  >
                    {method === "qris"
                      ? "qr_code_2"
                      : method === "bank"
                        ? "account_balance"
                        : "payments"}
                  </span>
                  {methodLabels[method] ?? method}
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs text-[#b3b3b3]">Total Dibayar</span>
                <span className="text-sm font-black text-[#1ed760]">{formatRupiah(total)}</span>
              </div>
            </div>

            {/* Estimated time */}
            <div className="flex items-center gap-3 rounded-2xl bg-[#1ed760]/5 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1ed760]/10">
                <span
                  className="material-symbols-outlined text-[22px] text-[#1ed760]"
                  aria-hidden="true"
                >
                  schedule
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Estimasi Penyajian</p>
                <p className="text-xs text-[#b3b3b3]">
                  ~{estimatedTime} menit · Pesanan sedang disiapkan
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => router.push(`/store/${store.slug}`)}
                className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[10px] font-black uppercase tracking-[0.18em] transition-all hover:opacity-90 hover:scale-[1.01] sm:text-label-caps ${store.accentClassName} text-[#121212]`}
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  restaurant_menu
                </span>
                <span>Kembali ke Menu</span>
              </button>

              <button
                type="button"
                onClick={() => router.push("/")}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 py-3.5 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-white/5 sm:text-label-caps"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  home
                </span>
                <span>Halaman Utama</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* CSS for scaleIn animation */}
      <style jsx>{`
        @keyframes scaleIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          60% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
