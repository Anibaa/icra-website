/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Specify trailing slash for better static hosting compatibility
  trailingSlash: true,
}

export default nextConfig
