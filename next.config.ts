import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iilm.ac.in",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "storage.kun.uz",
        pathname: "/source/**",
      },
      {
        protocol: "https",
        hostname: "ictbpai.iilm.edu",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
