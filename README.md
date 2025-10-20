# Quick QR Maker

Instant, free QR Code Generator built with Next.js and Tailwind CSS. Generate and download QR codes for URLs and text instantly, without any sign-up or login.

# Live Demo

[Quick QR Maker] (https://quick-qr-maker.vercel.app/)


## Features

- ✨ **Instant Generation**: QR codes are generated in real-time as you type
- 🔒 **No Login Required**: Create and download QR codes without any registration
- 💾 **Free Download**: Download your QR codes in PNG format for free
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX**: Clean, intuitive interface with a professional design
- ⚡ **Fast & Lightweight**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **QR Code Generation**: [qrcode](https://www.npmjs.com/package/qrcode)
- **Deployment**: [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vuhung16au/quick-qr-maker.git
cd quick-qr-maker
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Usage

1. Enter a URL in the input field
2. The QR code will be generated automatically
3. Click the "Download QR Code (PNG)" button to save the image

## Color Scheme

The application uses a carefully selected color palette:

- Primary: `#3C1053` (Deep Purple)
- Accent: `#F2120C` (Bright Red)
- Secondary: `#B51825` (Dark Red)
- Neutral: `#918B83` (Warm Gray)
- Dark: `#302C2A` (Charcoal)
- Light: `#F2EFEB` (Off-White)

## Project Structure

```
quick-qr-maker/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main QR code generator page
│   └── globals.css     # Global styles
├── .github/
│   ├── CONTRIBUTING.md # Contribution guidelines
│   ├── CODE_OF_CONDUCT.md
│   ├── SECURITY.md
│   └── AI_POLICY.md
├── public/             # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

## Code of Conduct

This project follows a [Code of Conduct](.github/CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

## Security

For security concerns, please see our [Security Policy](.github/SECURITY.md).

## AI Usage Policy

This project has an [AI Usage Policy](.github/AI_POLICY.md) for AI-assisted contributions.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- QR code generation powered by [node-qrcode](https://github.com/soldair/node-qrcode)

---

Made with ❤️ for the open-source community
