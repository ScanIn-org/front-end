"use client";

import { useRouter } from "next/navigation";
import type { StoreViewData } from "./store-data";

function StoreCard({
  item,
  accentClassName,
}: {
  item: StoreViewData["menuItems"][number];
  accentClassName: string;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-[#181818] transition-colors hover:bg-[#282828]">
      <div className="relative h-32 w-full overflow-hidden bg-[#101010]">
        <img alt={item.imageAlt} className="h-full w-full object-cover" src={item.imageSrc} />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="mb-1 text-title-md font-title-md leading-tight text-white">{item.name}</h3>
        <p className="mt-auto mb-3 text-body-md font-body-md text-primary-container">
          {item.price}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {typeof item.quantity === "number" ? (
            <>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-bright text-on-surface transition-colors hover:bg-surface-bright"
                type="button"
                aria-label={`Kurangi ${item.name}`}
                title={`Kurangi ${item.name}`}
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  remove
                </span>
              </button>
              <span className="text-body-md font-body-md font-bold text-white">
                {item.quantity}
              </span>
            </>
          ) : (
            <div />
          )}
          <button
            className={`flex h-8 w-8 items-center justify-center rounded-full text-[#121212] transition-opacity hover:opacity-90 ${accentClassName}`}
            type="button"
            aria-label={`Tambah ${item.name}`}
            title={`Tambah ${item.name}`}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              add
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StoreViewPage({ store }: { store: StoreViewData }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-on-background">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#121212]/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[40px_1fr_40px] items-center gap-3 sm:grid-cols-[40px_1fr_auto]">
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

          <div className="min-w-0 text-center sm:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1ed760] sm:text-[11px]">
              QR Menu
            </p>
            <h1 className="truncate font-display text-[1.15rem] font-black text-white sm:text-[1.35rem] lg:text-[1.5rem]">
              {store.storeName}
            </h1>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5"
            type="button"
            aria-label="Cari"
            title="Cari"
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              search
            </span>
          </button>
        </div>
      </header>

      <main className="w-full px-4 pb-32 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <section className="mb-5 lg:mb-6">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#121212] ${store.accentClassName}`}
              >
                {store.status}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b3b3b3]">
                {store.location}
              </span>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-[#b3b3b3] sm:text-base">
              {store.description}
            </p>
          </section>

          <div className="mb-5 flex gap-2 overflow-x-auto pb-2 no-scrollbar lg:mb-6">
            {store.categories.map((category) => (
              <button
                key={category.label}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition-colors sm:px-5 sm:py-2.5 ${
                  category.active
                    ? `${store.accentClassName} text-[#121212]`
                    : "border border-surface-bright text-on-surface hover:bg-surface-bright"
                }`}
                type="button"
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
            {store.menuItems.map((item) => (
              <StoreCard key={item.id} item={item} accentClassName={store.accentClassName} />
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 z-40 w-full border-t border-surface-bright bg-surface-container-high p-4 shadow-[0px_-8px_24px_rgba(0,0,0,0.5)] sm:p-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-on-surface-variant sm:text-body-sm">
              {store.cartItems} Items
            </span>
            <span className="text-lg font-bold text-white sm:text-headline">{store.cartTotal}</span>
          </div>
          <button
            className={`flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#121212] transition-opacity hover:opacity-90 sm:px-8 sm:text-label-caps ${store.accentClassName}`}
            type="button"
            aria-label="Checkout"
            title="Checkout"
            onClick={() => router.push(`/store/${store.slug}/checkout`)}
          >
            <span>Checkout</span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
