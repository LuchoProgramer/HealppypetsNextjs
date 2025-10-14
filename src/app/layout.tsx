import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

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
  description: "En HealppyPets en Carcelén, Quito, ofrecemos servicios de grooming, consultas veterinarias, vacunación, desparasitación y farmacia para mascotas. Cuida a tus mascotas con los mejores expertos.",
  keywords: ["veterinaria", "Quito", "Carcelén", "grooming", "mascotas", "vacunación", "desparasitación", "farmacia veterinaria"],
  authors: [{ name: "HealppyPets" }],
  creator: "HealppyPets",
  publisher: "HealppyPets",
  metadataBase: new URL('https://healppypets.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "HealppyPets - Veterinaria en Carcelén, Quito",
    description: "Servicios veterinarios profesionales: grooming, vacunación, desparasitación y farmacia. Tu mascota en las mejores manos.",
    url: 'https://healppypets.netlify.app',
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
    google: 'tu-codigo-de-verificacion-google',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "HealppyPets",
              "image": "https://healppypets.netlify.app/images/logo.png",
              "description": "Veterinaria en Carcelén, Quito especializada en grooming, vacunación, desparasitación y farmacia para mascotas",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Clemente Yerovi Indaburu Oe143 y OE1B",
                "addressLocality": "Quito",
                "addressRegion": "Pichincha",
                "postalCode": "170143",
                "addressCountry": "EC"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -0.0915484,
                "longitude": -78.4697461
              },
              "url": "https://healppypets.netlify.app",
              "telephone": "+593987005084",
              "email": "happypetscada@gmail.com",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100093894950283",
                "https://www.tiktok.com/@healppy.pets",
                "https://www.instagram.com/healppy_pets"
              ]
            }),
          }}
        />
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}