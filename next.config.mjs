/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    reactCompiler: true
  }
};

export default nextConfig;
