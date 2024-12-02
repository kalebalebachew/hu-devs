/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Can be false for debugging
  transpilePackages: ["geist"], // Ensure geist is transpiled properly
  // Additional settings can go here
};

export default nextConfig;
