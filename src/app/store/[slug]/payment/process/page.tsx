import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import PaymentProcessPage from "@/components/store/PaymentProcessPage";
import { getStoreSlugs, getStoreViewData } from "@/components/store/store-data";

export function generateStaticParams() {
  return getStoreSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const store = getStoreViewData(params.slug);

  return {
    title: `Proses Pembayaran - ${store.storeName} - Scan.in`,
    description: `Proses pembayaran di ${store.storeName}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const store = getStoreViewData(params.slug);

  if (!store) {
    notFound();
  }

  return (
    <Suspense>
      <PaymentProcessPage store={store} />
    </Suspense>
  );
}
