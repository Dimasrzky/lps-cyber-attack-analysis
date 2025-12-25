import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Analisis Serangan Siber LPS Indonesia 2025",
  description: "Analisis lengkap serangan DDoS terhadap Lembaga Penjamin Simpanan (LPS) Indonesia pada Juni-Juli 2025",
  keywords: ["LPS", "serangan siber", "DDoS", "keamanan siber", "Indonesia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
