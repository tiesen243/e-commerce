/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://ty-ecommerce-api.vercel.app/api/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
