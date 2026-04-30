"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { useAppContext, Order } from '@/context/AppContext';
export default function TransactionsPage() {
  const { orders } = useAppContext();
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  
  // Hanya tampilkan order yang bukan 'new'/'preparing'/'ready' kecuali jika kita ingin show semua. 
  // Untuk transaksi, biasanya completed, failed, atau jika ada pending.
  const transactionOrders = orders.filter(o => o.status === 'completed' || o.status === 'failed' || o.status === 'pending');

  const filteredData = transactionOrders.filter(trx => {
    if (filter === 'all') return true;
    return trx.status === filter;
  });

  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'completed': return <span className="bg-[#22E584]/10 text-[#22E584] border border-[#22E584]/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Berhasil</span>;
      case 'pending': return <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Tertunda</span>;
      case 'failed': return <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Gagal</span>;
      default: return null;
    }
  };

  const getMethodIcon = (method: Order['method']) => {
    switch (method) {
      case 'QRIS': return <span className="material-symbols-outlined text-[16px] text-[#22E584]">qr_code_2</span>;
      case 'Cash': return <span className="material-symbols-outlined text-[16px] text-yellow-500">payments</span>;
      case 'Debit': return <span className="material-symbols-outlined text-[16px] text-blue-400">credit_card</span>;
      default: return null;
    }
  };

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
                  Laporan <span className="text-white mx-2">/</span> <span className="text-[#22E584]">Transactions</span>
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">Riwayat Transaksi</h1>
                <p className="text-sm text-[#A3A3A3]">Pantau semua transaksi masuk, metode pembayaran, dan statusnya.</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex bg-[#181A20] border border-white/5 rounded-xl p-1">
                  <button 
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${filter === 'all' ? 'bg-[#23262F] text-white shadow-sm' : 'text-[#A3A3A3] hover:text-white'}`}
                  >
                    Semua
                  </button>
                  <button 
                    onClick={() => setFilter('completed')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${filter === 'completed' ? 'bg-[#23262F] text-[#22E584] shadow-sm' : 'text-[#A3A3A3] hover:text-white'}`}
                  >
                    Berhasil
                  </button>
                  <button 
                    onClick={() => setFilter('pending')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${filter === 'pending' ? 'bg-[#23262F] text-yellow-500 shadow-sm' : 'text-[#A3A3A3] hover:text-white'}`}
                  >
                    Tertunda
                  </button>
                </div>
                
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#22E584] text-black text-sm font-bold shadow-[0_4px_14px_rgba(34,229,132,0.2)] hover:bg-[#22E584]/90 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Export CSV
                </button>
              </div>
            </div>

            {/* Metrics Widget */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#22E584]/10 flex items-center justify-center text-[#22E584]">
                  <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
                </div>
                <div>
                  <div className="text-xs text-[#A3A3A3] font-medium mb-1">Total Pendapatan (Bulan Ini)</div>
                  <div className="text-xl font-bold text-white">Rp 12.450.000</div>
                </div>
              </div>
              <div className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                </div>
                <div>
                  <div className="text-xs text-[#A3A3A3] font-medium mb-1">Total Transaksi</div>
                  <div className="text-xl font-bold text-white">342 <span className="text-sm font-normal text-[#A3A3A3]">pesanan</span></div>
                </div>
              </div>
              <div className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#22E584]/10 flex items-center justify-center text-[#22E584]">
                  <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                </div>
                <div>
                  <div className="text-xs text-[#A3A3A3] font-medium mb-1">Porsi QRIS</div>
                  <div className="text-xl font-bold text-white">78% <span className="text-sm font-normal text-[#A3A3A3]">dari total</span></div>
                </div>
              </div>
            </div>

            {/* Transaction Table */}
            <section className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h2 className="font-bold text-white text-lg tracking-wide">Daftar Transaksi Terbaru</h2>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#A3A3A3] text-[18px]">search</span>
                  <input 
                    type="text" 
                    placeholder="Cari ID Transaksi..." 
                    className="bg-[#181A20] border border-white/5 text-sm rounded-lg pl-9 pr-4 py-2 text-white placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#22E584]/50 transition-colors w-64"
                  />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#181A20]/50 text-xs text-[#A3A3A3] uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-semibold">ID Transaksi</th>
                      <th className="px-6 py-4 font-semibold">Waktu & Tanggal</th>
                      <th className="px-6 py-4 font-semibold">Pelanggan/Meja</th>
                      <th className="px-6 py-4 font-semibold">Metode</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold text-right">Total</th>
                      <th className="px-6 py-4 font-semibold text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredData.map((trx) => (
                      <tr key={trx.id} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <span className="font-bold text-white bg-white/5 px-2 py-1 rounded border border-white/5">{trx.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-white font-medium">{trx.date}</div>
                          <div className="text-xs text-[#A3A3A3]">{trx.time} WIB</div>
                        </td>
                        <td className="px-6 py-4 font-medium text-white">{trx.table}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-[#A3A3A3]">
                            {getMethodIcon(trx.method)}
                            <span className="font-medium">{trx.method}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(trx.status)}
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-white">
                          Rp {trx.total.toLocaleString('id-ID')}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-[#A3A3A3] hover:text-[#22E584] transition-colors p-2 rounded-lg hover:bg-[#22E584]/10 opacity-0 group-hover:opacity-100">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredData.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-[#A3A3A3]">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-4xl opacity-50">receipt_long</span>
                            <p>Tidak ada transaksi yang ditemukan.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A3A3A3]">
                <span>Menampilkan {filteredData.length} transaksi</span>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded bg-[#181A20] hover:bg-white/10 transition-colors disabled:opacity-50" disabled>Sebelumnya</button>
                  <button className="px-3 py-1.5 rounded bg-[#181A20] hover:bg-white/10 transition-colors">Selanjutnya</button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
