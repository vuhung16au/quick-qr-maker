"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  useEffect(() => {
    if (url) {
      generateQRCode();
    } else {
      setQrCodeUrl("");
    }
  }, [url, generateQRCode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12" style={{ backgroundColor: '#D4D8E8' }}>
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quick QR Maker
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            Generate QR codes for URLs and text instantly. Free, fast, and no sign-up required.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-6">
          {/* Input Section */}
          <div className="mb-8">
            <label
              htmlFor="url-input"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter URL or Text
            </label>
            <textarea
              id="url-input"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com or any text you want to encode..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-gray-900"
            />
          </div>

          {/* QR Code Display */}
          <div className="flex flex-col items-center py-8">
            {qrCodeUrl ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <canvas ref={canvasRef} className="max-w-full h-auto" />
                </div>
                <button
                  onClick={downloadQRCode}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200"
                >
                  Download QR Code
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="mb-4 text-6xl text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 mx-auto"
                  >
                    <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm4 4H7V7h2v2zm-4 2h8v8H3v-8zm2 2v4h4v-4H5zm4 4H7v-2h2v2zM13 3h8v8h-8V3zm2 2v4h4V5h-4zm4 4h-2V7h2v2zm-6 2h8v8h-8v-8zm2 2v4h4v-4h-4zm4 4h-2v-2h2v2z"/>
                  </svg>
                </div>
                <p className="text-gray-600">
                  Enter a URL or text above to generate your QR code
                </p>
              </div>
            )}
          </div>

          {/* Hidden Canvas for Generation */}
          {!qrCodeUrl && (
            <canvas ref={canvasRef} className="hidden" />
          )}
        </div>

        {/* Privacy Notice */}
        <div className="text-center">
          <p className="text-sm text-gray-700">
            No data is stored or transmitted. All QR code generation{" "}
            <span className="font-medium">happens locally in your browser.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
