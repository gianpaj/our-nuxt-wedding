import type { Plugin } from 'windicss/types/interfaces'
import { defineConfig } from "windicss/helpers";
import colors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'
import typography from 'windicss/plugin/typography'
import aspectRatio from 'windicss/plugin/aspect-ratio'

const plugins: Plugin[] = [
  typography as Plugin,
  aspectRatio as Plugin,
]


export default defineConfig({
  darkMode: "class", // or 'media'
  plugins,
  attributify: true,
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#efefed',
      blue: colors.sky,
      green: {
        100: '#bfc0bb',
        200: '#a9a9a9',
        300: '#8c8c8c',
        400: '#737373',
        500: '#6a6c5e',
      },
      yellow: colors.amber,
      gray: colors.stone,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      // colors: {
      //   red: {
      //     500: 'black',
      //   },
      // },
      container: {
        center: true
      }
    },
  },
  shortcuts: {
    // 'light-img': 'block dark:hidden',
    // 'dark-img': 'hidden dark:block',
  },
});
