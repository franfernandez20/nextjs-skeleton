import { Link as ChakraLink, Button, ButtonGroup } from '@chakra-ui/react'

import { Container } from '@components/Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ButtonGroup variant="outline" spacing="1">
      <Button
        // width="100%"
        // variant="outline"
        size="md"
        bgGradient="linear(to-tr, blue.200,blue.600)"
      >
        chakra-ui
      </Button>

      <Button
        // width="100%"
        size="md"
        colorScheme="twitter"
        // bgGradient="linear(to-tr, teal.300,yellow.400)"
      >
        View Repo
      </Button>
      <Button size="md" color="brand.200">
        Click me
      </Button>
      <Button
        size="md"
        colorScheme="blue">Save</Button>
      <Button>Cancel</Button>
    </ButtonGroup>
  </Container>
)
