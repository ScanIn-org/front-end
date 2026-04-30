import React from 'react';

export default function ServiceInfo() {
  return (
    <section className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 transition-colors hover:bg-[#2A2D36]">
      <div className="font-bold text-white mb-6 text-lg tracking-wide border-b border-white/5 pb-4">Informasi Layanan</div>
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm text-[#A3A3A3]">Status Toko:</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22E584] animate-pulse"></span>
          <span className="text-[#22E584] font-bold text-sm">Buka</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-8">
        <span className="text-sm text-[#A3A3A3]">Metode Scan.in:</span>
        <span className="text-white font-bold text-sm bg-white/5 px-2 py-1 rounded border border-white/10">QR Table Active</span>
      </div>
      <button className="w-full py-3 bg-[#22E584] hover:bg-[#22E584]/90 text-black rounded-xl font-bold transition-colors shadow-[0_4px_14px_rgba(34,229,132,0.2)]">Unduh Laporan</button>
    </section>
  );
}
