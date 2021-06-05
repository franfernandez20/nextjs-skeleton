import { VStack, Text, Box } from '@chakra-ui/react'
import { FinalSection } from 'components/FinalSection'

const FinalSections = ({ sections, sectionKey }) => {
  return sections.map((elem, idx) => (
    <FinalSection elem={elem} key={idx} sectionKey={sectionKey} />
  ))
}

const Section = ({ sectionKey, value, onClickSection }) => (
  <Box
    h="20%"
    p="6"
    bgGradient="linear(to-tr, blue.200,blue.600)"
    onClick={onClickSection(sectionKey, value)}
  >
    <Text textStyle="h2_sec">{sectionKey}</Text>
  </Box>
)

export const Sections = ({ sections, selectedSection, onClickSection }) => (
  <VStack mt={2} mb={0} spacing={0} align="stretch">
    {sections && !Array.isArray(sections) && Object.keys(sections).length > 0
      ? Object.entries(sections).map(([key, value]) => (
          <Section
            key={key}
            sectionKey={key}
            value={value}
            onClickSection={onClickSection}
          />
      ))
      : Array.isArray(sections) && (
          <FinalSections
            sections={sections}
            sectionKey={selectedSection[selectedSection.length - 1]}
          />
      )}
  </VStack>
)
