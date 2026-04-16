import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai-prompting-bestpractice",
  assetPrefix: "/ai-prompting-bestpractice",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
