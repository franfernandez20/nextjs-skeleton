import { Text } from '@chakra-ui/react'
import { Footer } from '@components/Footer'
import { CTA } from '@components/CTA'
import { Main } from '@components/Main'
import { Orders } from '@components/Orders'

export default function Home () {
  return (
    <>
      <Main />
      <Orders />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA />
    </>
  )
}
