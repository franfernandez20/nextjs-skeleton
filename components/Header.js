import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import {
  Grid,
  GridItem,
  Text,
  Avatar,
  Box,
  Button,
  ButtonGroup
} from '@chakra-ui/react'

export default function Header () {
  const [session, loading] = useSession()

  return (
    <header>
      <Grid
        // h="60px"
        flexDirection="row"
        position="fixed"
        width="100%"
        maxWidth="48rem"
        top="0"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={0}
      >
        <GridItem rowSpan={2} colSpan={4} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato">
          {session && (
            <>
              {session.user.image && (
                <Avatar
                  size="sm"
                  name={session.user.name}
                  src={session.user.image}
                />
              )}
            </>
          )}
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          {session
            ? (
            <Button
              href={'/api/auth/signout'}
              colorScheme="gray"
              size="sm"
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}
            >
              Sign out
            </Button>
              )
            : (
            <>
              <Button
                colorScheme="blue"
                size="sm"
                href={'/api/auth/signin'}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </Button>
            </>
              )}
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg="tomato">
          {session && (
            <Text fontSize="sm" isTruncated>
              {session.user.name}
            </Text>
          )}
        </GridItem>
      </Grid>
    </header>
  )
}
