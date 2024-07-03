import { useState,useEffect } from 'react'
import FormContainer from './From';
import { Button, ButtonGroup, Flex, FormControl, FormLabel, Heading,Input, Toast } from '@chakra-ui/react';
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

  const [isLoginValid, setIsLoginValid] = useState(false);
  
  const handleEmailInput=({target})=>{
    setEmail(target.value);
    // console.log(target.value)

  }
  const handlePassword=({target})=>{
    setPassword(target.value);
    // console.log(target.value)
  }
  useEffect(()=>{
    setEmailValidation(REGEX_EMAIL.test(email))
  },[email]);

  useEffect(()=>{
    setPasswordValidation(REGEX_PASS.test(password))
  },[password]);

  useEffect(() => {
    setIsLoginValid(emailValidation && passwordValidation);
  }, [emailValidation, passwordValidation]);

  
  const handleLogin = async (e)=>{
   e.preventDefault()
    try{
      const user ={
      user_id: 1,
      email,
      password,
      }
    
      
      
      // if(email === user.email){      
      //   console.log('Login correcto')
      // }
      // if(password === user.password){
      //   console.log('Login correcto')
      // }else{
      //   console.log('Contraseña incorrecta')
      // }
      const response = await axios.post('/api/login',user);


      if (response.data) {
        console.log('Login correcto');
        Toast({
          position:'top',
          title: 'Success',
          description: 'ingresando',          
          status:'success',
          duration: 4000,
          
        });
        // window.location.pathname = `/SidebarWithHeader/`;
      } else {
        console.log('Correo o contraseña incorrectos');
        Toast({
          position:'top',
          title: 'Error',
          status: 'error',
          description:"hubo un error en el email o contraseña",
          // description: error.response.data.error,
          duration: 9000,
          
        })
      }

      
      // window.location.pathname =`/SidebarWithHeader/`
    }catch(error){
      console.log(error)      
   
      
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
        <Button onClick={handleLogin} colorScheme="green" isDisabled={!isLoginValid}  >Ingresar</Button>
      </ButtonGroup>
    </FormContainer>
  )
}
export default LoginForm;