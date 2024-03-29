// next.config.js
module.exports = {
  publicRuntimeConfig: {
    url: process.env.DIRECTUS_URL,
  },
  serverRuntimeConfig: {
    // email: process.env.DIRECTUS_EMAIL,
    // password: process.env.DIRECTUS_PASSWORD,
    token: process.env.DIRECTUS_STATIC_TOKEN,
  },
  images: {
    domains: ['assets.maccarianagency.com'],
  },
}
