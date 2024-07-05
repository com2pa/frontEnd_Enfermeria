import { useState,useEffect } from 'react'
import FormContainer from './From';
import { Button, ButtonGroup, Flex, FormControl, FormLabel, Heading,Input, useToast } from '@chakra-ui/react';
// import { Navigate} from 'react-router';
import axios from 'axios';

const REGEX_EMAIL=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const REGEX_PASS =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{8,15}$/;

const LoginForm = ({handleShow}) => {
  // const[email,setEmail]=useState('');
  // const[emailValidation, setEmailValidation]=useState(false);

  // const[password,setPassword]=useState('');
  // const[passwordValidation, setPasswordValidation]=useState(false);
  
  const[email, setEmail] = useState('');
  const[emailValidation,setEmailValidation]= useState(true)

  const[password, setPassword] = useState('');
  const[passwordValidation,setPasswordValidation] = useState(true)

  const [isLoginValid, setIsLoginValid] = useState(true);
  
  const handleEmailInput=({target})=>{
    setEmail(target.value);
    // console.log(target.value)

  }
  const toast = useToast();
  const handlePassword=({target})=>{
    setPassword(target.value);
    // console.log(target.value)
  }

  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setEmailValidation(REGEX_EMAIL.test(email))
  },[email]);

  useEffect(()=>{
    setPasswordValidation(REGEX_PASS.test(password))
  },[password]);

  useEffect(() => {
    setIsLoginValid(emailValidation && passwordValidation);
    
  }, [emailValidation, passwordValidation]);

  useEffect(() => {
    if (isLoginValid) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isLoginValid]);

  const handleLogin = async (e)=>{
   e.preventDefault()
   


   
    try{
      const user ={
      user_id: 1,
      email,
      password,
      }
      const response = await axios.post('/api/login',user);
      setIsLoading(false)
     
      if (response.data) {
        // console.log('Login correcto');
        toast({
          title: 'Login correcto',
          description: response.data.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        // window.location.pathname = `/SidebarWithHeader/`;
      } else {
        // console.log('Correo o contraseña incorrectos');
        toast({
          title: 'Error de inicio de sesión',
          description: response.data.messege,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        
      }

      
      // window.location.pathname =`/SidebarWithHeader/`
    }catch(error){
      setIsLoading(false);
      console.log(error)      
      toast({
        title: 'datos de ingresados',
        description: error.response.data.error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      
    }
    
    
  }


  return (
    <FormContainer>
      <Heading> Login</Heading>
      <FormControl isRequired>
        <FormControl>
          <Flex flexDir="column">
            <FormLabel> Correo </FormLabel>          
            <Input onChange={handleEmailInput} type="email" value={email} placeholder="Correo" />
          </Flex>
        </FormControl>
        <FormControl>
          <Flex flexDir="column">
            <FormLabel> Contraseña</FormLabel>
            <Input onChange={handlePassword} type="password" value={password} placeholder="Contraseña" />
            </Flex>
        </FormControl>

        </FormControl>
      <ButtonGroup mt='1rem'>
        <Button onClick={handleShow}  variant="ghost">Register</Button>
        <Button onClick={handleLogin }colorScheme="green" isDisabled={!isLoginValid} isLoading={!isLoading}     >Ingresar</Button>
      </ButtonGroup>
        
    </FormContainer>
    
  )
}
export default LoginForm;