import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'pathe'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    'nuxt-component-meta',
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['navTitle']
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
        'bash',
      ]
    }
  },
  // https://github.com/unocss/unocss/tree/main/packages/nuxt
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
  // https://windicss.org
  windicss: {
    config: resolve(__dirname, './windi.config.ts'),
    // https://github.com/windicss/windicss-analysis
    analyze: {
      server: {
        port: 3001,
        showURL: true,
        isProd: false,
        clipboard: true
      }
    }
  },
  // additional css stylesheets to inject into the <head> tag (fonts, etc.)
  // https://metropolis.typehaus.org
  css: ['@typehaus/metropolis/index.css'],
})
