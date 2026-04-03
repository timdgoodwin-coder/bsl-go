import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'BioStack Labs',
  description: 'Science-backed supplements for cellular health and longevity.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
      <Script
        id="goaffpro-script"
        src="https://api.goaffpro.com/loader.js?shop=biostack-labs.myshopify.com"
        strategy="afterInteractive"
      />
    </html>
  );
}
