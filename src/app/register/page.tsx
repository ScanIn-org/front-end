import type { Metadata } from "next";
import RegisterPage from "@/components/auth/RegisterPage";

export const metadata: Metadata = {
  title: "Scan.in - Daftar",
  description: "Halaman pendaftaran Scan.in untuk membuat akun baru bisnis Anda.",
};

export default function Page() {
  return <RegisterPage />;
}
