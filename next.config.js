/** @type {import('next').NextConfig} */

// next.config.js
// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       /* config for next-optimized-images */
//     },
//   ],

//   // your other plugins here
// ]);

const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ["www.google.com"],
  //   // path prefix for Image Optimization API, useful with `loader`
  //   path: "./public",
  //   // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
  //   loader: "cloudinary",
  //   // disable static imports for image files
  //   disableStaticImages: false,
  //   // minimumCacheTTL is in seconds, must be integer 0 or more
  //   minimumCacheTTL: 60,
  //   // ordered list of acceptable optimized image formats (mime types)
  //   formats: ["image/webp"],
  // },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/about": { page: "/about" },
  //     "/portfoli": { page: "/portfolio" },
  //     "/blog": { page: "/blog" },
  //     "/newsletter": { page: "/newsletter" },
  //   };
  // },
};

module.exports = nextConfig;
