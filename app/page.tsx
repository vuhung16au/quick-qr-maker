'use client';

import { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate QR code whenever input changes
  useEffect(() => {
    if (inputText) {
      generateQRCode(inputText);
    } else {
      setQrCodeUrl('');
    }
  }, [inputText]);

  const generateQRCode = async (text: string) => {
    try {
      if (canvasRef.current) {
        await QRCode.toCanvas(canvasRef.current, text, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });
        const dataUrl = canvasRef.current.toDataURL();
        setQrCodeUrl(dataUrl);
      }
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const clearInput = () => {
    setInputText('');
    setQrCodeUrl('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Quick QR Maker
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Generate QR codes for URLs and text instantly. Free, fast, and no sign-up required.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="mb-6">
            <label
              htmlFor="qr-input"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Enter URL or Text
            </label>
            <textarea
              id="qr-input"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
              placeholder="https://example.com or any text you want to encode..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          {inputText && (
            <div className="flex gap-3 mb-6">
              <button
                onClick={downloadQRCode}
                disabled={!qrCodeUrl}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Download QR Code
              </button>
              <button
                onClick={clearInput}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-colors"
              >
                Clear
              </button>
            </div>
          )}

          <div className="flex justify-center">
            {qrCodeUrl ? (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <canvas ref={canvasRef} className="mx-auto" />
              </div>
            ) : (
              <canvas ref={canvasRef} className="hidden" />
            )}
          </div>

          {!inputText && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <svg
                className="mx-auto h-12 w-12 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
              <p className="text-sm">Enter a URL or text above to generate your QR code</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            No data is stored or transmitted. All QR code generation happens locally in your browser.
          </p>
        </div>
      </div>
    </div>
  );
}
