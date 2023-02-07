// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.fedtop.com",
        port: "",
        pathname: "/picbed/**",
      },
    ],
  },
};
