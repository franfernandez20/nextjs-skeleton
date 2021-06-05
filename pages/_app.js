// import '../styles/globals.css'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/600.css'

import { ChakraProvider } from '@chakra-ui/react'
import { StateProvider } from '../hooks/store'
import { theme } from '@chakra/theme'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </ChakraProvider>
  )
}

export default MyApp
