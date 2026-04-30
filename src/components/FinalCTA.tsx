"use client";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 glass-gradient pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-white font-extrabold mb-8 leading-tight">
            Siap Untuk Memulai Revolusi Digital Restoran Anda?
          </h2>
          <p className="text-zinc-400 text-lg mb-12">
            Bergabunglah dengan ribuan merchant yang telah meningkatkan efisiensi dan pendapatan
            mereka bersama Scan.in.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="spotify-pill-primary px-12 py-4 text-lg">Daftar Sekarang</button>
            <button className="spotify-pill-secondary px-12 py-4 text-lg">Hubungi Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
