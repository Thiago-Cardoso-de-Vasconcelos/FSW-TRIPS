/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
  // Habilitar mapas de origem no ambiente de desenvolvimento
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'source-map'; // Configura a geração de mapas de origem
    }
    return config;
  },
  // Desativar mapas de origem em produção (opcional)
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
