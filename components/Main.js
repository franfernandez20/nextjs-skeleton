import { useRef, useState } from 'react'
import {
  VStack,
  Text,
  Box,
  Button,
  Grid,
  GridItem,
  Center,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

import { ChevronUpIcon, ChevronDownIcon, BellIcon } from '@chakra-ui/icons'

import menu from 'static-store/menu'
import orderService from 'services/orders'

const OutModal = ({ modalTitle, isOpen, onOrder, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        {/* <ModalBody>dddddddd</ModalBody> */}

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onOrder}>
            Pedir
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const FinalSection = ({ elem, key }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [total, setTotal] = useState(0)

  const updateTotal = (n) => () => total + n >= 0 && setTotal(total + n)

  const handleOrder = () => {
    onOpen()
  }

  const handleOrderConfirmed = () => {
    console.log({
      elem,
      total
    })
    console.log('ORDERED')
    orderService.create({
      items: [
        {
          name: elem.name,
          prize: elem.prize,
          total
        }
      ],
      total: elem.prize * total
    })
    onClose()
  }

  const onCloseCustom = () => {
    console.log('Closed')
    onClose()
  }

  return (
    <Box
      key={key}
      p="6"
      bgGradient="linear(to-tr, blue.200,blue.600)"
      // onClick={handleClickSection(key, value)}
    >
      <OutModal
        modalTitle="Confirmación"
        onClose={onCloseCustom}
        isOpen={isOpen}
        onOrder={handleOrderConfirmed}
      />
      <Grid
        h="80px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={1}
      >
        <GridItem rowSpan={1} colSpan={3} bg="tomato">
          <Text p={2} fontSize="xl">
            {elem.name}
          </Text>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <Text p={2} fontSize="xl">
            {elem.prize}€
          </Text>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          <Button
            leftIcon={<BellIcon />}
            colorScheme="blue"
            variant="outline"
            size="sm"
            onClick={handleOrder}
          >
            Pídelo ya
          </Button>
        </GridItem>
        <GridItem colSpan={1} bg="tomato">
          <Center>
            <IconButton
              colorScheme=""
              aria-label="Mas"
              size="sm"
              isRound
              icon={<ChevronUpIcon />}
              onClick={updateTotal(1)}
            />
          </Center>
        </GridItem>
        <GridItem colSpan={1} bg="tomato">
          <Center>{total}</Center>
        </GridItem>
        <GridItem colSpan={1} bg="tomato">
          <Center>
            <IconButton
              colorScheme=""
              aria-label="Menos"
              size="sm"
              isRound
              icon={<ChevronDownIcon />}
              onClick={updateTotal(-1)}
            />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  )
}

const FinalSections = ({ sections }) => {
  return sections.map((elem, idx) => <FinalSection elem={elem} key={idx} />)
}

export const Main = (props) => {
  const [sections, setSections] = useState(menu)
  const [finalSection, setFinalSection] = useState(false)
  const handleClickSection = (key, value) => () => {
    if (Array.isArray(value)) setFinalSection(true)
    setSections(value)
  }

  const handleReturn = () => {
    setFinalSection(false)
    setSections(menu)
  }

  return (
    <VStack mt={2} mb={2} spacing={0} align="stretch">
      {!finalSection
        ? Object.entries(sections).map(([key, value]) => (
            <Box
              key={key}
              h="20%"
              p="6"
              bgGradient="linear(to-tr, blue.200,blue.600)"
              onClick={handleClickSection(key, value)}
            >
              <Text fontSize="2xl">{key}</Text>
            </Box>
        ))
        : Array.isArray(sections) && <FinalSections sections={sections} />}
      <Box
        as="button"
        h="50px"
        p="2"
        bgGradient="linear(to-b,green.400,green.300,green.100)"
        onClick={handleReturn}
      >
        <Center>
          <Text fontSize="2xl">Volver</Text>
        </Center>
      </Box>
    </VStack>
  )
}
