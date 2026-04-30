import type { Metadata } from "next";
import LoginPage from "@/components/auth/LoginPage";

export const metadata: Metadata = {
  title: "Scan.in - Login",
  description: "Halaman login Scan.in untuk masuk ke dashboard bisnis Anda.",
};

export default function Page() {
  return <LoginPage />;
}
