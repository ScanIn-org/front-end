import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import PaymentPage from "@/components/store/PaymentPage";
import { getStoreSlugs, getStoreViewData } from "@/components/store/store-data";

export function generateStaticParams() {
  return getStoreSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const store = getStoreViewData(params.slug);

  return {
    title: `Pembayaran - ${store.storeName} - Scan.in`,
    description: `Pilih metode pembayaran di ${store.storeName}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const store = getStoreViewData(params.slug);

  if (!store) {
    notFound();
  }

  return (
    <Suspense>
      <PaymentPage store={store} />
    </Suspense>
  );
}
