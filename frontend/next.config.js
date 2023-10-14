/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://yuki-api.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
