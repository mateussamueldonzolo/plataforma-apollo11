/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com"], // Adicione o domínio da imagem externa
  },
};

module.exports = nextConfig;
