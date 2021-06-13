import { useState, useEffect, useContext } from 'react'
import { store } from 'hooks/store'
import { signIn, signOut, useSession } from 'next-auth/client'
import {
  Link as ChakraLink,
  Button,
  ButtonGroup,
  Grid
} from '@chakra-ui/react'

import { Container } from '@components/Container'

import { HamburgerIcon, InfoIcon, ExternalLinkIcon } from '@chakra-ui/icons'

import orderService from 'services/orders'

export const CTA = () => {
  const [session, loading] = useSession()
  const globalState = useContext(store)
  const { state, dispatch } = globalState
  const { order } = state

  const handleOrder = () => {
    console.log({ order })
    console.log({ session })
    orderService.create({
      items: order
    })
  }

  return (
    <Container
      flexDirection="row"
      position="fixed"
      bottom="0"
      width="100%"
      height="60px"
      maxWidth="48rem"
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={8} ml={2} mr={2} mt={0}>
        <Button
          size="md"
          width="100%"
          leftIcon={<ExternalLinkIcon />}
          variant="solid"
          bgGradient="linear(to-tr, green.200,green.600)"
          isDisabled={!session}
          onClick={handleOrder}
        >
          Pedir
        </Button>

        <Button
          width="100%"
          leftIcon={<HamburgerIcon />}
          variant="solid"
          size="md"
          // bgGradient="linear(to-tr, teal.300,yellow.400)"
        >
          Pedidos
        </Button>
        <Button
          variant="outline"
          size="md"
          width="100%"
          leftIcon={<InfoIcon />}
        >
          Ajustes
        </Button>
      </Grid>
      <ButtonGroup
        size="md"
        variant="outline"
        spacing="5"
        height="60px"
      ></ButtonGroup>
    </Container>
  )
}
