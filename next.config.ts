import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mysite.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
