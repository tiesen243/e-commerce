//** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://yuki-api.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
