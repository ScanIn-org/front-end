"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="A professional, high-resolution photograph of a modern, bustling cafe interior with warm lighting and minimalist wooden furniture."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4bLHVi7rAy8eQc-Xn0_j1JCAE_8RQ8ApizoM3SWMyHFvAge8Obc-Bk6p-2e5r2wHKET1_XYsdsgxskpkjoWXtTXBOD7i8k9VT4YiSxkrlS5d1WmJXEZDN3c76GyS1XosP8PlSWKL1Blbi93XkqDqIVH-0zcrwsZora4vjVkVVCGvtr42Vb4cEqCEsMdcEaGJB4iHVKFchV2-IUSP795BP8gJLY5fn5uj17-TXdZLoWBugnccsbr6GAtK2UP12XXq6UApBBl0TZXw"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          sizes="100vw"
          loading="eager"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <span className="text-[#1ed760] font-label-caps text-label-caps uppercase tracking-[2px] mb-4 block">
            Solusi UMKM Indonesia
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Digitalkan Restoran Anda dengan <span className="text-[#1ed760]">Satu Scan.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed font-body-md">
            Kelola pesanan secara real-time, tingkatkan efisiensi meja, dan berikan pengalaman
            pelanggan yang modern tanpa hambatan teknologi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/register" className="spotify-pill-primary text-center">Mulai Sekarang</Link>
            <button className="spotify-pill-secondary">Lihat Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}
