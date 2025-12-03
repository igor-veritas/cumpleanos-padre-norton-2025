/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: '/home/igorbondiman/Codes/SSSR/misc/pader-cumpleanos/cumpleanos-padre',
  },
  productionBrowserSourceMaps: false,
}

export default nextConfig
