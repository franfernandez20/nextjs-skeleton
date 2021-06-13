import { useEffect, useContext, useState } from 'react'
import { store } from 'hooks/store'

import MENU from 'static-store/menu'

import { MenuComponent } from 'components/MenuComponent'
import { Text } from '@chakra-ui/react'
import { Footer } from '@components/Footer'
import { CTA } from '@components/CTA'
import { Orders } from '@components/Orders'
import Header from 'components/Header'

function Home ({ menu }) {
  const globalState = useContext(store)
  const { state, dispatch } = globalState
  console.log('state', state)

  useEffect(() => {
    dispatch({ type: 'init-menu', value: { menu } })
  }, [])

  return (
    <>
      {/* <Page /> */}
      <Header/>
      {Object.keys(state.menu).length > 0 && (
        <MenuComponent menu={state.menu} />
      )}
      <Orders />
      {/* <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer> */}
      <CTA />
    </>
  )
}

export async function getStaticProps () {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  // const json = await res.json();

  return {
    props: {
      menu: MENU
    }
  }
}

export default Home
