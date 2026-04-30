import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CheckoutPage from "@/components/store/CheckoutPage";
import { getStoreSlugs, getStoreViewData } from "@/components/store/store-data";

export function generateStaticParams() {
  return getStoreSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const store = getStoreViewData(params.slug);

  return {
    title: `Checkout - ${store.storeName} - Scan.in`,
    description: `Review pesanan di ${store.storeName}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const store = getStoreViewData(params.slug);

  if (!store) {
    notFound();
  }

  return <CheckoutPage store={store} />;
}
