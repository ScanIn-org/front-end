import React from 'react';

export default function BusinessSummary() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white tracking-wide">Ringkasan Bisnis <span className="text-xs font-normal text-[#A3A3A3] ml-2 tracking-normal">Update terakhir: Hari ini, 14:20 WIB</span></h2>
      </div>
      <section className="grid grid-cols-4 gap-5">
        <div className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-40 transition-colors hover:bg-[#2A2D36]">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#22E584]/10 flex items-center justify-center text-[#22E584]">
              <span className="material-symbols-outlined text-[22px]">payments</span>
            </div>
            <div className="flex items-center gap-1 bg-[#22E584]/10 text-[#22E584] px-2 py-1 rounded-md text-[11px] font-bold">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +12.5%
            </div>
          </div>
          <div>
            <div className="text-[13px] text-[#A3A3A3] mb-1 font-medium">Total Pendapatan Hari Ini</div>
            <div className="text-white text-2xl font-bold tracking-tight">Rp 4.250.000</div>
          </div>
        </div>
        
        <div className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-40 transition-colors hover:bg-[#2A2D36]">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#A3A3A3]">
              <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
            </div>
            <div className="flex items-center gap-1 bg-[#22E584]/10 text-[#22E584] px-2 py-1 rounded-md text-[11px] font-bold">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +5.2%
            </div>
          </div>
          <div>
            <div className="text-[13px] text-[#A3A3A3] mb-1 font-medium">Jumlah Pesanan</div>
            <div className="text-white text-2xl font-bold tracking-tight">124 <span className="text-base font-medium text-white/50">Pesanan</span></div>
          </div>
        </div>
        
        <div className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-40 transition-colors hover:bg-[#2A2D36]">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#A3A3A3]">
              <span className="material-symbols-outlined text-[22px]">receipt_long</span>
            </div>
            <div className="flex items-center gap-1 bg-red-500/10 text-red-400 px-2 py-1 rounded-md text-[11px] font-bold">
              <span className="material-symbols-outlined text-[14px]">trending_down</span> -2.1%
            </div>
          </div>
          <div>
            <div className="text-[13px] text-[#A3A3A3] mb-1 font-medium">Rata-rata Keranjang</div>
            <div className="text-white text-2xl font-bold tracking-tight">Rp 34.200</div>
          </div>
        </div>
        
        <div className="bg-[#22E584] rounded-2xl p-6 flex flex-col justify-between h-40 text-black shadow-[0_8px_20px_rgba(34,229,132,0.15)] relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-20">
             <span className="material-symbols-outlined text-[120px]">bolt</span>
          </div>
          <div className="flex items-start justify-between relative z-10">
            <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center text-black">
              <span className="material-symbols-outlined text-[22px]">bolt</span>
            </div>
            <span className="bg-black text-[#22E584] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#22E584] rounded-full animate-pulse"></span> LIVE
            </span>
          </div>
          <div className="relative z-10">
            <div className="text-[11px] font-bold tracking-wide mb-1 opacity-80 uppercase">PESANAN BARU AKTIF</div>
            <div className="text-3xl font-black tracking-tight">8 <span className="text-xl font-bold opacity-80">Pesanan</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
