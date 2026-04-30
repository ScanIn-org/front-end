"use client";

import React from 'react';
import { useAppContext } from '@/context/AppContext';

export default function PopularMenu() {
  const { products } = useAppContext();
  
  const sortedProducts = [...products].sort((a, b) => b.sold - a.sold).slice(0, 3);

  return (
    <section className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 transition-colors hover:bg-[#2A2D36]">
      <div className="font-bold text-white mb-6 text-lg tracking-wide border-b border-white/5 pb-4">Menu Terpopuler Hari Ini</div>
      <div className="space-y-5">
        {sortedProducts.map((product, idx) => (
          <div key={product.id} className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] rounded-xl bg-[#181A20] overflow-hidden relative border border-white/10 shrink-0">
              {product.image ? (
                <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#A3A3A3]">
                  <span className="material-symbols-outlined text-[20px]">restaurant</span>
                </div>
              )}
              <div className={`absolute bottom-0 right-0 text-[9px] font-bold px-1.5 py-0.5 rounded-tl-lg border-t border-l border-white/10 ${
                idx === 0 ? 'text-[#22E584] bg-black/90' : 
                idx === 1 ? 'text-[#A3A3A3] bg-black/90' : 
                'text-orange-400 bg-black/90'
              }`}>TOP {idx + 1}</div>
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-white mb-0.5 line-clamp-1">{product.name}</div>
              <div className="text-xs text-[#A3A3A3]">{product.sold} Porsi terjual</div>
            </div>
            <div className="font-bold text-sm text-white bg-white/5 px-2 py-1 rounded border border-white/5 whitespace-nowrap">Rp {parseInt(product.price).toLocaleString('id-ID')}</div>
          </div>
        ))}
        {sortedProducts.length === 0 && (
          <div className="text-center text-sm text-[#A3A3A3] py-4">Belum ada menu terjual.</div>
        )}
      </div>
      <a href="/menu-management" className="mt-8 w-full block text-center py-3 bg-transparent border border-white/10 hover:border-white/30 hover:bg-white/5 text-white rounded-xl font-bold text-xs tracking-wider transition-all uppercase">LIHAT SEMUA MENU</a>
    </section>
  );
}
