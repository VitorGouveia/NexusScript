const withPlugins = require("next-compose-plugins")
const withPWA = require("next-pwa")
const runtimeCaching = require('next-pwa/cache');
const withImages = require("next-images")

const PWAPlugin = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    register: true,
    sw: '/service-worker.js',
    skipWaiting: true
  }
})

const ImagePlugin = withImages({
  esModule: true
})

const plugins = [PWAPlugin, ImagePlugin]

/** @type {import('next').NextConfig} */
module.exports = withPlugins(plugins)
