# CCDJD Landing Page

A Next.js landing page for CCDJD.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Next.js has two types of environment variables:

1. **Server-side variables** (private, not exposed to the browser):
   - Regular variables like `API_KEY`
   - Can only be used in server components or API routes
   - Not accessible to client-side code

2. **Public variables** (available on both server and client):
   - Must be prefixed with `NEXT_PUBLIC_`
   - Example: `NEXT_PUBLIC_API_URL`
   - Can be used anywhere in your app

For future API integration, create a `.env.local` file:

```
# Public variables (available in browser)
NEXT_PUBLIC_API_URL=https://your-api-url.com

# Private variables (server-side only)
API_KEY=your_secret_api_key
```

For production, create a `.env.production` file with the same structure.

## Building for Production

```bash
npm run build
```

## Low-Cost Deployment Options

### Vercel (Recommended)

The easiest way to deploy this Next.js app:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy

Vercel's free tier includes:
- Unlimited personal projects
- Serverless functions
- Global CDN
- Automatic HTTPS

### Netlify

Similar to Vercel with a generous free tier:

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set the build command to `npm run build`
4. Deploy

### Railway

Low-cost container deployment:

1. Push your code to GitHub
2. Import your repository on [Railway](https://railway.app)
3. Deploy

Starts at $5/month with a free trial.

### DigitalOcean App Platform

1. Push your code to GitHub
2. Create a new app on [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)
3. Set the build command to `npm run build`
4. Deploy

Basic tier starts at $5/month.

### Render

1. Push your code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Set the build command to `npm run build`
4. Deploy

Starts at $7/month with a free tier for static sites.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
