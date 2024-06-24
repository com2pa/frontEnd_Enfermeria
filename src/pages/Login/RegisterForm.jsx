import { Box, Button, ButtonGroup, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, useToast} from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import FormContainer from './From';
import { baseUrl } from '../../config/url';
import axios from 'axios';


// regex
const REGEX_EMAIL=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const REGEX_NAME = /^[A-Z][a-z]*[ ][A-Z][a-z]*$/;
const REGEX_NUMBER = /^[0](212|412|414|424|416|426)[0-9]{7}$/;
const REGEX_PASS =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{8,15}$/;

export const RegisterForm = ({handleShow}) => {
  const[name,setName]=useState('');
  const[nameValidation, setNameValidation]=useState(false);

  const[email,setEmail]=useState('');
  const[emailValidation, setEmailValidation]=useState(false);

  const[password,setPassword]=useState('');
  const[passwordValidation, setPasswordValidation]=useState(false);
  

  const[phone,setPhone]=useState('');
  const[phoneValidation, setPhoneValidation]=useState(false);

  const toast = useToast();

  const handleNameInput = ({target})=>{
    setName(target.value);
  }
  const handleEmailInput = ({target})=>{
    setEmail(target.value);
  }
  const handlePasswordInput = ({target})=>{
    setPassword(target.value);
  }
  const handlePhoneInput = ({target})=>{
    setPhone(target.value);
  }

  const handleNewUser = async ()=>{
    try {
      const{data} = await axios.post(`${baseUrl}/api/users`);
      toast({
        position:'top',
        title: 'Success',
        description: data.message,
        status:'Correcto',
        // duration: 9000,
        // isClosable: true,
      });
      handleShow();
    } catch (error) {
      toast({
        position:'top',
        title: 'Error',
        description: error.response.data.error,
        status: 'Hubo un error verique sus datos !',
        // duration: 9000,
        // isClosable: true,
      })
      console.log(error);
    }
  }


  useEffect(()=>{
    setNameValidation(REGEX_NAME.test(name))
  },[name]);

  useEffect(()=>{
    setEmailValidation(REGEX_EMAIL.test(email))
  },[email]);

  useEffect(()=>{
    setPasswordValidation(REGEX_PASS.test(password))
  },[password]);

  useEffect(()=>{
    setPhoneValidation(REGEX_NUMBER.test(phone))
  },[phone]);


  return (
   
    <FormContainer>
      <Heading>Register</Heading>
      <FormControl w="100%">
        
          <Flex marginBottom="1rem">
            <FormLabel>Nombre</FormLabel>
            <input onChange={handleNameInput} type="text" placeholder="Nombre Apellido" value={name}  />
          </Flex> 

        
          {nameValidation  ? ''
            
          : ( 
            <FormHelperText color='red' border='0.5px solid red' margin='0.5rem' padding='1rem'>
                <p> Debe comenzar con mayuscula tanto el nombre como apellido</p>
                <p>1.- Primer caracter en Mayuscula del nombre seguido el resto del nombre en minuscula</p>
                <p>2.- Primer caracter en Mayuscula deL apellido seguido el resto del nombre en minuscula
                Merwil Vegas</p>
            </FormHelperText>
            // <FormErrorMessage>
            //     Tu nombre no es valido
            // </FormErrorMessage>
          )}

        <Flex marginBottom="1rem">
          <FormLabel>Email</FormLabel>   
          <input onChange={handleEmailInput}  type="email" placeholder="Correo"  value={email} />
        </Flex> 
        {emailValidation ?''
         
        : (
          <FormHelperText color='red' border='0.5px solid red' margin='0.5rem' padding='1rem'>
            Debe ser un correo valido
          </FormHelperText>
          // <FormErrorMessage>
          //   Tu correo no es valido
          // </FormErrorMessage>
        )
        }
        <Flex marginBottom="1rem">
          <FormLabel>Telefono</FormLabel>
          <input onChange={handlePhoneInput} type="text" placeholder="Telefono" value={phone}  />
        </Flex>
        {phoneValidation ?''
          
        :(
          <FormHelperText  color='red' border='0.5px solid red' margin='0.5rem' padding='1rem'>
            Debe ser un numero de telefono valido
            <p>1-. Debe comenzar con 0</p>
            <p>2.- seguido 212  o 412 o 414 o 416 424  o 426</p>
          </FormHelperText>
          // <FormErrorMessage>
          //   Tu numero de telefono no es valido
          // </FormErrorMessage>
        )

        }
        <Flex marginBottom="1rem">
          <FormLabel>Contraseña</FormLabel>
          <input onChange={handlePasswordInput}  type="password" placeholder="Contraseña"  />
        </Flex>
        { passwordValidation ? ''

          

          :(
            <FormHelperText color='red' border='0.5px solid red' margin='0.5rem' padding='1rem'>
            <p>Debe contener al menos una mayuscula, una minuscula, un numero y un caracter especial </p> 
            <p>1.- Contiene al menos una letra mayúscula ([A-Z]). </p>
            <p>2.- Contiene al menos una letra minúscula ([a-z]). </p>
            <p>3.- Contiene al menos un dígito . </p>
            <p>4.- No tiene espacios en blanco. </p>
            <p>5.- Contiene al menos un carácter especial que no sea letra ni dígito . </p>
            <p>6.- Tiene una longitud total entre 8 y 15 caracteres. </p>
          </FormHelperText>
            // <FormErrorMessage>
            //   Tu contraseña no es valida
            // </FormErrorMessage>

          )
        }
        {/* <input type="password" placeholder="Confirmar contraseña" /> */}
        
      </FormControl>
      <ButtonGroup>
        <Button onClick={handleShow} variant="ghost"> Ingresar</Button>
        <Button colorScheme="green" onClick={handleNewUser}>Register</Button>
      </ButtonGroup>

    </FormContainer>
  
  
  )
}

export default RegisterForm;