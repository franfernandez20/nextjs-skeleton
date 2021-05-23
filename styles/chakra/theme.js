// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    50: '#e7e9ff',
    100: '#bcc0fa',
    200: '#9096f0',
    300: '#646ce8',
    400: '#3942e0',
    500: '#1f29c6',
    600: '#16209b',
    700: '#0e1770',
    800: '#060d45',
    900: '#01041d'
  }
}

export const theme = extendTheme({ colors })
