import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuestro San Valentín",
  description: "Un rincón especial para celebrar nuestra historia de amor.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
