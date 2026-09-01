import type { NextConfig } from "next";

const strapiUrl = process.env.STRAPI_URL ? new URL(process.env.STRAPI_URL) : null;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: strapiUrl
      ? [{ protocol: strapiUrl.protocol.replace(":", "") as "http" | "https", hostname: strapiUrl.hostname, port: strapiUrl.port }]
      : [],
  },
};

export default nextConfig;
