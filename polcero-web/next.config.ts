import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (best compression), fall back to WebP, then original.
    // next/image handles the Accept header negotiation automatically.
    formats: ["image/avif", "image/webp"],
    // Quality defaults — 85 for WebP/AVIF is visually lossless at ~40% smaller
    // than PNG/JPEG.
    qualities: [85],
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
