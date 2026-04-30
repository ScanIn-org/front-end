"use client";

import { useEffect, useState } from "react";

const rules = [
  { number: "01", text: "250 transaksi harian otomatis tersinkron" },
  { number: "02", text: "Lengkapi semua aktivitas penjualan" },
  { number: "03", text: "Data aman, jangan ambil hati" },
];

const team = [
  { initial: "A", name: "Astaroth Schörder", role: "Co-Founder", variant: "primary" },
  { initial: "K", name: "Koda Hakim", role: "Founder", variant: "secondary" },
  { initial: "C", name: "Chloe D'ionxony", role: "Co-Founder", variant: "teal" },
] as const;

const storySteps = [
  {
    phase: "BAB 01",
    title: "Awal Dari Counter Kecil",
    text: "Scan.in dimulai dari kebutuhan simpel: kasir yang cepat, stabil, dan gampang dipakai saat toko ramai.",
  },
  {
    phase: "BAB 02",
    title: "Semua Tersambung Real-time",
    text: "Order, stok, dan pembayaran bergerak dalam satu alur. Tim tidak lagi kerja manual di banyak tempat.",
  },
  {
    phase: "BAB 03",
    title: "Naik Kelas Dengan Data",
    text: "Saat trafik bertambah, dashboard jadi kompas. Keputusan harian lebih cepat karena insight langsung terlihat.",
  },
] as const;

export default function LandingPage() {
  const [activeDot, setActiveDot] = useState(0);
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-story-step]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = Number(entry.target.getAttribute("data-story-step") ?? 0);
            setActiveStory(step);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-10% 0px -20% 0px",
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="ocean-bg">
        <div className="depth-layer depth-far" />
        <div className="depth-layer depth-mid" />

        <svg
          className="coral-bottom"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 220 L0 160 Q40 80 80 130 Q110 160 130 100 Q150 60 170 110 Q190 145 220 80 Q240 40 260 90 Q280 130 310 70 Q340 20 360 80 Q390 140 420 60 Q450 0 480 70 Q510 130 540 50 Q570 0 600 80 Q630 150 660 40 Q690 0 720 70 Q750 130 780 50 Q810 0 840 80 Q870 150 900 60 Q930 0 960 80 Q990 140 1020 50 Q1050 0 1080 80 Q1110 150 1140 60 Q1170 0 1200 80 Q1230 150 1260 70 Q1290 10 1320 90 Q1360 150 1400 80 L1440 70 L1440 220 Z"
            fill="#003050"
          />
          <ellipse cx="200" cy="180" rx="60" ry="40" fill="#003060" opacity="1" />
          <ellipse cx="800" cy="190" rx="80" ry="30" fill="#004080" opacity="1" />
          <ellipse cx="1200" cy="185" rx="70" ry="35" fill="#003050" opacity="1" />
        </svg>
      </div>

      <div className="page">
        <nav>
          <div className="nav-logo">Scan.in</div>
          <div className="nav-links">
            <a href="#" className="active">
              Beranda
            </a>
            <a href="#features">Fitur</a>
            <a href="#story">Story</a>
            <a href="#about">Tentang</a>
            <a href="#contact">Kontak</a>
          </div>
          <button className="nav-cta">Mulai Gratis</button>
        </nav>

        <section className="hero">
          <svg
            className="hero-blob"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="60" cy="60" r="50" fill="#1ED760" opacity="0.15" />
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#1ED760"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>

          <div className="hero-edition anim-1">
            <span>First edition</span>
            <span>2025</span>
          </div>

          <p className="hero-tag anim-1">TEAM</p>

          <h1 className="hero-title anim-2">
            <span className="big">Scan.in</span>
            <span className="sub">Kasir Digital.</span>
          </h1>

          <p className="hero-brand anim-3">UMKM · All rights reserved</p>

          <button
            className="hero-scroll-btn anim-4"
            onClick={() => document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Scroll ke section rules"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        <section id="rules" className="rules-section">
          <p className="section-label">
            First rules <span className="chip">TEAM</span>
          </p>

          <div className="rules-card glass-card-scan">
            <svg
              className="rules-watermark"
              viewBox="0 0 900 200"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M50 130 Q150 80 250 120 Q300 140 350 90 Q380 70 400 110 Q420 130 450 80 Q500 40 550 100 Q580 130 620 70 Q680 20 750 90 Q800 140 860 80"
                stroke="#00d2ff"
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
              />
            </svg>
            {rules.map((rule) => (
              <div key={rule.number} className="rule-item">
                <div className="rule-num">{rule.number}</div>
                <div className="rule-text">{rule.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-section" id="about">
          <svg
            className="starfish-left"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M50 5 L60 40 L95 40 L65 60 L75 95 L50 72 L25 95 L35 60 L5 40 L40 40 Z"
              fill="#00d2ff"
            />
          </svg>

          <div className="space-content">
            <p className="section-label">First edition</p>
            <h2 className="section-big-title">A SPACE.</h2>
            <p className="section-subtitle">Unik dan orisinal</p>
            <p className="section-desc">
              Sebuah ruang yang lahir dari kedalaman - untuk UMKM yang ingin berkembang bersama
              teknologi modern.
            </p>
            <button className="btn-outline">Scanin Project</button>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-head">
            <p className="section-label">Story</p>
            <h2 className="story-title">Perjalanan Scan.in Saat Kamu Scroll Ke Bawah</h2>
          </div>

          <div className="story-layout">
            <aside className="story-sticky">
              <span className="story-phase">{storySteps[activeStory].phase}</span>
              <h3>{storySteps[activeStory].title}</h3>
              <p>{storySteps[activeStory].text}</p>
              <div className="story-progress" aria-hidden="true">
                {storySteps.map((_, index) => (
                  <span
                    key={index}
                    className={`story-progress-dot ${activeStory === index ? "active" : ""}`}
                  />
                ))}
              </div>
            </aside>

            <div className="story-steps">
              {storySteps.map((step, index) => (
                <article
                  key={step.phase}
                  data-story-step={index}
                  className={`story-step ${activeStory === index ? "active" : ""}`}
                >
                  <span>{step.phase}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="team-wrap">
          <div className="team-section">
            <div className="team-header">
              <h2 className="team-title">Founder Scan.in</h2>
              <p className="team-year">First edition, 2025</p>
            </div>

            <div className="team-grid">
              {team.map((member) => (
                <div key={member.initial} className="team-card">
                  <div className={`team-avatar ${member.variant}`}>{member.initial}</div>
                  <p className="team-name">{member.name}</p>
                  <p className="team-role">{member.role}</p>
                  <a href="#" className="team-enter">
                    Tentang →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2 className="cta-title">
            Daftarkan bisnis <br />
            <span style={{ color: "rgba(215, 227, 249, 0.6)" }}>Kamu di Scan.in</span>
          </h2>
          <p className="cta-sub">Mulai perjalanan digital Anda sekarang</p>
          <p className="cta-desc">
            Tingkatkan efisiensi operasional toko dengan teknologi terdepan
          </p>

          <div className="cta-button-shell">
            <button className="cta-button">Daftar Gratis</button>
          </div>

          <div className="cta-dots">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                className={`cta-dot ${activeDot === i ? "active" : ""}`}
                onClick={() => setActiveDot(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <footer>
          <div>
            <div className="footer-logo">Scan.in</div>
            <p className="footer-copy">© 2025 Semua hak dilindungi</p>
          </div>
          <div className="footer-links">
            <a href="#">Tentang</a>
            <a href="#">Fitur</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Kontak</a>
          </div>
          <div className="footer-socials">
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </footer>
      </div>
    </>
  );
}
