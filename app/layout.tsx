import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: "Lokesh Sawai | Aspiring Python Developer",
  description: "Portfolio of Lokesh Sawai, B.Sc. Computer Science student from Wardha, India, building skills in Python, Java and web development.",
  openGraph: { title: "Lokesh Sawai | Aspiring Python Developer", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}
