import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quick QR Maker - Free QR Code Generator",
  description: "Instant, free QR Code Generator. Generate and download QR codes for URLs and text instantly, without any sign-up or login.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
