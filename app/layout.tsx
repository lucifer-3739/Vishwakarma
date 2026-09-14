import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vishwakarma Puja 2026 | Invitation - Hosted by Ram Sharma",
  description:
    "You are cordially invited by Ram Sharma to celebrate Vishwakarma Puja 2026. Honoring the Divine Architect, Engineering, and Innovation on Sept 17 & 18, 2026.",
  keywords: [
    "Vishwakarma Puja 2026",
    "Invitation",
    "Ram Sharma",
    "Puja Sthapana",
    "Vishwakarma Visarjan",
    "Divine Architect",
    "Engineering Puja",
  ],
  openGraph: {
    title: "Vishwakarma Puja 2026 Invitation - Hosted by Ram Sharma",
    description: "Join Ram Sharma in celebrating the Divine Architect & Innovation on Sept 17 & 18, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-slate-800 bg-[#FAF7F2] min-h-screen selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
