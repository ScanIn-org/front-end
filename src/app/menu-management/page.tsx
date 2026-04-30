"use client";

import React, { useState, useRef } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { useAppContext } from '@/context/AppContext';

export default function MenuManagementPage() {
  const { products, addProduct, deleteProduct } = useAppContext();
  
  // State untuk navigasi antar view
  const [view, setView] = useState<'list' | 'add'>('list');
  const [activeFilter, setActiveFilter] = useState('Semua Menu');
  
  // State untuk form tambah produk
  const [formData, setFormData] = useState({
    barcode: '',
    name: '',
    category: '',
    description: '',
    price: '',
    stock: ''
  });
  const [isScanning, setIsScanning] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filters = ['Semua Menu', 'makanan', 'minuman', 'snack'];
  const displayFilters = ['Semua Menu', 'Makanan', 'Minuman', 'Snack'];

  // --- Handlers untuk Form Tambah ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setFormData(prev => ({
        ...prev,
        barcode: 'QRIS-' + Math.floor(10000 + Math.random() * 90000),
        name: 'Produk dari QR',
        category: 'snack',
        price: '15000',
        stock: '100'
      }));
    }, 1500);
  };

  const handleImageClick = () => fileInputRef.current?.click();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!formData.name) {
      alert("Nama produk wajib diisi!");
      return;
    }
    
    addProduct({
      name: formData.name,
      category: formData.category || 'Belum Kategori',
      price: formData.price || '0',
      stock: formData.stock || '0',
      barcode: formData.barcode || '-',
      image: previewImage
    });
    
    setFormData({ barcode: '', name: '', category: '', description: '', price: '', stock: '' });
    setPreviewImage(null);
    setView('list');
  };

  // --- Render Views ---

  const renderListView = () => {
    const filteredProducts = activeFilter === 'Semua Menu' 
      ? products 
      : products.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

    return (
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header List */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Manajemen Menu</h1>
            <p className="text-sm text-[#A3A3A3]">Kelola daftar produk, harga, dan ketersediaan stok Anda.</p>
          </div>
          <button 
            onClick={() => setView('add')}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#22E584] text-black font-bold text-sm hover:bg-[#22E584]/90 transition-colors shadow-[0_4px_14px_rgba(34,229,132,0.2)]"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            TAMBAH PRODUK BARU
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {displayFilters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filters[idx])}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === filters[idx] 
                  ? 'bg-[#22E584] text-black shadow-[0_4px_14px_rgba(34,229,132,0.2)]' 
                  : 'bg-[#23262F] text-[#A3A3A3] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredProducts.map((product) => {
            const stockVal = parseInt(product.stock);
            const isHabis = stockVal <= 0;
            return (
              <div key={product.id} className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-5 flex gap-5 hover:border-[#22E584]/30 transition-colors group">
                {/* Image */}
                <div className="w-[100px] h-[100px] rounded-xl bg-[#181A20] overflow-hidden shrink-0 relative border border-white/5">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className={`w-full h-full object-cover transition-transform group-hover:scale-110 ${isHabis ? 'grayscale opacity-50' : ''}`} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#A3A3A3]">
                      <span className="material-symbols-outlined text-3xl">restaurant</span>
                    </div>
                  )}
                  {isHabis && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                      <span className="text-[10px] font-bold text-white tracking-widest uppercase px-2 py-1 bg-white/10 rounded-full border border-white/20">HABIS</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isHabis ? 'text-[#A3A3A3]' : 'text-[#22E584]'}`}>{product.category}</div>
                      <h3 className="font-bold text-white text-base line-clamp-1">{product.name}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#A3A3A3]">{isHabis ? 'Nonaktif' : 'Aktif'}</span>
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${isHabis ? 'bg-white/10' : 'bg-[#22E584]/20 border border-[#22E584]/50'}`}>
                        <div className={`absolute top-0.5 bottom-0.5 w-4 rounded-full transition-all ${isHabis ? 'left-0.5 bg-[#A3A3A3]' : 'left-[22px] bg-[#22E584] shadow-[0_0_8px_rgba(34,229,132,0.8)]'}`}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex gap-6">
                      <div>
                        <div className="text-[10px] text-[#A3A3A3] mb-0.5">HARGA</div>
                        <div className="font-bold text-sm text-white">Rp {parseInt(product.price).toLocaleString('id-ID')}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#A3A3A3] mb-0.5">STOK</div>
                        <div className={`font-bold text-sm ${isHabis ? 'text-red-400' : 'text-[#22E584]'}`}>{product.stock}</div>
                      </div>
                    </div>
                    <button className="text-[#A3A3A3] hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {filteredProducts.length === 0 && (
            <div className="col-span-2 py-12 text-center bg-[#23262F] rounded-2xl border border-white/5">
              <span className="material-symbols-outlined text-4xl text-[#A3A3A3] mb-2 opacity-50">inventory_2</span>
              <p className="text-[#A3A3A3]">Belum ada menu di kategori ini.</p>
            </div>
          )}
        </div>

        {/* Metrics Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#181A20] border border-white/5 rounded-2xl p-6 flex flex-col justify-center">
            <div className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">TOTAL MENU AKTIF</div>
            <div className="flex items-end gap-3">
              <div className="text-4xl font-black text-white">{products.filter(p => parseInt(p.stock) > 0).length}</div>
              <div className="text-xs font-bold text-[#22E584] mb-1">+4 bulan ini</div>
            </div>
          </div>
          <div className="bg-[#181A20] border border-white/5 rounded-2xl p-6 flex flex-col justify-center">
            <div className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">PRODUK STOK RENDAH</div>
            <div className="flex items-end gap-3">
              <div className="text-4xl font-black text-red-400">{products.filter(p => parseInt(p.stock) <= 5).length}</div>
              <div className="text-xs text-[#A3A3A3] mb-1">Perlu restok segera</div>
            </div>
          </div>
          <div className="bg-[#181A20] border border-white/5 rounded-2xl p-6 flex flex-col justify-center">
            <div className="text-[10px] font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">KATEGORI POPULER</div>
            <div className="flex items-end gap-3">
              <div className="text-4xl font-black text-white capitalize">Makanan</div>
              <div className="text-xs text-[#A3A3A3] mb-1">62% dari total penjualan</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAddView = () => (
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2 cursor-pointer flex items-center gap-1 hover:text-white transition-colors" onClick={() => setView('list')}>
            <span className="material-symbols-outlined text-[14px]">arrow_back</span> Kembali ke Daftar Menu
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Tambah Produk Baru</h1>
          <p className="text-sm text-[#A3A3A3]">Lengkapi informasi produk untuk memperbarui inventaris Anda.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setView('list')}
            className="px-6 py-2.5 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-colors"
          >
            BATAL
          </button>
          <button 
            onClick={handleSave}
            className="px-6 py-2.5 rounded-full bg-[#22E584] text-black font-bold text-sm hover:bg-[#22E584]/90 transition-colors shadow-[0_4px_14px_rgba(34,229,132,0.2)]"
          >
            SIMPAN PRODUK
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <section className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6 text-[#22E584]">
              <span className="material-symbols-outlined text-[20px]">info</span>
              <h2 className="text-sm font-bold text-white tracking-widest uppercase">Informasi Dasar</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">Barcode / Scan QR</label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <input name="barcode" value={formData.barcode} onChange={handleInputChange} type="text" placeholder="Scan QRIS atau Barcode Produk" className="w-full bg-[#181A20] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#22E584]/50 transition-colors" />
                  </div>
                  <button onClick={handleScan} disabled={isScanning} className="px-5 bg-[#22E584]/10 border border-[#22E584]/20 text-[#22E584] rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#22E584]/20 transition-colors disabled:opacity-50">
                    {isScanning ? <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span> : <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>}
                    {isScanning ? 'SCANNING...' : 'SCAN'}
                  </button>
                </div>
                <p className="text-[11px] text-[#A3A3A3] mt-2">Gunakan kamera untuk melakukan scan QRIS atau barcode untuk produk ini secara otomatis.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">Nama Produk</label>
                <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Contoh: Espresso Macchiato" className="w-full bg-[#181A20] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#22E584]/50 transition-colors" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">Kategori</label>
                <div className="relative">
                  <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-[#181A20] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white appearance-none focus:outline-none focus:border-[#22E584]/50 transition-colors cursor-pointer">
                    <option value="" disabled className="text-white/20">Pilih Kategori</option>
                    <option value="minuman">Minuman</option>
                    <option value="makanan">Makanan</option>
                    <option value="snack">Snack</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#A3A3A3] pointer-events-none">expand_more</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">Deskripsi Produk</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} rows={4} placeholder="Jelaskan detail rasa, aroma, atau keunikan produk Anda..." className="w-full bg-[#181A20] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#22E584]/50 transition-colors resize-none" />
              </div>
            </div>
          </section>

          <section className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6 text-[#22E584]">
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <h2 className="text-sm font-bold text-white tracking-widest uppercase">Harga & Stok</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">Harga Jual (IDR)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A3A3] font-bold text-sm">Rp</span>
                  <input name="price" value={formData.price} onChange={handleInputChange} type="number" placeholder="0" className="w-full bg-[#181A20] border border-white/5 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#22E584]/50 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">Stok Awal</label>
                <div className="relative">
                  <input name="stock" value={formData.stock} onChange={handleInputChange} type="number" placeholder="0" className="w-full bg-[#181A20] border border-white/5 rounded-xl pl-4 pr-16 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#22E584]/50 transition-colors" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3A3A3] font-bold text-[10px] tracking-wider uppercase">Unit</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <section className="bg-[#23262F] backdrop-blur-xl border border-white/5 rounded-2xl p-8 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-6 text-[#22E584]">
              <span className="material-symbols-outlined text-[20px]">image</span>
              <h2 className="text-sm font-bold text-white tracking-widest uppercase">Foto Produk</h2>
            </div>
            <div onClick={handleImageClick} className="flex-1 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 bg-[#181A20]/50 hover:bg-[#181A20] hover:border-[#22E584]/30 transition-all cursor-pointer group min-h-[300px] relative overflow-hidden">
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageChange} />
              {previewImage ? (
                <img src={previewImage} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#22E584]/10 group-hover:text-[#22E584] transition-all text-[#A3A3A3]">
                    <span className="material-symbols-outlined text-[32px]">add_a_photo</span>
                  </div>
                  <div className="font-bold text-white mb-2 text-center group-hover:text-[#22E584] transition-colors">Tarik & Lepas Foto</div>
                  <div className="text-xs text-[#A3A3A3] mb-6 text-center">Maksimal 5MB (JPG, PNG)</div>
                  <button className="px-5 py-2 rounded-full border border-white/10 text-white font-bold text-[11px] tracking-wider uppercase hover:border-white/30 transition-colors pointer-events-none">Pilih Berkas</button>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#181A20] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        <main className="flex-1 p-8 relative">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#22E584] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>
          {view === 'list' ? renderListView() : renderAddView()}
        </main>
      </div>
    </div>
  );
}
