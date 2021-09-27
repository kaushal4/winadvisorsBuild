const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  withImages(),
  {
    async redirects() {
      return [
        {
          source: "/blog",
          destination: `/blog/invalid`,
          permanent: false,
        },
      ];
    },
  },
]);
