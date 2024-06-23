
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Home = () => {
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      overflow='hidden'
      variant='outline'
      
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md' textAlign="center" fontSize="3rem">En tu hogar</Heading>

          <Text py='2' textAlign="justify">
            ¡ Servicio de enfermeria en casa atencion post operatorio, cuidados al adulto mayor
            con profesionales entrenados, comprometidos con su salud  el bienes del paciente !
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue' justifyContent="center">
            ¡ Saber más!
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default Home;