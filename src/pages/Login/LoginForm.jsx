import React from 'react'
import FormContainer from './From';
import { Button, ButtonGroup, Flex, FormControl, FormLabel, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export const LoginForm = () => {
  return (
    <FormContainer>
      <Heading> Login</Heading>
      <FormControl>
        <Flex flexDir="column">
          <FormLabel> Nombre </FormLabel>
          <input type="text" placeholder="Nombre"  />
        </Flex>
        <Flex flexDir="column">
          <FormLabel> Contraseña</FormLabel>
          <input type="password" placeholder="Contraseña" />
          </Flex>
      </FormControl>
      <ButtonGroup mt='1rem'>
        <Button  bg="blue.300" ><Link  href='/register'>Register</Link></Button>
        <Button bg="green"  ><Link  href='/sesion'>Sesion</Link></Button>
      </ButtonGroup>
    </FormContainer>
  )
}
export default LoginForm;