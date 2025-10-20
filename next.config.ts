// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tells Next.js to output static HTML instead of needing a server
  output: "export",
  
  // Prevents image optimization (since static export doesn’t support it)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
