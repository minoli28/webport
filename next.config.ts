import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["media.licdn.com"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
