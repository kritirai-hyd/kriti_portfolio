const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
  assetPrefix: isProd ? '/kriti_portfolio/' : '',
  basePath: isProd ? '/kriti_portfolio' : '',
  output: 'export'
};

export default nextConfig;