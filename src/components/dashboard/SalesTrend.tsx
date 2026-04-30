import React from 'react';

export default function SalesTrend() {
  return (
    <section className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 transition-colors hover:bg-[#2A2D36]">
      <div className="flex items-center justify-between mb-8">
        <div className="font-bold text-white text-lg tracking-wide border-b border-white/5 pb-2">Tren Penjualan (24 Jam)</div>
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#22E584] shadow-[0_0_8px_rgba(34,229,132,0.4)]"></span> <span className="text-[#A3A3A3]">Hari Ini</span></div>
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#353535]"></span> <span className="text-[#A3A3A3]">Kemarin</span></div>
        </div>
      </div>
      
      <div className="h-56 flex items-end gap-3 border-b border-white/5 pb-2 relative">
        <div className="absolute inset-0 flex flex-col justify-between border-t border-white/5 pt-2 pointer-events-none opacity-20">
          <div className="border-b border-white/20 h-0 w-full"></div>
          <div className="border-b border-white/20 h-0 w-full"></div>
          <div className="border-b border-white/20 h-0 w-full"></div>
        </div>
        {[
          { time: '06:00', val1: 40, val2: 25 },
          { time: '09:00', val1: 50, val2: 30 },
          { time: '12:00', val1: 90, val2: 45 },
          { time: '15:00', val1: 60, val2: 35 },
          { time: '18:00', val1: 45, val2: 30 },
          { time: '21:00', val1: 30, val2: 20 },
          { time: '00:00', val1: 65, val2: 40 }
        ].map((item, idx) => (
          <div key={item.time} className="flex flex-col items-center flex-1 group z-10">
            <div className="flex items-end gap-1.5 w-full justify-center h-48">
              <div className="w-[10px] bg-white/10 rounded-t-sm group-hover:bg-white/20 transition-colors" style={{height: `${item.val2}%`}}></div>
              <div className="w-[10px] bg-[#22E584] rounded-t-sm shadow-[0_0_10px_rgba(34,229,132,0.2)] group-hover:shadow-[0_0_15px_rgba(34,229,132,0.4)] transition-all" style={{height: `${item.val1}%`}}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-3 px-1">
        {['06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00'].map(time => (
          <div key={time} className="text-[11px] font-medium text-[#A3A3A3] w-full text-center">{time}</div>
        ))}
      </div>
    </section>
  );
}
