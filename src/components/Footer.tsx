"use client";

export default function Footer() {
  return (
    <footer className="bg-black w-full py-12 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col space-y-2">
            <span className="text-lg font-bold text-white">Scan.in</span>
            <p className="text-sm text-zinc-500">© 2026 Scan.in. Built for UMKM.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a className="text-sm text-zinc-500 hover:text-[#1ed760] transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-sm text-zinc-500 hover:text-[#1ed760] transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-sm text-zinc-500 hover:text-[#1ed760] transition-colors" href="#">
              Contact Support
            </a>
            <a className="text-sm text-zinc-500 hover:text-[#1ed760] transition-colors" href="#">
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
