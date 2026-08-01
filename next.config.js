const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/kriti_portfolio" : "",
  assetPrefix: isProd ? "/kriti_portfolio/" : "",
};