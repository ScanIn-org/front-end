import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-[#181A20]/80 backdrop-blur-xl sticky top-0 z-40">
      <div className="text-2xl font-bold text-white tracking-tight">
        Dashboard Ringkasan
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#A3A3A3] text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="Cari transaksi..."
            className="pl-10 pr-4 py-2.5 bg-[#23262F]/80 border border-white/5 text-white rounded-xl focus:outline-none focus:border-[#22E584]/50 focus:bg-[#23262F] transition-all text-sm w-[280px] backdrop-blur-sm placeholder:text-[#A3A3A3]"
          />
        </div>
        <button className="text-[#A3A3A3] hover:text-white transition-colors relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5">
          <span className="material-symbols-outlined text-[24px]">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#22E584] rounded-full border border-[#181A20]"></span>
        </button>
        <button className="text-[#A3A3A3] hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5">
          <span className="material-symbols-outlined text-[24px]">help</span>
        </button>
        <div className="flex items-center gap-3 ml-2 pl-4 border-l border-white/10 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 rounded-full bg-[#23262F] flex items-center justify-center overflow-hidden border border-white/10">
            <span className="material-symbols-outlined text-[#A3A3A3] text-[20px]">person</span>
          </div>
          <span className="font-semibold text-sm hidden md:block text-white">Store Settings</span>
        </div>
      </div>
    </header>
  );
}
