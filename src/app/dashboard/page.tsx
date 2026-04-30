import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import BusinessSummary from '@/components/dashboard/BusinessSummary';
import SalesTrend from '@/components/dashboard/SalesTrend';
import KitchenStatus from '@/components/dashboard/KitchenStatus';
import PopularMenu from '@/components/dashboard/PopularMenu';
import ServiceInfo from '@/components/dashboard/ServiceInfo';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#181A20] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        <main className="flex-1 p-8 grid grid-cols-12 gap-8 relative">
          {/* Subtle background glow for the glass effect */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#22E584] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>
          
          <section className="col-span-12 xl:col-span-8 flex flex-col gap-8 relative z-10">
            <BusinessSummary />
            <SalesTrend />
            <KitchenStatus />
          </section>
          <section className="col-span-12 xl:col-span-4 flex flex-col gap-8 relative z-10">
            <PopularMenu />
            <ServiceInfo />
          </section>
        </main>
      </div>
    </div>
  );
}
