import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains: ['places.googleapis.com']
  },
  reactCompiler: true,
};

export default nextConfig;
