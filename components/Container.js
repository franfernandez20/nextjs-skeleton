import { Flex } from '@chakra-ui/react'

export const Container = (props) => {
  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor.light}
      color={color.light}
      {...props}
    />
  )
}
