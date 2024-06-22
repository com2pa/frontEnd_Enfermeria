import { Button, ButtonGroup, FormControl, FormLabel, Heading, useToast} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
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
      const{data} = await axios.post(`${baseUrl}/api/users`,{name:name});
      toast({
        position:'top',
        title: 'Success',
        description: data.message,
        status:'success',
        duration: 9000,
        isClosable: true,
      });
      handleShow();
    } catch (error) {
      toast({
        position:'top',
        title: 'Error',
        description: error.response.data.error,
        status: 'error',
        duration: 9000,
        isClosable: true,
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
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <input onChange={handleNameInput} type="text" placeholder="Nombre" /> 
        <FormLabel>Email</FormLabel>   
        <input onChange={handleEmailInput} type="email" placeholder="Correo" />
        <FormLabel>Telefono</FormLabel>
        <input onChange={handlePhoneInput} type="text" placeholder="Telefono" />
        <FormLabel>Contraseña</FormLabel>
        <input onChange={handlePasswordInput} type="password" placeholder="Contraseña" />
        {/* <input type="password" placeholder="Confirmar contraseña" /> */}
        
      </FormControl>
      <ButtonGroup>
        <Button bg="green" onClick={handleNewUser}>Register</Button>
        <Button onClick={handleShow} variant="ghost"> Ingresar</Button>
      </ButtonGroup>

    </FormContainer>
  
  
  )
}

export default RegisterForm;