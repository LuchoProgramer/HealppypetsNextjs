/** @type {import('next').NextConfig} */// Configuración de Next.js

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Redirigir HTTP a HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'healppypets.com',
          },
        ],
        destination: 'https://www.healppypets.com/:path*',
        permanent: true,
      },
      // Redirigir dominio sin www a www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'healppypets.com',
          },
        ],
        destination: 'https://www.healppypets.com/:path*',
        permanent: true,
      },
    ];
  },
  // Forzar HTTPS
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
