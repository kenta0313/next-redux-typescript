/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  presets: ["next/babel"],
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
