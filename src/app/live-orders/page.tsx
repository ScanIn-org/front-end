"use client";

import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { useAppContext, OrderStatus, Order } from '@/context/AppContext';

export default function LiveOrdersPage() {
  const { orders, moveOrder } = useAppContext();

  const getStatusColor = (status: OrderStatus) => {
    switch(status) {
      case 'new': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'preparing': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'ready': return 'bg-[#22E584]/10 text-[#22E584] border-[#22E584]/20';
    }
  };

  const renderOrderCard = (order: Order) => (
    <div key={order.id} className="bg-[#181A20] hover:bg-[#1f222a] transition-colors border border-white/5 rounded-xl p-5 flex flex-col gap-4">
      {/* Card Header */}
      <div className="flex items-start justify-between border-b border-white/5 pb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-black text-white text-lg">{order.id}</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${getStatusColor(order.status)}`}>
              {order.status === 'new' ? 'BARU' : order.status === 'preparing' ? 'MEMASAK' : 'SIAP'}
            </span>
          </div>
          <div className="text-sm font-bold text-[#A3A3A3]">{order.table}</div>
        </div>
        <div className="flex items-center gap-1 text-xs text-[#A3A3A3] font-medium bg-white/5 px-2 py-1 rounded">
          <span className="material-symbols-outlined text-[14px]">schedule</span>
          {order.time}
        </div>
      </div>

      {/* Card Body - Items */}
      <div className="flex-1 space-y-3">
        {order.items.map((item, idx) => (
          <div key={idx} className="text-sm">
            <div className="flex justify-between text-white font-medium">
              <span><span className="text-[#22E584] font-bold mr-2">{item.qty}x</span> {item.name}</span>
            </div>
            {item.notes && (
              <div className="text-xs text-[#A3A3A3] mt-1 italic flex items-start gap-1">
                <span className="material-symbols-outlined text-[12px] mt-0.5">edit_note</span>
                {item.notes}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Card Footer */}
      <div className="pt-3 border-t border-white/5">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs text-[#A3A3A3]">Total Tagihan</span>
          <span className="font-bold text-white text-base">Rp {order.total.toLocaleString('id-ID')}</span>
        </div>
        
        {/* Action Buttons */}
        {order.status === 'new' && (
          <button 
            onClick={() => moveOrder(order.id, 'preparing')}
            className="w-full py-2.5 bg-[#22E584] text-black rounded-lg font-bold hover:bg-[#22E584]/90 transition-colors text-sm shadow-[0_4px_14px_rgba(34,229,132,0.2)]"
          >
            TERIMA PESANAN
          </button>
        )}
        {order.status === 'preparing' && (
          <button 
            onClick={() => moveOrder(order.id, 'ready')}
            className="w-full py-2.5 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400 transition-colors text-sm shadow-[0_4px_14px_rgba(234,179,8,0.2)]"
          >
            SELESAI DIMASAK
          </button>
        )}
        {order.status === 'ready' && (
          <button 
            onClick={() => moveOrder(order.id, 'completed')}
            className="w-full py-2.5 border-2 border-[#22E584] text-[#22E584] rounded-lg font-bold hover:bg-[#22E584]/10 transition-colors text-sm"
          >
            PESANAN DIAMBIL
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#181A20] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        
        <main className="flex-1 p-8 relative flex flex-col h-full overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#22E584] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-8 relative z-10 shrink-0">
            <div>
              <div className="text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">
                Operasional <span className="text-white mx-2">/</span> <span className="text-[#22E584]">Live Orders</span>
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">Live Orders</h1>
              <p className="text-sm text-[#A3A3A3]">Pantau dan kelola pesanan masuk secara real-time.</p>
            </div>
            
            <div className="flex items-center gap-3 bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-xl p-2">
               <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181A20] border border-white/5 text-sm font-bold text-white">
                 <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
               </button>
               <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-sm font-bold text-[#A3A3A3] transition-colors">
                 <span className="material-symbols-outlined text-[18px]">history</span> Riwayat
               </button>
            </div>
          </div>

          {/* Kanban Board Container */}
          <div className="flex-1 grid grid-cols-3 gap-6 relative z-10 overflow-hidden pb-4">
            
            {/* Column: Pesanan Baru */}
            <div className="flex flex-col bg-[#23262F]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 h-full">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-400">notifications_active</span>
                  <h2 className="font-bold tracking-wide">Pesanan Baru</h2>
                </div>
                <span className="bg-red-500/10 text-red-400 text-xs font-bold px-2.5 py-1 rounded-full border border-red-500/20">
                  {orders.filter(o => o.status === 'new').length}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto pr-2 space-y-4 pb-4 custom-scrollbar">
                {orders.filter(o => o.status === 'new').map(renderOrderCard)}
                {orders.filter(o => o.status === 'new').length === 0 && (
                  <div className="text-center text-sm text-[#A3A3A3] py-10">Tidak ada pesanan baru.</div>
                )}
              </div>
            </div>

            {/* Column: Dalam Persiapan */}
            <div className="flex flex-col bg-[#23262F]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 h-full">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-500">soup_kitchen</span>
                  <h2 className="font-bold tracking-wide">Dalam Persiapan</h2>
                </div>
                <span className="bg-yellow-500/10 text-yellow-500 text-xs font-bold px-2.5 py-1 rounded-full border border-yellow-500/20">
                  {orders.filter(o => o.status === 'preparing').length}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto pr-2 space-y-4 pb-4 custom-scrollbar">
                {orders.filter(o => o.status === 'preparing').map(renderOrderCard)}
                {orders.filter(o => o.status === 'preparing').length === 0 && (
                  <div className="text-center text-sm text-[#A3A3A3] py-10">Tidak ada pesanan yang disiapkan.</div>
                )}
              </div>
            </div>

            {/* Column: Siap Disajikan */}
            <div className="flex flex-col bg-[#23262F]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 h-full">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#22E584]">task_alt</span>
                  <h2 className="font-bold tracking-wide">Siap Disajikan</h2>
                </div>
                <span className="bg-[#22E584]/10 text-[#22E584] text-xs font-bold px-2.5 py-1 rounded-full border border-[#22E584]/20">
                  {orders.filter(o => o.status === 'ready').length}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto pr-2 space-y-4 pb-4 custom-scrollbar">
                {orders.filter(o => o.status === 'ready').map(renderOrderCard)}
                {orders.filter(o => o.status === 'ready').length === 0 && (
                  <div className="text-center text-sm text-[#A3A3A3] py-10">Tidak ada pesanan yang siap.</div>
                )}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
