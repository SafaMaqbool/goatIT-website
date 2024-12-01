/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    // inlineCss: true,
    reactCompiler: true
  }
};

export default nextConfig;
