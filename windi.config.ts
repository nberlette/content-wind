import colors from 'windicss/colors'
import theme from 'windicss/defaultTheme'
import { defineConfig, transform } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    // transform('@tailwindcss/typography'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/filters'),
    require('windicss/plugin/scroll-snap'),
    // require('windicss/plugin/typography'),
  ],
  content: [
    './content/**/*.{vue,md,mdx,markdown,yml,yaml,json,json5,csv}',
    './{components,pages,app}/**/*.{vue,md,mdx,markdown,yml,yaml,json,json5,csv}',
    './components/content/**/*.{vue,md}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Metropolis'],
        sans: ['Metropolis', 'Inter', 'Open Sans', ...theme.fontFamily.sans],
        mono: ['Dank Mono', 'IBM Plex Mono', 'Operator Mono SSm Lig', 'Operator Mono SSm', 'Operator Mono', 'MonoLisa', ...theme.fontFamily.mono],
        serif: ['Sentinel SSm', ...theme.fontFamily.serif]
      },
      colors: {
        // Customize the feeling of your site
        gray: colors.stone
      }
    },
  },
  shortcuts: {
    't-fastest': 'duration-100 ease-in',
    't-faster': 'duration-150 ease-in',
    't-fast': 'duration-300 ease-in',
    't-normal': 'duration-400 ease-in',
    't-slow': 'duration-500 ease-in',
    't-slower': 'duration-700 ease-in',
    't-slowest': 'duration-1000 ease-in',
    'ease-colors': 'transition-colors t-fast',
    'ease-all': 'transition-all t-fast'
  }
})