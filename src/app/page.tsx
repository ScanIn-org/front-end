"use client";

import { useEffect, useMemo, useState } from "react";

type Particle = {
  id: number;
  size: string;
  left: string;
  delay: string;
  duration: string;
  drift: string;
  opacity: string;
};

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

const fract = (n: number) => n - Math.floor(n);

const seeded = (i: number, salt: number) => {
  const v = Math.sin(i * 78.233 + salt * 37.719) * 43758.5453123;
  return fract(v);
};

const buildParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => {
    const sizeRand = seeded(i + 1, 11);
    const leftRand = seeded(i + 3, 21);
    const delayRand = seeded(i + 7, 31);
    const durationRand = seeded(i + 11, 41);
    const driftRand = seeded(i + 19, 51);
    const opacityRand = seeded(i + 23, 61);

    return {
      id: i,
      size: (sizeRand * 4 + 1).toFixed(4),
      left: (leftRand * 100).toFixed(4),
      delay: (delayRand * 20).toFixed(4),
      duration: (durationRand * 18 + 12).toFixed(4),
      drift: ((driftRand - 0.5) * 80).toFixed(4),
      opacity: (opacityRand * 0.3 + 0.6).toFixed(6),
    };
  });

export default function LandingPage() {
  const [activeDot, setActiveDot] = useState(0);
  const [activeStory, setActiveStory] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);
  const particles = useMemo(() => buildParticles(55), []);

  useEffect(() => {
    const onScroll = () => {
      setParallaxY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className="ocean-bg" style={{ transform: `translateY(${parallaxY * 0.08}px)` }}>
        <div
          className="depth-layer depth-far"
          style={{ transform: `translateY(${parallaxY * 0.2}px)` }}
        />
        <div
          className="depth-layer depth-mid"
          style={{ transform: `translateY(${parallaxY * 0.12}px)` }}
        />
        <div
          className="jelly-blob"
          style={{
            width: "400px",
            height: "400px",
            right: "-80px",
            top: "5%",
            animationDuration: "7s",
            background: "radial-gradient(circle,rgba(0,180,255,0.85),transparent 70%)",
          }}
        />
        <div
          className="jelly-blob"
          style={{
            width: "300px",
            height: "300px",
            left: "5%",
            top: "40%",
            animationDuration: "9s",
            animationDelay: "-3s",
            background: "radial-gradient(circle,rgba(100,50,200,0.65),transparent 70%)",
          }}
        />
        <div
          className="jelly-blob"
          style={{
            width: "250px",
            height: "250px",
            right: "15%",
            top: "55%",
            animationDuration: "11s",
            animationDelay: "-5s",
            background: "radial-gradient(circle,rgba(0,150,255,0.75),transparent 70%)",
          }}
        />
        <div
          className="jelly-blob"
          style={{
            width: "200px",
            height: "200px",
            left: "20%",
            bottom: "10%",
            animationDuration: "8s",
            animationDelay: "-2s",
            background: "radial-gradient(circle,rgba(0,210,255,0.7),transparent 70%)",
          }}
        />

        <svg
          className="coral-bottom"
          style={{ transform: `translateY(${parallaxY * 0.35}px)` }}
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

        <div className="particles" aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className="particle"
              style={
                {
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  left: `${p.left}%`,
                  bottom: "-10px",
                  "--drift": `${p.drift}px`,
                  animationDuration: `${p.duration}s`,
                  animationDelay: `-${p.delay}s`,
                  opacity: p.opacity,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
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
            className="hero-jelly"
            style={{ transform: `translateY(${parallaxY * -0.1}px)` }}
            viewBox="0 0 200 280"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="jglow" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="1" />
                <stop offset="100%" stopColor="#0080c0" stopOpacity="0.4" />
              </radialGradient>
            </defs>
            <ellipse cx="100" cy="90" rx="75" ry="60" fill="url(#jglow)" opacity="0.9" />
            <ellipse
              cx="100"
              cy="80"
              rx="65"
              ry="50"
              fill="none"
              stroke="rgba(0,210,255,0.6)"
              strokeWidth="1"
            />
            <path
              d="M60 140 Q55 180 65 220 Q70 240 60 260"
              stroke="rgba(0,210,255,0.5)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M75 148 Q72 190 80 225 Q84 245 76 270"
              stroke="rgba(0,210,255,0.45)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M90 152 Q90 195 95 230 Q97 250 90 275"
              stroke="rgba(0,210,255,0.5)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M110 152 Q112 195 108 230 Q106 250 112 275"
              stroke="rgba(0,210,255,0.45)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M125 148 Q128 190 122 225 Q118 245 126 270"
              stroke="rgba(0,210,255,0.5)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M140 140 Q146 180 137 220 Q132 240 142 260"
              stroke="rgba(0,210,255,0.45)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>

          <div className="hero-edition anim-1">
            <span>First edition</span>
            <span>2025</span>
          </div>

          <p className="hero-tag anim-1">TEAM</p>

          <h1 className="hero-title anim-2">
            <span className="big glow-text">Scan.in</span>
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

        <section className="cards-section" id="features">
          <div className="cards-grid">
            <article className="feat-card">
              <div className="feat-card-illus illus-1">
                <span className="feat-overlay">Kasir</span>
              </div>
              <div className="feat-card-body">
                <div className="feat-card-num">01</div>
                <h3 className="feat-card-title">Point of Sale</h3>
                <p className="feat-card-desc">
                  Kelola transaksi dengan cepat. Antarmuka intuitif untuk peak hours tersibuk.
                </p>
              </div>
            </article>

            <article className="feat-card">
              <div className="feat-card-illus illus-2">
                <span className="feat-overlay">Scan QR</span>
              </div>
              <div className="feat-card-body">
                <div className="feat-card-num">02</div>
                <h3 className="feat-card-title">QR Ordering</h3>
                <p className="feat-card-desc">
                  Pelanggan scan, pesan langsung. Bergabung dan jadi bagian dari petualangan ini.
                </p>
              </div>
            </article>

            <article className="feat-card">
              <div className="feat-card-illus illus-3">
                <span className="feat-overlay">Whales</span>
              </div>
              <div className="feat-card-body">
                <div className="feat-card-num">03</div>
                <h3 className="feat-card-title">Dashboard Analytics</h3>
                <p className="feat-card-desc">
                  Temani pertumbuhan bisnis bersama kami. Data real-time yang hangat dan akurat.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="team-wrap">
          <div className="team-section">
            <div className="team-header">
              <div>
                <p className="section-label">Administrasi</p>
                <h3 className="team-title">Tim Kami</h3>
              </div>
              <span className="team-year">2025</span>
            </div>

            <div className="team-grid">
              {team.map((member) => (
                <article key={member.name} className="team-card">
                  <div className={`team-avatar ${member.variant}`}>{member.initial}</div>
                  <div>
                    <h4 className="team-name">{member.name}</h4>
                    <p className="team-role">{member.role}</p>
                  </div>
                  <span className="team-enter">enter -&gt;</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <h2 className="cta-title">DON&apos;T MISS IT</h2>
          <p className="cta-sub">Join us</p>
          <p className="cta-desc">
            Jangan lewatkan rilis pertama kami. Apa yang kamu tunggu? Bergabunglah bersama kami.
          </p>

          <div className="cta-button-shell">
            <button className="cta-button">Claim Your Terminal</button>
          </div>

          <div className="cta-dots" role="tablist" aria-label="CTA tabs">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`cta-dot ${activeDot === index ? "active" : ""}`}
                onClick={() => setActiveDot(index)}
                aria-label={`Pilih CTA ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <footer>
          <div>
            <div className="footer-logo">Scan.in</div>
            <div className="footer-copy">© 2025 Scan.in. Deep space for unique discovery.</div>
          </div>
          <div className="footer-links">
            <a href="#">Privasi</a>
            <a href="#">Protokol</a>
            <a href="#">Terminal</a>
            <a href="#">Kontak</a>
          </div>
          <div className="footer-socials">
            <a href="#">IG</a>
            <a href="#">TW</a>
            <a href="#">YT</a>
          </div>
        </footer>
      </div>
    </>
  );
}
