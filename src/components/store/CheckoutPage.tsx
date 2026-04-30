"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { StoreViewData } from "./store-data";

function parsePrice(price: string): number {
  return parseInt(price.replace(/[^\d]/g, ""), 10) || 0;
}

function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

export default function CheckoutPage({ store }: { store: StoreViewData }) {
  const router = useRouter();
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [notes, setNotes] = useState("");

  const cartItems = store.menuItems.filter(
    (item) => typeof item.quantity === "number" && item.quantity > 0,
  );

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * (item.quantity ?? 0),
    0,
  );
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  const canProceed = customerName.trim().length > 0 && tableNumber.trim().length > 0;

  function handleProceed() {
    if (!canProceed) return;
    const params = new URLSearchParams({
      name: customerName.trim(),
      table: tableNumber.trim(),
      notes: notes.trim(),
      total: total.toString(),
    });
    router.push(`/store/${store.slug}/payment?${params.toString()}`);
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
            title="Kembali ke menu"
            onClick={() => router.back()}
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              arrow_back
            </span>
          </button>
          <div className="min-w-0 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1ed760]">
              Checkout
            </p>
            <h1 className="truncate font-display text-[1.15rem] font-black text-white">
              Review Pesanan
            </h1>
          </div>
          <div />
        </div>
      </header>

      <main className="w-full px-4 pb-40 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Store info */}
          <div className="mb-5 flex items-center gap-3 rounded-xl bg-[#181818] p-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${store.accentClassName}`}
            >
              <span
                className="material-symbols-outlined text-[20px] text-[#121212]"
                aria-hidden="true"
              >
                storefront
              </span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-white">{store.storeName}</p>
              <p className="text-xs text-[#b3b3b3]">{store.location}</p>
            </div>
          </div>

          {/* Order Items */}
          <section className="mb-6">
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]">
              Pesanan Kamu
            </h2>
            <div className="overflow-hidden rounded-xl border border-white/5 bg-[#181818]">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-4 ${index < cartItems.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-[#101010]">
                    <img
                      alt={item.imageAlt}
                      className="h-full w-full object-cover"
                      src={item.imageSrc}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-white">{item.name}</p>
                    <p className="text-xs text-[#b3b3b3]">{item.price}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-white">
                      {item.quantity}x
                    </span>
                    <span className="mt-1 text-xs font-semibold text-white">
                      {formatRupiah(parsePrice(item.price) * (item.quantity ?? 0))}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Customer Info */}
          <section className="mb-6">
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]">
              Informasi Pelanggan
            </h2>
            <div className="space-y-3">
              <div className="group rounded-xl border border-white/5 bg-[#181818] p-4 transition-colors focus-within:border-[#1ed760]/40">
                <label
                  htmlFor="customer-name"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#b3b3b3]"
                >
                  Nama Pelanggan *
                </label>
                <input
                  id="customer-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Masukkan nama kamu"
                  className="w-full border-0 bg-transparent text-sm text-white placeholder-[#535353] outline-none"
                />
              </div>
              <div className="group rounded-xl border border-white/5 bg-[#181818] p-4 transition-colors focus-within:border-[#1ed760]/40">
                <label
                  htmlFor="table-number"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#b3b3b3]"
                >
                  Nomor Meja *
                </label>
                <input
                  id="table-number"
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="Contoh: 12"
                  className="w-full border-0 bg-transparent text-sm text-white placeholder-[#535353] outline-none"
                />
              </div>
              <div className="group rounded-xl border border-white/5 bg-[#181818] p-4 transition-colors focus-within:border-[#1ed760]/40">
                <label
                  htmlFor="order-notes"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#b3b3b3]"
                >
                  Catatan (Opsional)
                </label>
                <textarea
                  id="order-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Misalnya: kurang manis, tanpa es..."
                  rows={2}
                  className="w-full resize-none border-0 bg-transparent text-sm text-white placeholder-[#535353] outline-none"
                />
              </div>
            </div>
          </section>

          {/* Price Breakdown */}
          <section className="mb-6">
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]">
              Ringkasan Pembayaran
            </h2>
            <div className="overflow-hidden rounded-xl border border-white/5 bg-[#181818] p-4">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-[#b3b3b3]">
                  Subtotal ({cartItems.reduce((s, i) => s + (i.quantity ?? 0), 0)} item)
                </span>
                <span className="text-white">{formatRupiah(subtotal)}</span>
              </div>
              <div className="mb-3 flex justify-between text-sm">
                <span className="text-[#b3b3b3]">PB1 (10%)</span>
                <span className="text-white">{formatRupiah(tax)}</span>
              </div>
              <div className="border-t border-white/5 pt-3">
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-white">Total</span>
                  <span className="text-lg font-black text-[#1ed760]">{formatRupiah(total)}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 z-40 w-full border-t border-surface-bright bg-[#121212]/95 p-4 shadow-[0px_-8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-6">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-on-surface-variant">Total Pembayaran</span>
            <span className="text-lg font-bold text-white">{formatRupiah(total)}</span>
          </div>
          <button
            className={`flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] transition-all sm:px-8 sm:text-label-caps ${
              canProceed
                ? `${store.accentClassName} text-[#121212] hover:opacity-90 hover:scale-[1.02]`
                : "cursor-not-allowed bg-[#535353] text-[#b3b3b3]"
            }`}
            type="button"
            disabled={!canProceed}
            onClick={handleProceed}
            aria-label="Lanjut ke pembayaran"
          >
            <span>Bayar</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
