"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type OrderStatus = 'new' | 'preparing' | 'ready' | 'completed' | 'failed';
export type PaymentMethod = 'QRIS' | 'Cash' | 'Debit';

export interface OrderItem {
  name: string;
  qty: number;
  notes?: string;
}

export interface Order {
  id: string;
  table: string;
  time: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  total: number;
  method: PaymentMethod;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: string;
  barcode: string;
  image: string | null;
  sold: number;
}

interface AppContextType {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  moveOrder: (orderId: string, newStatus: OrderStatus) => void;
  addProduct: (product: Omit<Product, 'id' | 'sold'>) => void;
  deleteProduct: (id: number) => void;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Nasi Goreng Wagyu', category: 'makanan', price: '45000', stock: '20', barcode: 'QRIS-101', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=150&h=150', sold: 342 },
  { id: 2, name: 'Es Kopi Aren', category: 'minuman', price: '18000', stock: '50', barcode: 'QRIS-102', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=150&h=150', sold: 412 },
  { id: 3, name: 'Sate Maranggi', category: 'makanan', price: '35000', stock: '15', barcode: 'QRIS-103', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=150&h=150', sold: 285 },
];

const initialOrders: Order[] = [
  { id: '#9045', table: 'Meja 4', time: '14:25', date: '30 Apr 2026', status: 'new', items: [{ name: 'Nasi Goreng Wagyu', qty: 2, notes: 'Pedas' }, { name: 'Es Kopi Aren', qty: 2 }], total: 126000, method: 'QRIS' },
  { id: '#9046', table: 'Meja 12', time: '14:28', date: '30 Apr 2026', status: 'new', items: [{ name: 'Sate Maranggi', qty: 1 }, { name: 'Es Kopi Aren', qty: 1 }], total: 53000, method: 'Cash' },
  { id: '#9042', table: 'Meja 8', time: '14:10', date: '30 Apr 2026', status: 'preparing', items: [{ name: 'Nasi Goreng Wagyu', qty: 1 }], total: 45000, method: 'QRIS' },
  { id: '#9041', table: 'Takeaway', time: '14:05', date: '30 Apr 2026', status: 'ready', items: [{ name: 'Es Kopi Aren', qty: 1 }], total: 18000, method: 'QRIS' },
  { id: 'TRX-9040', table: 'Meja 2', time: '13:50', date: '30 Apr 2026', status: 'completed', items: [{ name: 'Sate Maranggi', qty: 2 }], total: 70000, method: 'Debit' },
  { id: 'TRX-9039', table: 'Takeaway', time: '13:10', date: '30 Apr 2026', status: 'failed', items: [{ name: 'Es Kopi Aren', qty: 2 }], total: 36000, method: 'QRIS' },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const moveOrder = (orderId: string, newStatus: OrderStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  const addProduct = (product: Omit<Product, 'id' | 'sold'>) => {
    setProducts(prev => [{ ...product, id: Date.now(), sold: 0 }, ...prev]);
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <AppContext.Provider value={{ orders, setOrders, products, setProducts, moveOrder, addProduct, deleteProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
