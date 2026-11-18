import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pages from the old placeholder site, sent to their real counterparts.
  async redirects() {
    return [
      { source: "/developers", destination: "/research", permanent: true },
      { source: "/news", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
