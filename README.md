# Scanin Frontend

Template Next.js dengan struktur folder yang siap dipakai tim production.

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Untuk quality check:

```bash
npm run check
```

## Struktur Folder (Standar Industri)

```text
.
├── public/
│   └── assets/
│       ├── icons/
│       └── images/
├── src/
│   ├── app/              # App Router (route, layout, loading, error)
│   ├── components/
│   │   ├── shared/       # Komponen reusable lintas fitur
│   │   └── ui/           # Primitive UI (button, input, modal, dll)
│   ├── config/           # Konfigurasi aplikasi
│   ├── constants/        # Konstanta global
│   ├── features/         # Modul berbasis domain/fitur
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Helper level app (client/server utils)
│   ├── services/         # Integrasi API/external service
│   ├── styles/           # Style global tambahan/tokens
│   ├── types/            # TypeScript types/interfaces
│   └── utils/            # Utility functions umum
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Aturan Penempatan File

1. Route page/layout hanya di `src/app`.
2. Logic spesifik domain ditaruh per modul di `src/features`.
3. Komponen generik masuk `src/components/shared` atau `src/components/ui`.
4. Akses API eksternal lewat `src/services`, bukan langsung dari komponen.
5. Utility murni tanpa state masuk `src/utils` atau `src/lib`.
6. Asset statis (icon/gambar) simpan di `public/assets`.

## Catatan Next.js

Sesuai dokumentasi Next.js:

1. Folder `public` tetap di root.
2. Folder `src` dipakai untuk memisahkan kode aplikasi dari file konfigurasi.
3. File konfigurasi (`next.config.ts`, `tsconfig.json`, `.env`) tetap di root.
