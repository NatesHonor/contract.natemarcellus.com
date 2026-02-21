import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: { remotePatterns: [ { protocol: "https", hostname: "www.upwork.com", }, ], },
};

export default nextConfig;
