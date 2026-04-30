"use client";

export default function LiveOrderMonitoringSection() {
  return (
    <section className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl text-white mb-4">
            Pantau Pesanan Secara Live
          </h2>
          <p className="text-zinc-500 font-body-md max-w-2xl mx-auto">
            Dashboard monitoring real-time yang didesain untuk kecepatan dan ketepatan operasional
            dapur Anda.
          </p>
        </div>
        <div className="bg-[#181818] rounded-2xl p-4 md:p-8 border border-zinc-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[120px] text-[#1ed760]">
              monitoring
            </span>
          </div>
          {/* UI Mockup Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Order Column 1 - New Orders */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2 mb-2">
                <h3 className="text-[#1ed760] font-bold text-sm tracking-widest uppercase">
                  Pesanan Baru
                </h3>
                <span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded text-[10px]">4</span>
              </div>
              <div className="bg-[#282828] p-4 rounded-lg border-l-4 border-[#1ed760]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white font-bold text-sm">Meja 08 - Aris</span>
                  <span className="text-zinc-500 text-xs">2 mnt lalu</span>
                </div>
                <ul className="text-zinc-400 text-xs space-y-1">
                  <li>2x Nasi Goreng Gila (Pedas)</li>
                  <li>1x Es Teh Manis</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-zinc-700 hover:bg-[#1ed760] hover:text-black transition-colors text-[10px] font-bold py-1.5 rounded uppercase">
                    Proses
                  </button>
                </div>
              </div>
            </div>

            {/* Order Column 2 - Cooking */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2 mb-2">
                <h3 className="text-zinc-400 font-bold text-sm tracking-widest uppercase">
                  Sedang Dimasak
                </h3>
                <span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded text-[10px]">2</span>
              </div>
              <div className="bg-[#282828] p-4 rounded-lg border-l-4 border-yellow-500">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white font-bold text-sm">Meja 12 - Linda</span>
                  <span className="text-zinc-500 text-xs">8 mnt lalu</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full mb-3">
                  <div className="bg-yellow-500 h-full w-[65%] rounded-full"></div>
                </div>
                <ul className="text-zinc-400 text-xs space-y-1">
                  <li>1x Wagyu Steak Medium</li>
                  <li>1x Garlic Bread</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-zinc-700 hover:bg-[#1ed760] hover:text-black transition-colors text-[10px] font-bold py-1.5 rounded uppercase">
                    Selesai
                  </button>
                </div>
              </div>
            </div>

            {/* Order Column 3 - Ready to Serve */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2 mb-2">
                <h3 className="text-zinc-400 font-bold text-sm tracking-widest uppercase">
                  Siap Sajikan
                </h3>
                <span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded text-[10px]">1</span>
              </div>
              <div className="bg-[#282828] p-4 rounded-lg opacity-80">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white font-bold text-sm">Meja 02 - Budi</span>
                  <span className="material-symbols-outlined text-[#1ed760] text-sm">
                    check_circle
                  </span>
                </div>
                <ul className="text-zinc-400 text-xs space-y-1">
                  <li>3x Es Kopi Susu Aren</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-[#1ed760] text-black text-[10px] font-bold py-1.5 rounded uppercase">
                    Antarkan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
