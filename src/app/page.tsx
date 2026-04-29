"use client";

import React, { useState } from "react";

const generateParticles = () =>
  Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: Math.random() * 18 + 12,
    drift: (Math.random() - 0.5) * 80,
  }));

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [particles] = useState(generateParticles());

  return (
    <div className="relative w-full overflow-x-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* ─── ANIMATED BACKGROUND ─── */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950" />

        {/* Animated gradient orbs */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #00d2ff 0%, transparent 70%)",
            right: "-80px",
            top: "5%",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #6b5dff 0%, transparent 70%)",
            left: "5%",
            top: "40%",
            animation: "float 10s ease-in-out infinite reverse",
            animationDelay: "-2s",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #00d2ff 0%, transparent 70%)",
            right: "10%",
            bottom: "10%",
            animation: "float 12s ease-in-out infinite",
            animationDelay: "-4s",
          }}
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-cyan-400 opacity-30 blur-sm"
            style={
              {
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                bottom: "-10px",
                animation: `float-up ${p.duration}s linear infinite`,
                animationDelay: `-${p.delay}s`,
                "--drift": `${p.drift}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* ─── NAV ─── */}
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 w-92 max-w-4xl z-50 flex items-center justify-between px-8 py-4 rounded-full"
        style={{
          background: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Scan.in
        </span>
        <div className="hidden md:flex gap-8 items-center">
          {["Beranda", "Fitur", "Tentang", "Kontak"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
          Mulai Gratis
        </button>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12 text-center overflow-hidden">
        {/* Animated background lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            style={{ top: "25%", animation: "shimmer 3s ease-in-out infinite" }}
          />
          <div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            style={{ top: "50%", animation: "shimmer 4s ease-in-out infinite reverse" }}
          />
        </div>

        <div className="relative z-10 space-y-8 max-w-3xl animate-fade-in">
          {/* Tag */}
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <span className="text-xs font-bold tracking-widest text-cyan-400">
              FIRST EDITION 2025
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter">
            <span className="block text-white mb-2">Scan.in</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-5xl md:text-6xl">
              Kasir Digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto">
            Platform POS modern untuk UMKM. Teknologi deep-sea yang membawa bisnis Anda ke
            permukaan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold hover:shadow-xl hover:shadow-cyan-400/50 transition-all transform hover:scale-105">
              Coba Sekarang
            </button>
            <button className="px-8 py-4 rounded-lg bg-slate-700/30 backdrop-blur border border-slate-600/50 text-slate-200 font-bold hover:bg-slate-600/40 transition-all">
              Pelajari Lebih
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── FEATURES SECTION ─── */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Fitur Utama</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Dilengkapi dengan semua yang Anda butuhkan untuk menjalankan bisnis modern
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Point of Sale",
                desc: "Kelola transaksi dengan cepat dan intuitif. Antarmuka yang dirancang untuk peak hours",
                icon: "🛒",
              },
              {
                number: "02",
                title: "QR Ordering",
                desc: "Pelanggan bisa scan dan pesan langsung dari meja mereka. Efisiensi maksimal",
                icon: "📱",
              },
              {
                number: "03",
                title: "Analytics Dashboard",
                desc: "Pantau pertumbuhan bisnis real-time dengan dashboard yang comprehensive",
                icon: "📊",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl overflow-hidden transition-all hover:scale-105"
                style={{
                  background: "rgba(30, 41, 59, 0.4)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(30, 41, 59, 0.6)";
                  el.style.borderColor = "rgba(0, 210, 255, 0.3)";
                  el.style.boxShadow = "0 0 30px rgba(0, 210, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(30, 41, 59, 0.4)";
                  el.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  el.style.boxShadow = "none";
                }}
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{feature.number}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative p-12 rounded-3xl overflow-hidden"
            style={{
              background: "rgba(20, 30, 50, 0.5)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-40">
              <div
                className="absolute w-96 h-96 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, #00d2ff 0%, transparent 70%)",
                  right: "-100px",
                  top: "-100px",
                  animation: "pulse 4s ease-in-out infinite",
                }}
              />
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
              {[
                { label: "Transaksi Harian", value: "250+" },
                { label: "Merchant Aktif", value: "1000+" },
                { label: "Uptime", value: "99.9%" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM SECTION ─── */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Tim Kami</h2>
            <p className="text-slate-400">
              Dibuat oleh orang-orang yang passionate tentang teknologi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Astaroth Schörder",
                role: "Co-Founder",
                initial: "A",
              },
              { name: "Koda Hakim", role: "Founder", initial: "K" },
              {
                name: "Chloe D'ionxony",
                role: "Co-Founder",
                initial: "C",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-slate-700/20 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-slate-900 mb-4 shadow-lg shadow-cyan-400/50">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{member.role}</p>
                <a
                  href="#"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative z-10 py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-6xl md:text-7xl font-bold">
            <span className="block text-white mb-2">Siap Memulai?</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Bergabunglah Hari Ini
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Dapatkan akses early bird dan jadilah bagian dari revolusi POS digital
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold text-lg hover:shadow-xl hover:shadow-cyan-400/50 transition-all transform hover:scale-105">
              Claim Terminal Anda
            </button>
          </div>

          {/* Animated dots */}
          <div className="flex justify-center gap-2 pt-8">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`h-2 rounded-full transition-all ${
                  activeTab === i
                    ? "bg-cyan-400 w-10 shadow-lg shadow-cyan-400/50"
                    : "bg-slate-600 w-2 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 border-t border-slate-700/50 bg-slate-950/80 backdrop-blur px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Scan.in
              </span>
              <p className="text-sm text-slate-500 mt-2">© 2025 Scan.in. Teknologi untuk UMKM.</p>
            </div>

            <div className="flex gap-6">
              {["Privacy", "Terms", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ─── STYLES ─── */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(120vh) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-20vh) translateX(var(--drift, 0px)) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0%,
          100% {
            opacity: 0.1;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.5;
            transform: scaleX(1.05);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.9s ease-out forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
