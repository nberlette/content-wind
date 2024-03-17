import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    // 'nuxt-windicss',
    '@nuxtjs/color-mode',
    '@unocss/nuxt'
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['navTitle'],
    },
    highlight: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula',
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md#all-languages
      preload: [
        'javascript',
        'typescript',
        'tsx',
        'jsx',
        'mdx',
        'json',
        'jsonc',
        'yaml',
        'toml',
        'css',
        'bash'
      ]
    },
  },
  // https://windicss.org
  // windicss: {
  //   config: resolve('./windi.config.ts'),
  //   // https://github.com/windicss/windicss-analysis
  //   analyze: {
  //     server: {
  //       port: 3001,
  //       showURL: true,
  //       isProd: false,
  //       clipboard: true,
  //     },
  //   }
  // },
  // additional css stylesheets to inject into the <head> tag (fonts, etc.)
  // https://metropolis.typehaus.org
  css: [
    '@typehaus/metropolis/300.css',
    '@typehaus/metropolis/500.css',
    '@typehaus/metropolis/700.css'
  ],
})
