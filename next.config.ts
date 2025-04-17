/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api-proxy/:path*', // Qualquer requisição para /api-proxy/...
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // Será redirecionada para o servidor real
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',       
        port: '',           
        pathname: '/**',      
      },
    ],
  },
}

module.exports = nextConfig