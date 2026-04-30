"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const activeMenu = pathname || '/dashboard';
  
  const menus = [
    { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { label: 'Live Orders', href: '/live-orders', icon: 'bolt' },
    { label: 'Menu Management', href: '/menu-management', icon: 'restaurant_menu' },
    { label: 'Transactions', href: '/transactions', icon: 'receipt_long' },
    { label: 'Analytics', href: '/analytics', icon: 'bar_chart' },
  ];
  return (
    <aside className="w-[260px] bg-[#181A20]/60 border-r border-white/5 flex flex-col py-8 px-6 min-h-screen backdrop-blur-xl sticky top-0 shrink-0">
      <div className="mb-12">
        <span className="text-3xl font-black text-[#22E584]">Scan.in</span>
        <div className="text-[10px] text-[#A3A3A3] mt-1 font-bold tracking-[0.2em]">MERCHANT PORTAL</div>
      </div>
      <nav className="flex-1 space-y-2">
        {menus.map((menu) => {
          const isActive = activeMenu === menu.href;
          return (
            <a
              key={menu.href}
              href={menu.href}
              className={
                'flex items-center gap-4 py-3 px-4 rounded-xl font-medium transition-all ' +
                (isActive
                  ? 'bg-white/10 border border-[#22E584]/50 text-[#22E584] shadow-sm backdrop-blur-md'
                  : 'text-[#A3A3A3] hover:bg-white/5 hover:text-white')
              }
            >
              <span className="material-symbols-outlined text-[20px]">{menu.icon}</span>
              <span className="text-sm">{menu.label}</span>
            </a>
          );
        })}
      </nav>
      <a href="/menu-management" className="mt-8 w-full py-3 bg-[#22E584] text-black rounded-xl font-bold hover:bg-[#22E584]/90 transition-colors shadow-[0_4px_14px_rgba(34,229,132,0.2)] text-sm tracking-wide text-center block">
        + ADD NEW ITEM
      </a>
      <div className="mt-8 pt-8 border-t border-white/5 text-sm text-[#A3A3A3] space-y-4 font-medium">
        <button className="flex items-center gap-4 w-full text-left hover:text-white transition-colors">
          <span className="material-symbols-outlined text-[20px]">help</span>
          Support
        </button>
        <button className="flex items-center gap-4 w-full text-left hover:text-white transition-colors">
          <span className="material-symbols-outlined text-[20px]">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
