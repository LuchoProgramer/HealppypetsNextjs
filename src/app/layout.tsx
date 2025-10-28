import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getLocalBusinessJsonLd, getWebsiteJsonLd } from "@/lib/schema";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "HealppyPets - Veterinaria en Carcelén, Quito",
    template: "%s | HealppyPets"
  },
  description: "En HealppyPets en Carcelén, Quito, ofrecemos peluquería canina, corte de pelo para mascotas, consultas veterinarias, vacunación, desparasitación y farmacia. Tu veterinaria de confianza en Carcelén.",
  keywords: ["veterinaria", "Quito", "Carcelén", "grooming", "mascotas", "vacunación", "desparasitación", "farmacia veterinaria"],
  authors: [{ name: "HealppyPets" }],
  creator: "HealppyPets",
  publisher: "HealppyPets",
  metadataBase: new URL('https://www.healppypets.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "HealppyPets - Veterinaria en Carcelén, Quito",
    description: "Servicios veterinarios profesionales: grooming, vacunación, desparasitación y farmacia. Tu mascota en las mejores manos.",
    url: 'https://www.healppypets.com',
    siteName: 'HealppyPets',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HealppyPets - Veterinaria en Carcelén, Quito',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HealppyPets - Veterinaria en Carcelén, Quito",
    description: "Servicios veterinarios profesionales para tu mascota",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'c7a222bfc56de06a',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/Logo-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logo32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/Logo-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/Logo-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/Logo-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="c7a222bfc56de06a" />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-T2KBL64FPR"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T2KBL64FPR');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5NJ4LVZQ');
          `}
        </Script>

        {/* Structured Data - Local Business */}
        <Script id="schema-organization" type="application/ld+json">
          {JSON.stringify(getLocalBusinessJsonLd())}
        </Script>
        <Script id="schema-website" type="application/ld+json">
          {JSON.stringify(getWebsiteJsonLd())}
        </Script>

        {/* TikTok Pixel */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('D40IHD3C77UED4265BOG');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NJ4LVZQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        <Breadcrumbs />
        <main className="min-h-screen pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}