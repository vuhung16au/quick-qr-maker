"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import QRCode from "qrcode";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, toggleTheme } = useTheme();

  const generateQRCode = useCallback(async () => {
    if (!url) return;

    try {
      const canvas = canvasRef.current;
      if (canvas) {
        await QRCode.toCanvas(canvas, url, {
          width: 300,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        });
        const dataUrl = canvas.toDataURL("image/png");
        setQrCodeUrl(dataUrl);
      }
    } catch (err) {
      console.error("Error generating QR code:", err);
    }
  }, [url]);

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrCodeUrl;
    link.click();
  };

  const clearInput = () => {
    setUrl("");
    setQrCodeUrl("");
  };

  useEffect(() => {
    if (url) {
      generateQRCode();
    } else {
      setQrCodeUrl("");
    }
  }, [url, generateQRCode]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors">
      {/* Header */}
      <header className="bg-primary dark:bg-gray-800 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Quick QR Maker</h1>
            <p className="text-sm md:text-base mt-1 opacity-90">
              Free QR Code Generator - No Login Required
            </p>
          </div>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-purple-400 mb-4">
              Create Your QR Code Instantly
            </h2>
            <p className="text-lg text-neutral dark:text-gray-300">
              Enter a URL or any text below to generate and download your QR code for free
            </p>
          </div>

          {/* QR Code Generator */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-6 md:p-8 mb-8">
            <div className="space-y-6">
              {/* URL Input */}
              <div>
                <label
                  htmlFor="url-input"
                  className="block text-sm font-semibold text-dark dark:text-gray-200 mb-2"
                >
                  Enter URL or Text
                </label>
                <div className="flex gap-2">
                  <input
                    id="url-input"
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com or any text"
                    className="flex-1 px-4 py-3 border-2 border-neutral/30 dark:border-gray-600 rounded-lg focus:border-primary dark:focus:border-purple-400 focus:outline-none transition-colors text-dark dark:text-gray-100 bg-white dark:bg-gray-700"
                  />
                  <button
                    onClick={clearInput}
                    disabled={!url}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-100 font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200 dark:disabled:hover:bg-gray-600"
                    title="Clear input"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* QR Code Display */}
              {qrCodeUrl && (
                <div className="flex flex-col items-center space-y-4 py-6">
                  <div className="bg-white p-4 rounded-lg border-2 border-neutral/20 dark:border-gray-600">
                    <canvas ref={canvasRef} className="max-w-full h-auto" />
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={downloadQRCode}
                    disabled={!qrCodeUrl}
                    className="bg-accent hover:bg-secondary dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent dark:disabled:hover:bg-purple-600"
                  >
                    Download QR Code (PNG)
                  </button>
                </div>
              )}

              {/* Hidden Canvas for Generation */}
              {!qrCodeUrl && (
                <canvas ref={canvasRef} className="hidden" />
              )}

              {/* Privacy Notice */}
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="text-green-600 dark:text-green-400 text-xl mt-0.5">🔒</div>
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-1">
                      Your Privacy is Protected
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      All QR code generation happens locally in your browser. No data is transmitted to any server.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="text-accent dark:text-purple-400 text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-dark dark:text-gray-100 mb-2">Real-time Generation</h3>
              <p className="text-neutral dark:text-gray-300 text-sm">
                QR codes are automatically generated as you type. No waiting required.
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="text-accent dark:text-purple-400 text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-dark dark:text-gray-100 mb-2">100% Private</h3>
              <p className="text-neutral dark:text-gray-300 text-sm">
                All processing happens locally in your browser. No data leaves your device.
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="text-accent dark:text-purple-400 text-3xl mb-3">💾</div>
              <h3 className="font-bold text-dark dark:text-gray-100 mb-2">Free Download</h3>
              <p className="text-neutral dark:text-gray-300 text-sm">
                Download your QR codes in PNG format for free, forever.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark dark:bg-gray-950 text-white py-6 px-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Quick QR Maker. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-60">
            Free QR Code Generator - No Login Required
          </p>
        </div>
      </footer>
    </div>
  );
}
