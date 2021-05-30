import { useState, useEffect } from 'react'
import {
  Grid,
  Box,
  Center,
  VStack,
  Text
} from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'

import ordersService from 'services/orders'

export const Orders = () => {
  const [orders, setOrders] = useState([])

  const getData = () => {
    ordersService.getAll().then((res) => setOrders(res))
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Grid templateColumns="repeat(4, 2fr)" gap={2} p={2}>
      {orders.map((order) => (
        <Box w="100%" h="20" bg="blue.500" key={order._id}>
          <>
            <VStack spacing={0} align="center">
              <Box>
                <Text fontSize="sm">Total: {order.total}</Text>
              </Box>
              {order.items.map((item) => (
                <Box key={item.name}>
                  <Text fontSize="xs" isTruncated>
                    {item.name}
                  </Text>
                </Box>
              ))}
            </VStack>
          </>
        </Box>
      ))}
      <Box as="button" w="100%" h="20" bg="green.500" onClick={getData}>
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
