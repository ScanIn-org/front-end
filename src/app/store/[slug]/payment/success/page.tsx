import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import PaymentSuccessPage from "@/components/store/PaymentSuccessPage";
import { getStoreSlugs, getStoreViewData } from "@/components/store/store-data";

export function generateStaticParams() {
  return getStoreSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const store = getStoreViewData(params.slug);

  return {
    title: `Pembayaran Berhasil - ${store.storeName} - Scan.in`,
    description: `Pembayaran berhasil di ${store.storeName}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const store = getStoreViewData(params.slug);

  if (!store) {
    notFound();
  }

  return (
    <Suspense>
      <PaymentSuccessPage store={store} />
    </Suspense>
  );
}
