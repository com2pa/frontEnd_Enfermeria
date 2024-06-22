import { Button, FormControl, FormLabel, Heading} from '@chakra-ui/react';
import React from 'react'
import FormContainer from './From';
// import FormContainer from "./Form";


export const RegisterForm = () => {
  return (
   
    <FormContainer>
      <Heading>Register</Heading>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <input type="text" placeholder="Nombre" /> 
        <FormLabel>Email</FormLabel>   
        <input type="email" placeholder="Correo" />
        <FormLabel>Contraseña</FormLabel>
        <input type="password" placeholder="Contraseña" />
        {/* <input type="password" placeholder="Confirmar contraseña" /> */}
        
      </FormControl>
      <Button bg="green">Register</Button>
      
    </FormContainer>
  
  
  )
}

export default RegisterForm;