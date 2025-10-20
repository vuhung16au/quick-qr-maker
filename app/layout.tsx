import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Quick QR Maker - Free QR Code Generator",
  description: "Instant, free QR Code Generator. Generate and download QR codes for URLs and text instantly, without any sign-up or login.",
  keywords: [
    "QR code generator",
    "free QR code",
    "QR code maker",
    "generate QR code",
    "download QR code",
    "QR code online",
    "instant QR code",
    "no login QR code",
  ],
  authors: [{ name: "Quick QR Maker" }],
  creator: "Quick QR Maker",
  publisher: "Quick QR Maker",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quick-qr-maker.vercel.app",
    title: "Quick QR Maker - Free QR Code Generator",
    description: "Instant, free QR Code Generator. Generate and download QR codes for URLs and text instantly, without any sign-up or login.",
    siteName: "Quick QR Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick QR Maker - Free QR Code Generator",
    description: "Instant, free QR Code Generator. Generate and download QR codes for URLs and text instantly, without any sign-up or login.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script to prevent theme flash on initial load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
