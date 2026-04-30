"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { StoreViewData } from "./store-data";

type PaymentMethod = "qris" | "bank" | "cash";

const paymentMethods: {
  id: PaymentMethod;
  label: string;
  description: string;
  icon: string;
  tag?: string;
}[] = [
  {
    id: "qris",
    label: "QRIS",
    description: "Scan QR untuk bayar via e-wallet atau m-banking",
    icon: "qr_code_2",
    tag: "Populer",
  },
  {
    id: "bank",
    label: "Transfer Bank",
    description: "Bayar via Virtual Account BCA, Mandiri, BNI",
    icon: "account_balance",
  },
  {
    id: "cash",
    label: "Tunai",
    description: "Bayar langsung di kasir",
    icon: "payments",
  },
];

function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

export default function PaymentPage({ store }: { store: StoreViewData }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<PaymentMethod | null>(null);

  const total = parseInt(searchParams.get("total") ?? "0", 10);
  const customerName = searchParams.get("name") ?? "";
  const tableNumber = searchParams.get("table") ?? "";
  const notes = searchParams.get("notes") ?? "";

  function handleProceed() {
    if (!selected) return;
    const params = new URLSearchParams({
      method: selected,
      total: total.toString(),
      name: customerName,
      table: tableNumber,
      notes,
    });
    router.push(`/store/${store.slug}/payment/process?${params.toString()}`);
  }

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#121212]/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-[40px_1fr_40px] items-center gap-3">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5"
            type="button"
            aria-label="Kembali"
            title="Kembali ke review"
            onClick={() => router.back()}
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              arrow_back
            </span>
          </button>
          <div className="min-w-0 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1ed760]">
              Langkah 2 dari 3
            </p>
            <h1 className="truncate font-display text-[1.15rem] font-black text-white">
              Metode Pembayaran
            </h1>
          </div>
          <div />
        </div>
      </header>

      <main className="w-full px-4 pb-40 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Total summary card */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#1a1a2e] to-[#181818] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]">
                  Total Pembayaran
                </p>
                <p className="text-2xl font-black text-[#1ed760]">{formatRupiah(total)}</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1ed760]/10">
                <span
                  className="material-symbols-outlined text-[28px] text-[#1ed760]"
                  aria-hidden="true"
                >
                  receipt_long
                </span>
              </div>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold text-[#b3b3b3]">
                <span
                  className="material-symbols-outlined mr-1 align-middle text-[12px]"
                  aria-hidden="true"
                >
                  person
                </span>
                {customerName}
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold text-[#b3b3b3]">
                <span
                  className="material-symbols-outlined mr-1 align-middle text-[12px]"
                  aria-hidden="true"
                >
                  table_restaurant
                </span>
                Meja {tableNumber}
              </span>
            </div>
          </div>

          {/* Payment Methods */}
          <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]">
            Pilih Metode
          </h2>
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const isSelected = selected === method.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelected(method.id)}
                  className={`group relative flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-[#1ed760]/60 bg-[#1ed760]/5 shadow-[0_0_20px_rgba(30,215,96,0.1)]"
                      : "border-white/5 bg-[#181818] hover:border-white/10 hover:bg-[#1f1f1f]"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isSelected ? "bg-[#1ed760]/15" : "bg-white/5"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[24px] transition-colors ${
                        isSelected ? "text-[#1ed760]" : "text-[#b3b3b3]"
                      }`}
                      aria-hidden="true"
                    >
                      {method.icon}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p
                        className={`text-sm font-bold transition-colors ${
                          isSelected ? "text-white" : "text-[#e0e0e0]"
                        }`}
                      >
                        {method.label}
                      </p>
                      {method.tag && (
                        <span className="rounded-full bg-[#1ed760]/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#1ed760]">
                          {method.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-[#b3b3b3]">{method.description}</p>
                  </div>
                  <div
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                      isSelected
                        ? "border-[#1ed760] bg-[#1ed760]"
                        : "border-[#535353] bg-transparent"
                    }`}
                  >
                    {isSelected && (
                      <span
                        className="material-symbols-outlined text-[16px] text-[#121212]"
                        aria-hidden="true"
                      >
                        check
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Security note */}
          <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#181818] p-4">
            <span
              className="material-symbols-outlined mt-0.5 text-[18px] text-[#1ed760]"
              aria-hidden="true"
            >
              verified_user
            </span>
            <div>
              <p className="text-xs font-semibold text-white">Pembayaran Aman</p>
              <p className="mt-0.5 text-[11px] text-[#b3b3b3]">
                Transaksi kamu dilindungi enkripsi end-to-end dan diverifikasi secara real-time.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 z-40 w-full border-t border-surface-bright bg-[#121212]/95 p-4 shadow-[0px_-8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-6">
        <div className="mx-auto max-w-2xl">
          <button
            className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[10px] font-black uppercase tracking-[0.18em] transition-all sm:text-label-caps ${
              selected
                ? `${store.accentClassName} text-[#121212] hover:opacity-90 hover:scale-[1.01]`
                : "cursor-not-allowed bg-[#535353] text-[#b3b3b3]"
            }`}
            type="button"
            disabled={!selected}
            onClick={handleProceed}
            aria-label="Konfirmasi pembayaran"
          >
            <span>
              {selected === "cash"
                ? "Konfirmasi Pesanan"
                : selected
                  ? `Bayar dengan ${paymentMethods.find((m) => m.id === selected)?.label}`
                  : "Pilih Metode Pembayaran"}
            </span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
