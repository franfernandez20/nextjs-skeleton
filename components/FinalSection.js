import { useRef, useState, useContext } from 'react'
import { store } from 'hooks/store'
import {
  VStack,
  HStack,
  SimpleGrid,
  ButtonGroup,
  Text,
  Box,
  Button,
  Grid,
  GridItem,
  Center,
  Input,
  IconButton,
  useDisclosure,
  useNumberInput
} from '@chakra-ui/react'

import {
  ChevronUpIcon,
  ChevronDownIcon,
  BellIcon,
  AddIcon,
  MinusIcon
} from '@chakra-ui/icons'
import { CustomModal } from 'components/CustomModal'

export const FinalSection = ({ elem, sectionKey }) => {
  const globalState = useContext(store)
  const { dispatch } = globalState
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: elem.total || 0,
      min: 0,
      precision: 0
    })

  const handleOrder = () => {
    onOpen()
  }

  const handleOrderConfirmed = () => {
    const total = getInputProps()['aria-valuenow']
    const value = {
      id: elem.id,
      sectionKey,
      name: elem.name,
      prize: elem.prize,
      total
    }
    console.log({
      elem,
      total: getInputProps()['aria-valuenow']
    })
    console.log('ORDERED')
    dispatch({ type: 'update-menu-section', value })
    dispatch({ type: 'add-order', value })
    onClose()
  }

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps({ isReadOnly: false })

  const onCloseCustom = () => {
    console.log('Closed')
    onClose()
  }

  return (
    <Box
      p="1.5"
      // bgGradient="linear(to-tr, blue.200,blue.600)"
      bg="blue.200"
      borderBottom="4px"
      borderColor="blue.600"
      // onClick={handleClickSection(key, value)}
    >
      <CustomModal
        modalTitle="Confirmación"
        onClose={onCloseCustom}
        isOpen={isOpen}
        onOrder={handleOrderConfirmed}
      />
      <Grid
        h="50px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={0}
        // border="2px"
        // borderRadius="md"
      >
        <GridItem
          rowSpan={1}
          colSpan={4}
          // bg="whiteAlpha.400"
          bgGradient={['linear(to-tr, whiteAlpha.500,blue.300)']}
          // borderLeftRadius="80px"
          borderRightRadius="80px"
        >
          <Text p={0} textStyle="h4" ml={4}>
            {elem.name}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <SimpleGrid columns={5} spacing={0}>
            <GridItem colSpan={2}></GridItem>
            <GridItem colSpan={1}></GridItem>
            <GridItem
              colSpan={2}
              borderBottom="4px"
              borderLeft="4px"
              borderColor="blue.600"
            >
              <Text mr="4px" fontSize="md" ml={2}>
                {elem.prize}€
              </Text>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={3} mt={0}>
          <ButtonGroup size="xs" isAttached variant="outline">
            <Button mr="10px" border="2px" onClick={handleOrder}>
              Pídelo ya
            </Button>
            <IconButton
              aria-label="Añadir al pedido"
              border="2px"
              icon={<AddIcon />}
            />
          </ButtonGroup>
        </GridItem>
        <GridItem colSpan={3} justifySelf="right" mt={0.5}>
          <HStack maxW="150px" p={0}>
            <Button bg="blue.500" h={6} w="15px" minWidth="15px" {...inc}>
              +
            </Button>
            <Input bg="blue.500" h={6} w={14} {...input} />
            <Button bg="blue.500" h={6} w="15px" minWidth="15px" {...dec}>
              -
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  )
}
