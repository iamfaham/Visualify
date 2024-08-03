import nextPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // disable PWA in development mode
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
};

export default withPWA(nextConfig);
