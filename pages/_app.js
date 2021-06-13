// import '../styles/globals.css'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/600.css'

import { ChakraProvider } from '@chakra-ui/react'
import { StateProvider } from '../hooks/store'
import { Provider } from 'next-auth/client'
import { theme } from '@chakra/theme'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider session={pageProps.session}>
        <StateProvider>
          <Component {...pageProps} />
        </StateProvider>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
