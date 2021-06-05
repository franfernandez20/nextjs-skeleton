import { useEffect, useContext } from 'react'
import { store } from 'hooks/store'

import menu from 'static-store/menu'

import { Text } from '@chakra-ui/react'
import { Footer } from '@components/Footer'
import { CTA } from '@components/CTA'
import { Main } from '@components/Main'
import { Orders } from '@components/Orders'

export default function Home () {
  const globalState = useContext(store)
  const { state, dispatch } = globalState

  useEffect(() => {
    dispatch({ type: 'init-menu', value: { menu } })
  }, [])

  const handleUpdateSections = (section, elem) => {}

  return (
    <>
      {Object.keys(state.menu).length > 0 && (
        <Main onUpdateSections={handleUpdateSections} />
      )}
      <Orders />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA />
    </>
  )
}
