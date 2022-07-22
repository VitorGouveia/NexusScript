// @ts-check
const withPlugins = require("next-compose-plugins");
const withModules = require("next-transpile-modules");
const withPWA = require("next-pwa");

const modules = withModules(["@finances/ui"]);
const pwa = withPWA({
  pwa: {
    dest: "public",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // assetPrefix: "/Finances/",
  // basePath: "/Finances",
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPlugins([modules, pwa], nextConfig);
