/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL || "",
    OTP_SECRET: OTP_SECRET,
    JWT_SECRET: JWT_SECRET,
    EMAIL_USER: "" || EMAIL_USER,
    EMAIL_PASSWORD: "eyvz vtto vcux slzq",
  },
};

export default nextConfig;
