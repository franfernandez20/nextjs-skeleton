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
// heading: 'Open Sans',

const fonts = {
  heading: 'Raleway',
  body: 'Open Sans'
}

const textStyles = {
  h1: {
    // you can also use responsive styles
    fontSize: ['48px', '72px'],
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%'
  },
  h2: {
    fontSize: ['32px', '42px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%'
  },
  h3: {
    fontSize: ['24px', '36px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%'
  },
  h4: {
    fontSize: ['20px', '24px'],
    fontWeight: 'bold',
    lineHeight: '100%',
    letterSpacing: '-5%'
  },
  h2_sec: {
    fontSize: ['32px', '42px'],
    fontWeight: 'semibold',
    lineHeight: '100%',
    // letterSpacing: '-1%',
    textTransform: 'uppercase',
    fontFamily: 'Raleway',
    letterSpacing: '0.10rem'
  },
  h3_sec: {
    fontSize: ['24px', '36px'],
    fontWeight: 'semibold',
    lineHeight: '100%',
    // letterSpacing: '-1%',
    textTransform: 'uppercase',
    fontFamily: 'Raleway',
    letterSpacing: '0.10rem'
  }
}
export const theme = extendTheme({ colors, fonts, textStyles })
