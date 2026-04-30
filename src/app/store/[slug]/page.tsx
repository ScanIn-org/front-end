import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StoreViewPage from "@/components/store/StoreViewPage";
import { getStoreSlugs, getStoreViewData } from "@/components/store/store-data";

export function generateStaticParams() {
  return getStoreSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const store = getStoreViewData(params.slug);

  return {
    title: `${store.storeName} - Scan.in`,
    description: store.description,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const store = getStoreViewData(params.slug);

  if (!store) {
    notFound();
  }

  return <StoreViewPage store={store} />;
}
