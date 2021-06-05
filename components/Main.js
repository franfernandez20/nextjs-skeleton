import { useRef, useState, useEffect, useContext } from 'react'
import { store } from 'hooks/store'

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
import { FinalSection } from 'components/FinalSection'
import orderService from 'services/orders'

const FinalSections = ({ sections, sectionKey }) => {
  console.log('sections', sections)
  return sections.map((elem, idx) => (
    <FinalSection elem={elem} key={idx} sectionKey={sectionKey} />
  ))
}

export const Main = ({ onUpdateSections }) => {
  const globalState = useContext(store)
  const { state, dispatch } = globalState
  const { menu } = state
  const [sections, setSections] = useState(state.menu)
  const [sectionKeys, setSectionKeys] = useState([])
  const [finalSection, setFinalSection] = useState(false)

  const handleClickSection = (key, value) => () => {
    console.log('key', key)

    if (Array.isArray(value)) setFinalSection(true)
    let subSections = []
    switch (true) {
      case [...sectionKeys, key].length === 1: {
        subSections = menu[key]
        break
      }
      case [...sectionKeys, key].length === 2:
        subSections = menu[sectionKeys[0]][key]
        break
      case [...sectionKeys, key].length === 3:
        subSections = menu[sectionKeys[0]][sectionKeys[1]][key]
        break
      case [...sectionKeys, key].length === 4:
        subSections = menu[sectionKeys[0]][sectionKeys[1]][sectionKeys[2]][key]
        break

      default:
        break
    }
    setSectionKeys((prevSectionKeys) => [...prevSectionKeys, key])
    setSections(subSections)
  }

  console.log('---', state)

  const handleReturn = () => {
    setFinalSection(false)
    setSectionKeys([])
    setSections(menu)
  }

  return (
    <VStack mt={2} mb={2} spacing={0} align="stretch">
      {!finalSection && Object.keys(sections).length > 0
        ? Object.entries(sections).map(([key, value]) => (
            <Box
              key={key}
              h="20%"
              p="6"
              bgGradient="linear(to-tr, blue.200,blue.600)"
              onClick={handleClickSection(key, value)}
            >
              <Text textStyle="h2_sec">{key}</Text>
            </Box>
        ))
        : Array.isArray(sections) && (
            <FinalSections
              sections={sections}
              sectionKey={sectionKeys[sectionKeys.length - 1]}
            />
        )}
      <Box
        as="button"
        h="50px"
        p="2"
        bgGradient="linear(to-b,green.400,green.300,green.100)"
        onClick={handleReturn}
      >
        <Center>
          <Text textStyle="h3">Volver</Text>
        </Center>
      </Box>
    </VStack>
  )
}
