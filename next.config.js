/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  experimental: {
    typedRoutes: true,
  },
  poweredByHeader: false,
  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en"],
    localeDetection: false,
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Language", value: "ar" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
