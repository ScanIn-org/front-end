"use client";

import Image from "next/image";

export default function BentoGridBenefits() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
          {/* Large Feature: QR Menu */}
          <div className="md:col-span-2 md:row-span-2 tonal-card rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-[#1ed760] mb-6 text-4xl">
                qr_code_2
              </span>
              <h3 className="font-headline text-3xl text-white mb-4">Digital Menu QR</h3>
              <p className="text-zinc-400 font-body-md max-w-sm">
                Pelanggan hanya perlu scan untuk melihat menu, memesan, dan membayar langsung dari
                smartphone mereka.
              </p>
            </div>
            <Image
              alt="A professional close-up photograph of a stylish QR code stand on a clean, modern restaurant table."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAknLvyw4Eh_SMa8MPFBcssrf5qUy_4BuVERbE9vOQT5U-3x_Iml3YIClIi14-qTOMFPrn_W1tCvywIzX4gtbPAjzx97BL-TLfxQkMAhEwN8z2go89inbFj6br1XxVialX_moJYAyeaizs47ffkPUuXo9si_xopjRRcW83oZPO7iGLoeZ634MAk3lJHeBN-p2_8tWGrUtWLua5X7DKO-TDyj9TjCD87tP6zVhuvlyjIYeufMUbwNxoF1VPEBbEN8rwt0HCvWrx6yKI"
              fill
              className="absolute bottom-0 right-0 w-2/3 h-1/2 object-cover rounded-tl-3xl opacity-20 group-hover:opacity-40 transition-opacity"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Medium Feature: POS Integration */}
          <div className="md:col-span-2 tonal-card rounded-2xl p-8 flex items-center gap-6 group">
            <div className="flex-1">
              <h3 className="font-title-md text-white mb-2">POS Terintegrasi</h3>
              <p className="text-zinc-400 text-sm font-body-sm">
                Semua transaksi tercatat otomatis ke dalam laporan keuangan harian Anda secara
                akurat.
              </p>
            </div>
            <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-[#1ed760] transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-white group-hover:text-black text-3xl">
                point_of_sale
              </span>
            </div>
          </div>

          {/* Small Feature: Analytics */}
          <div className="tonal-card rounded-2xl p-8 group">
            <span className="material-symbols-outlined text-[#1ed760] mb-4">insights</span>
            <h3 className="font-title-md text-white mb-1">Analitik Pintar</h3>
            <p className="text-zinc-500 text-xs">
              Pahami menu terlaris dan jam sibuk restoran Anda.
            </p>
          </div>

          {/* Small Feature: Multi-Outlet */}
          <div className="tonal-card rounded-2xl p-8 group">
            <span className="material-symbols-outlined text-[#1ed760] mb-4">storefront</span>
            <h3 className="font-title-md text-white mb-1">Multi-Cabang</h3>
            <p className="text-zinc-500 text-xs">
              Kelola semua cabang Anda dalam satu dashboard pusat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
