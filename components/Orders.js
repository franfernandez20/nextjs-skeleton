import { useState, useEffect, useContext } from 'react'
import { store } from 'hooks/store'
import { Grid, Box, Center, VStack, Text, Button } from '@chakra-ui/react'
import { RepeatIcon, DeleteIcon } from '@chakra-ui/icons'

import ordersService from 'services/orders'

export const Orders = () => {
  const globalState = useContext(store)
  const { state, dispatch } = globalState
  const { order } = state
  // const [orders, setOrders] = useState([])

  // const getData = () => {
  //   ordersService.getAll().then((res) => setOrders(res));
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const deleteElem = (elem) => () => {
    const value = { ...elem, total: 0 }
    dispatch({ type: 'update-menu-section', value })
    dispatch({ type: 'delete-order', value: elem.id })
  }

  return (
    <Grid templateColumns="repeat(4, 2fr)" gap={2} p={2}>
      {order.map((elem) => (
        <Box w="100%" h="20" bg="blue.500" key={elem.id}>
          <>
            <VStack spacing={1} align="center">
              <Box>
                <Text fontSize="sm">Total: {elem.total}</Text>
              </Box>

              <Box>
                <Text fontSize="xs" isTruncated>
                  {elem.name}
                </Text>
              </Box>
              <Button
                size="xs"
                leftIcon={<DeleteIcon />}
                colorScheme="red"
                variant="solid"
                onClick={deleteElem(elem)}
              >
                Quitar
              </Button>
            </VStack>
          </>
        </Box>
      ))}
      <Box as="button" w="100%" h="20" bg="green.500">
        <Center>
          <RepeatIcon w={16} h={16} color="Highlight" />
        </Center>
      </Box>
    </Grid>
  )
}

Orders.defaultProps = {
  title: 'Chakra UI pruebas'
}
