
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

export const CustomModal = ({ modalTitle, isOpen, onOrder, onClose }) => {
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
