import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // ok for production
  // remove distDir: '../../.next'
};
export default nextConfig;
