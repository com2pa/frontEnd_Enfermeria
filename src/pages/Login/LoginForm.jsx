import { useState } from 'react'
import FormContainer from './From';
import { Button, ButtonGroup, Flex, FormControl, FormLabel, Heading } from '@chakra-ui/react';
// import { Navigate} from 'react-router';
import axios from 'axios';
import { Navigate } from 'react-router';




const LoginForm = ({handleShow}) => {
 
  
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const handleEmailInput=({target})=>{
    setEmail(target.value);
    // console.log(target.value)

  }
  const handlePassword=({target})=>{
    setPassword(target.value);
    // console.log(target.value)
  }
    
  
  const handleLogin = async (e)=>{
   e.preventDefault()
    try{
      const user ={
      user_id: 1,
      email: 'com2pa@gmail.com',
      password: 'Mer123..',
      }
    
      
      
      if(email === user.email){      
        console.log('Login correcto')
      }
      if(password === user.password){
        console.log('Login correcto')
      }else{
        console.log('Contraseña incorrecta')
      }

     
      // localStorage.setItem('user', JSON.stringify(user))
      // Navigate('/SiderbarWithHeader')

      await axios.post('/api/login',user);
      window.location.pathname =`/SidebarWithHeader/`
    }catch(error){
      console.log(error)      
      // Navigate.push('/register')
      
    }
    
    
  }


  return (
    <FormContainer>
      <Heading> Login</Heading>
      <FormControl isRequired>
        <Flex flexDir="column">
          <FormLabel> Correo </FormLabel>          
          <input onChange={handleEmailInput} type="email" value={email} placeholder="Correo" />
        </Flex>
        <Flex flexDir="column">
          <FormLabel> Contraseña</FormLabel>
          <input onChange={handlePassword} type="password" value={password} placeholder="Contraseña" />
          </Flex>
      </FormControl>
      <ButtonGroup mt='1rem'>
        <Button onClick={handleShow}  variant="ghost">Register</Button>
        <Button onClick={handleLogin} colorScheme="green" >Ingresar</Button>
      </ButtonGroup>
    </FormContainer>
  )
}
export default LoginForm;