// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/seo'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://spoon-as-a-service.pages.dev',
    name: 'Spoon as a Service',
    description: 'Enterprise Broth Disruption & Liquid Concurrency via Cloud Cutlery.',
    defaultLocale: 'en',
    indexable: true,
    trailingSlash: false // Canonical URL consistency
  },
  runtimeConfig: {
    public: {
      paddleCheckoutUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/sitemap.xml': { prerender: true },
    '/robots.txt': { prerender: true }
  },

  devServer: {
    host: '127.0.0.1',
    port: 3000
  },

  compatibilityDate: '2026-06-30',
  nitro: {
    cloudflare: {
      nodeCompat: true
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ogImage: {
    zeroRuntime: true
  }
})
