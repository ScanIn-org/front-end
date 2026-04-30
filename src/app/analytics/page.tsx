"use client";

import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-[#181A20] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        
        <main className="flex-1 p-8 relative">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#22E584] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">
                  Laporan <span className="text-white mx-2">/</span> <span className="text-[#22E584]">Analytics</span>
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">Analisis Bisnis</h1>
                <p className="text-sm text-[#A3A3A3]">Wawasan komprehensif mengenai performa penjualan dan operasional restoran Anda.</p>
              </div>
              
              <div className="flex bg-[#181A20] border border-white/5 rounded-xl p-1">
                <button className="px-4 py-2 rounded-lg text-sm font-bold transition-colors text-[#A3A3A3] hover:text-white">Hari Ini</button>
                <button className="px-4 py-2 rounded-lg text-sm font-bold transition-colors bg-[#23262F] text-[#22E584] shadow-sm">Minggu Ini</button>
                <button className="px-4 py-2 rounded-lg text-sm font-bold transition-colors text-[#A3A3A3] hover:text-white">Bulan Ini</button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6 mb-6">
              {/* Main Chart */}
              <div className="col-span-12 lg:col-span-8 bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-bold tracking-wide text-lg text-white">Pendapatan vs Pesanan</h2>
                  <div className="flex gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#22E584] shadow-[0_0_8px_rgba(34,229,132,0.4)]"></span> <span className="text-[#A3A3A3]">Pendapatan (IDR)</span></div>
                    <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.4)]"></span> <span className="text-[#A3A3A3]">Total Pesanan</span></div>
                  </div>
                </div>

                <div className="h-64 flex items-end gap-3 border-b border-white/5 pb-2 relative">
                  <div className="absolute inset-0 flex flex-col justify-between border-t border-white/5 pt-2 pointer-events-none opacity-20">
                    <div className="border-b border-white/20 h-0 w-full"></div>
                    <div className="border-b border-white/20 h-0 w-full"></div>
                    <div className="border-b border-white/20 h-0 w-full"></div>
                  </div>
                  {[
                    { day: 'Sen', val1: 40, val2: 25 },
                    { day: 'Sel', val1: 50, val2: 30 },
                    { day: 'Rab', val1: 90, val2: 60 },
                    { day: 'Kam', val1: 65, val2: 40 },
                    { day: 'Jum', val1: 80, val2: 55 },
                    { day: 'Sab', val1: 100, val2: 85 },
                    { day: 'Min', val1: 85, val2: 70 }
                  ].map((item, idx) => (
                    <div key={item.day} className="flex flex-col items-center flex-1 group z-10">
                      <div className="flex items-end gap-2 w-full justify-center h-56 relative cursor-pointer">
                        {/* Hover Tooltip */}
                        <div className="absolute -top-14 opacity-0 group-hover:opacity-100 transition-opacity bg-[#181A20] border border-white/10 text-xs py-2 px-3 rounded-xl shadow-xl pointer-events-none whitespace-nowrap z-20 flex flex-col gap-1">
                          <div className="text-[#22E584] font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#22E584]"></span> Rp {(item.val1 * 85000).toLocaleString('id-ID')}</div>
                          <div className="text-blue-400 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> {item.val2 * 3} Pesanan</div>
                        </div>
                        <div className="w-[14px] bg-blue-400/80 group-hover:bg-blue-400 rounded-t-sm shadow-[0_0_10px_rgba(96,165,250,0.1)] group-hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all" style={{height: `${item.val2}%`}}></div>
                        <div className="w-[14px] bg-[#22E584]/80 group-hover:bg-[#22E584] rounded-t-sm shadow-[0_0_10px_rgba(34,229,132,0.1)] group-hover:shadow-[0_0_15px_rgba(34,229,132,0.4)] transition-all" style={{height: `${item.val1}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 px-1">
                  {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map(day => (
                    <div key={day} className="text-[11px] font-medium text-[#A3A3A3] w-full text-center">{day}</div>
                  ))}
                </div>
              </div>

              {/* Side Cards */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                <div className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex-1 flex flex-col justify-center relative overflow-hidden group hover:border-[#22E584]/30 transition-colors">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#22E584]/10 rounded-full blur-2xl group-hover:bg-[#22E584]/20 transition-all"></div>
                  <div className="text-sm font-bold text-[#A3A3A3] uppercase tracking-wider mb-2 relative z-10">Konversi Pemesanan</div>
                  <div className="flex items-end gap-3 mb-4 relative z-10">
                    <span className="text-4xl font-black text-white">68.5%</span>
                    <span className="text-[#22E584] text-sm font-bold flex items-center gap-1 mb-1 bg-[#22E584]/10 px-2 py-0.5 rounded border border-[#22E584]/20"><span className="material-symbols-outlined text-[14px]">trending_up</span> 4.2%</span>
                  </div>
                  <p className="text-xs text-[#A3A3A3] relative z-10">Pengunjung yang melakukan pemindaian (Scan QR Table) berujung pada penyelesaian transaksi sukses.</p>
                </div>

                <div className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex-1">
                  <div className="text-sm font-bold text-[#A3A3A3] uppercase tracking-wider mb-6">Distribusi Tipe Pesanan</div>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-white font-medium flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-[#22E584]">restaurant</span> Dine-In (QR Table)</span>
                        <span className="text-white font-bold">60%</span>
                      </div>
                      <div className="w-full bg-[#181A20] h-2.5 rounded-full overflow-hidden shadow-inner">
                        <div className="bg-gradient-to-r from-[#22E584]/50 to-[#22E584] h-full rounded-full shadow-[0_0_10px_rgba(34,229,132,0.5)]" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-white font-medium flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-yellow-500">takeout_dining</span> Takeaway</span>
                        <span className="text-white font-bold">25%</span>
                      </div>
                      <div className="w-full bg-[#181A20] h-2.5 rounded-full overflow-hidden shadow-inner">
                        <div className="bg-gradient-to-r from-yellow-500/50 to-yellow-500 h-full rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-white font-medium flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-blue-400">local_shipping</span> Delivery</span>
                        <span className="text-white font-bold">15%</span>
                      </div>
                      <div className="w-full bg-[#181A20] h-2.5 rounded-full overflow-hidden shadow-inner">
                        <div className="bg-gradient-to-r from-blue-400/50 to-blue-400 h-full rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Top Products */}
            <div className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <h2 className="font-bold tracking-wide text-lg text-white">Menu Paling Laris (Minggu Ini)</h2>
                <button className="text-xs font-bold text-[#22E584] hover:text-[#22E584]/80 transition-colors uppercase tracking-wider">Laporan Lengkap</button>
              </div>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { name: 'Nasi Goreng Wagyu', sold: 342, rev: '15.390.000', trend: '+12%', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=150&h=150' },
                  { name: 'Sate Maranggi', sold: 285, rev: '9.975.000', trend: '+8%', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=150&h=150' },
                  { name: 'Es Kopi Aren', sold: 412, rev: '7.416.000', trend: '+24%', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=150&h=150' },
                  { name: 'Mie Ayam Spesial', sold: 198, rev: '5.940.000', trend: '-3%', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=150&h=150', isDown: true }
                ].map((item, i) => (
                  <div key={i} className="bg-[#181A20] rounded-xl p-4 border border-white/5 hover:border-[#22E584]/30 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#23262F] overflow-hidden">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold text-sm leading-tight mb-1">{item.name}</div>
                        <div className="text-[#A3A3A3] text-[10px] uppercase tracking-wider font-bold">{item.sold} Porsi Terjual</div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-[#A3A3A3] text-xs mb-0.5">Pendapatan</div>
                        <div className="text-white font-bold text-sm">Rp {item.rev}</div>
                      </div>
                      <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.isDown ? 'bg-red-500/10 text-red-400' : 'bg-[#22E584]/10 text-[#22E584]'}`}>
                        {item.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
