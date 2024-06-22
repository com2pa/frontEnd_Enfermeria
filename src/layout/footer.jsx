import { Card, CardFooter } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Card pos="relative" w="100%" h="5rem" bottom="0" left="0" bg="red">
      <CardFooter justifyContent="center">
        <h1>Footer</h1>
      </CardFooter>
    </Card>
  )
}


export default Footer