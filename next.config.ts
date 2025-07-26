import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['s3.ap-southeast-1.amazonaws.com',"cdn.10minuteschool.com",
      "s3.ap-southeast-1.amazonaws.com"],
  },
};

export default nextConfig;
