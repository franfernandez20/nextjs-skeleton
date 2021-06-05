import { useContext, useState } from 'react'
import { store } from 'hooks/store'

import { Sections } from '@components/Sections'

import { Box, Center, Text } from '@chakra-ui/react'

export function MenuComponent ({ menu }) {
  console.log('menu', menu)
  const globalState = useContext(store)
  const { state } = globalState
  const [menuSections, setMenuSections] = useState(menu)
  const [selectedSection, setSelectedSection] = useState([])

  // TODO **Improve**
  const handleClickSection = (key, value) => () => {
    console.log('key', key)

    // if (Array.isArray(value)) setFinalSection(true)
    let subSections = []
    switch (true) {
      case [...selectedSection, key].length === 1: {
        subSections = menu[key]
        break
      }
      case [...selectedSection, key].length === 2:
        subSections = menu[selectedSection[0]][key]
        break
      case [...selectedSection, key].length === 3:
        subSections = menu[selectedSection[0]][selectedSection[1]][key]
        break
      case [...selectedSection, key].length === 4:
        subSections =
          menu[selectedSection[0]][selectedSection[1]][selectedSection[2]][key]
        break

      default:
        break
    }
    setSelectedSection((prevSelectedSection) => [...prevSelectedSection, key])
    setMenuSections(subSections)
  }

  // TODO **Improve**
  const handleReturn = () => {
    const newSelectedSection = [...selectedSection]
    console.log('newSelectedSection', newSelectedSection)
    newSelectedSection.pop()
    if (newSelectedSection.length === 0) setMenuSections(state.menu)
    if (newSelectedSection.length === 1) {
      setMenuSections(state.menu[newSelectedSection[0]])
    }
    if (newSelectedSection.length === 2) {
      setMenuSections(state.menu[newSelectedSection[0]][newSelectedSection[1]])
    }
    if (newSelectedSection.length === 3) {
      setMenuSections(
        state.menu[newSelectedSection[0]][newSelectedSection[1]][
          newSelectedSection[2]
        ]
      )
    }
    if (newSelectedSection.length === 4) {
      setMenuSections(
        state.menu[newSelectedSection[0]][newSelectedSection[1]][
          newSelectedSection[2]
        ][newSelectedSection[3]]
      )
    }

    setSelectedSection(newSelectedSection)
  }

  return (
    <>
      {menuSections && Object.keys(menuSections).length > 0 && (
        <Sections
          sections={menuSections}
          selectedSection={selectedSection}
          onClickSection={handleClickSection}
        />
      )}
      <Center>
        <Box
          as="button"
          h="40px"
          p="2"
          bgGradient="linear(to-b,green.400,green.300,green.100)"
          onClick={handleReturn}
        >
          <Text textStyle="h3">Volver</Text>
        </Box>
      </Center>
    </>
  )
}
