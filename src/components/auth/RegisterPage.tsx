"use client";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121212] px-4 py-8 text-[#e5e2e1] sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[40vw] w-[40vw] rounded-full bg-[#1ed760]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[30vw] w-[30vw] rounded-full bg-[#1ed760]/5 blur-[100px]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[480px] flex-col justify-center gap-6 sm:min-h-[calc(100vh-5rem)] sm:gap-8 lg:max-w-[500px]">
        <header className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span
              className="material-symbols-outlined text-[38px] text-[#1ed760] sm:text-[42px]"
              aria-hidden="true"
            >
              qr_code_scanner
            </span>
            <h1 className="font-[family-name:var(--font-be-vietnam)] text-[2rem] font-black tracking-tight text-white sm:text-[2.25rem]">
              Scan.in
            </h1>
          </div>
          <p className="font-[family-name:var(--font-be-vietnam)] text-lg font-bold text-white sm:text-xl">
            Buat Akun Baru
          </p>
          <p className="max-w-sm text-sm leading-6 text-[#b3b3b3] sm:text-base">
            Daftarkan bisnis Anda untuk mulai mengelola pesanan, meja, dan operasional secara lebih
            cepat.
          </p>
        </header>

        <section className="rounded-2xl border border-white/5 bg-[#181818] p-5 shadow-[0_0_80px_-20px_rgba(30,215,96,0.15)] backdrop-blur-sm sm:rounded-3xl sm:p-6 lg:p-7">
          <form className="flex flex-col gap-5 sm:gap-6">
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
              <div className="flex flex-col gap-2">
                <label
                  className="px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]"
                  htmlFor="firstName"
                >
                  Nama Depan
                </label>
                <input
                  className="w-full rounded-full border border-transparent bg-[#1f1f1f] px-5 py-3.5 text-sm text-white outline-none transition focus:border-[#1ed760]/40 focus:ring-2 focus:ring-[#1ed760]/30 sm:px-6 sm:py-4 sm:text-base"
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="Budi"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]"
                  htmlFor="lastName"
                >
                  Nama Belakang
                </label>
                <input
                  className="w-full rounded-full border border-transparent bg-[#1f1f1f] px-5 py-3.5 text-sm text-white outline-none transition focus:border-[#1ed760]/40 focus:ring-2 focus:ring-[#1ed760]/30 sm:px-6 sm:py-4 sm:text-base"
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Santoso"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]"
                htmlFor="businessName"
              >
                Nama Bisnis
              </label>
              <input
                className="w-full rounded-full border border-transparent bg-[#1f1f1f] px-5 py-3.5 text-sm text-white outline-none transition focus:border-[#1ed760]/40 focus:ring-2 focus:ring-[#1ed760]/30 sm:px-6 sm:py-4 sm:text-base"
                id="businessName"
                name="businessName"
                autoComplete="organization"
                placeholder="Nama usaha Anda"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full rounded-full border border-transparent bg-[#1f1f1f] px-5 py-3.5 text-sm text-white outline-none transition focus:border-[#1ed760]/40 focus:ring-2 focus:ring-[#1ed760]/30 sm:px-6 sm:py-4 sm:text-base"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="nama@bisnis.com"
                type="email"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
              <div className="flex flex-col gap-2">
                <label
                  className="px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full rounded-full border border-transparent bg-[#1f1f1f] px-5 py-3.5 text-sm text-white outline-none transition focus:border-[#1ed760]/40 focus:ring-2 focus:ring-[#1ed760]/30 sm:px-6 sm:py-4 sm:text-base"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b3b3b3]"
                  htmlFor="confirmPassword"
                >
                  Konfirmasi
                </label>
                <input
                  className="w-full rounded-full border border-transparent bg-[#1f1f1f] px-5 py-3.5 text-sm text-white outline-none transition focus:border-[#1ed760]/40 focus:ring-2 focus:ring-[#1ed760]/30 sm:px-6 sm:py-4 sm:text-base"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 px-4 text-sm text-[#b3b3b3]">
              <input
                className="mt-1 h-4 w-4 rounded border-white/20 bg-[#1f1f1f] text-[#1ed760] focus:ring-0 focus:ring-offset-0"
                name="agree"
                type="checkbox"
              />
              <span className="leading-6">
                Saya setuju dengan Syarat & Ketentuan dan Kebijakan Privasi Scan.in.
              </span>
            </label>

            <button
              className="mt-1 w-full rounded-full bg-[#1ed760] py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#121212] shadow-lg shadow-[#1ed760]/20 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:py-4"
              type="submit"
            >
              Daftar Sekarang
            </button>
          </form>

          <div className="relative my-5 flex items-center sm:my-6">
            <div className="h-px flex-1 bg-white/10" />
            <span className="mx-4 shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] text-[#535353]">
              Atau daftar dengan
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button className="flex items-center justify-center rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5">
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5">
              <span>Apple</span>
            </button>
          </div>
        </section>

        <footer className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-[#b3b3b3]">
            Sudah punya akun?{" "}
            <a
              className="ml-1 font-semibold text-white underline decoration-[#1ed760] underline-offset-4"
              href="/login"
            >
              Masuk sekarang
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#535353] sm:gap-x-6">
            <a className="transition-colors hover:text-[#b3b3b3]" href="#">
              Syarat & Ketentuan
            </a>
            <a className="transition-colors hover:text-[#b3b3b3]" href="#">
              Kebijakan Privasi
            </a>
          </div>
        </footer>
      </div>

      <div className="pointer-events-none fixed bottom-6 left-6 flex flex-col gap-2 opacity-20 sm:bottom-10 sm:left-10">
        <div className="h-1 w-12 bg-[#1ed760]" />
        <div className="h-1 w-8 bg-white/10" />
        <div className="h-1 w-4 bg-white/10" />
      </div>
    </main>
  );
}
