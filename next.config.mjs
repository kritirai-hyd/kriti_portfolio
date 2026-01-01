<<<<<<< HEAD
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  output: 'export'
};

export default nextConfig;
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
>>>>>>> c780d92b (Initial commit from Create Next App)
