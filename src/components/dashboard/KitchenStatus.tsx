"use client";

import React from 'react';
import { useAppContext } from '@/context/AppContext';

export default function KitchenStatus() {
  const { orders } = useAppContext();

  // Filter out completed/failed orders
  const activeOrders = orders.filter(o => o.status === 'new' || o.status === 'preparing' || o.status === 'ready');
  const preparingCount = activeOrders.filter(o => o.status === 'new' || o.status === 'preparing').length;
  const readyCount = activeOrders.filter(o => o.status === 'ready').length;

  return (
    <section className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 transition-colors hover:bg-[#2A2D36]">
      <div className="font-bold text-white mb-5 text-lg tracking-wide">Status Dapur & Pesanan</div>
      
      <div className="flex gap-5 mb-6">
        <div className="flex-1 bg-[#181A20] border border-white/5 rounded-xl p-5 flex flex-col items-center justify-center text-center">
          <div className="text-yellow-400 font-bold text-3xl mb-1">{preparingCount}</div>
          <div className="text-[11px] text-[#A3A3A3] font-bold tracking-wider uppercase mb-0.5">DALAM PERSIAPAN</div>
          <div className="text-xs text-[#A3A3A3] opacity-80">Antrian</div>
        </div>
        <div className="flex-1 bg-[#181A20] border border-white/5 rounded-xl p-5 flex flex-col items-center justify-center text-center">
          <div className="text-[#22E584] font-bold text-3xl mb-1">{readyCount}</div>
          <div className="text-[11px] text-[#A3A3A3] font-bold tracking-wider uppercase mb-0.5">SIAP DIAMBIL</div>
          <div className="text-xs text-[#A3A3A3] opacity-80">Pesanan</div>
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
          <div className="text-xs text-[#A3A3A3] font-medium tracking-wide">Antrian Terkini</div>
          <button className="text-[11px] font-bold text-[#22E584] tracking-wider hover:text-[#22E584]/80 transition-colors uppercase">LIHAT SEMUA</button>
        </div>
        
        <div className="flex flex-col gap-3">
          {activeOrders.map((order, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-[#181A20] rounded-xl border border-white/5 hover:border-[#22E584]/30 transition-colors group cursor-pointer relative overflow-hidden">
              {/* Indikator status garis kiri */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                order.status === 'new' ? 'bg-red-400' :
                order.status === 'preparing' ? 'bg-yellow-400' :
                'bg-[#22E584]'
              }`}></div>
              
              <div className="pl-2">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-bold text-white tracking-wider">{order.id}</span>
                  <span className="text-xs text-[#A3A3A3] font-medium bg-white/5 px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span> {order.time}
                  </span>
                </div>
                <div className="text-sm font-medium text-white mb-1">{order.table}</div>
                <div className="text-xs text-[#A3A3A3] line-clamp-1">{order.items.map(i => `${i.qty}x ${i.name}`).join(', ')}</div>
              </div>
              
              <div className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                order.status === 'new' ? 'bg-red-400/10 text-red-400 border border-red-400/20' :
                order.status === 'preparing' ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20' :
                'bg-[#22E584]/10 text-[#22E584] border border-[#22E584]/20'
              }`}>
                {order.status === 'new' ? 'Pesanan Baru' :
                 order.status === 'preparing' ? 'Dimasak' :
                 'Siap'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
