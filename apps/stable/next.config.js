// @ts-check
const withPlugins = require("next-compose-plugins");
const withModules = require("next-transpile-modules");

const modules = withModules(["@finances/ui"]);

// @ts-ignore
const isGithubPages = process.env.GH_PAGES;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  basePath: isGithubPages ? "/Finances" : "",
  assetPrefix: isGithubPages ? "/Finances/" : "",
};

module.exports = withPlugins([modules], nextConfig);
