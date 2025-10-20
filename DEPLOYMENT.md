# Deployment Guide

This guide will help you deploy Quick QR Maker to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- Git repository connected to GitHub

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository `vuhung16au/quick-qr-maker`
4. Vercel will automatically detect the Next.js framework
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be deployed!

## Environment Variables

This application does not require any environment variables. All QR code generation happens client-side.

## Custom Domain

To add a custom domain:

1. Go to your project on Vercel
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to the `main` branch
- **Preview**: Every push to other branches and pull requests

## Build Configuration

The project uses the following build settings (configured in `vercel.json`):

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Performance

The deployed application is optimized for performance:
- Static generation where possible
- Automatic image optimization
- Edge network delivery via Vercel's CDN
- Zero cold starts

## Monitoring

Monitor your deployment on Vercel:
- Real-time logs
- Performance analytics
- Error tracking
- Usage statistics

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test the build locally: `npm run build`

### Runtime Errors

1. Check the Function Logs in Vercel dashboard
2. Ensure environment variables are set correctly (if any)
3. Test locally: `npm run start`

## Support

For issues with deployment, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Project Issues](https://github.com/vuhung16au/quick-qr-maker/issues)
