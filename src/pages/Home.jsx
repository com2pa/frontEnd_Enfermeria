// import {Norsing} from '../assets/Enfermera.jpg'
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Card,  Flex, FormControl, FormLabel, Heading,    Image,    Input,   InputGroup,   InputLeftElement,    Select,   Text, Textarea, VStack,  } from "@chakra-ui/react";
import {  BsPerson } from "react-icons/bs";
import {  MdLocationOn, MdOutlineCalendarToday, MdOutlineEmail, MdPhone } from "react-icons/md";
import Enfermera from '../assets/Enfermera.jpg';
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";


export const Home = () => {
  return (
    
    
    <>
      <Menu/>
      {/* seccion 1 */}
      <Flex flexDir="row">
        <Box  h="83vh" >    
          <Flex >
            <Card  w="40%" h="83vh" textAlign="justify" justifyContent="center"padding="0 1rem " boxShadow='dark-lg'>
              <Flex flexDir="column" alignContent="center"  gap="3rem">
                <Text color="red.600" fontSize={45} fontWeight="600">
                Enfermería en Casa
                </Text>
                <Text fontSize={20}>
                ¡ Servicio de enfermeria en casa atencion post operatorio, cuidados al adulto mayor
                con profesionales entrenados, comprometidos con su salud  el bienes del paciente !
                </Text>
                
                <Text>
                ¿Necesitas ayuda? Contactanos al  <span> <PhoneIcon color="red.600"/>  01800-123-4567 </span>
                o al correo <EmailIcon color="red.600" /> Com2pa@gmail.com             
                </Text>            
              </Flex>
            </Card>
            <Box boxSize='60%'>
              <Image src={Enfermera} alt="cerrar-equipo-listo-trabajar" h="100vh" w="100%"  />
            </Box>
          </Flex>
        </Box>
      
      </Flex>
      {/* seccion 2 */}
      <Box h="100vh" mt={5} >
        <Flex gap="1rem"  >
          <Card bg="red.600"  w="50%" h="100vh" border="1px solid red.100">
            {/* <calendary/> */}
          </Card>
          <Card  w="50%" h="100vh" border="1px solid red.100" display="flex" justifyContent="center" alignItems="center">
            <Heading color="red.600" fontSize={50} display="flex" mb={2} justifyContent="center"  >¡ Pide tu cita aqui !</Heading>
            <Text fontSize={29} mt={5}> has click aqui para ir a solicitar tu cita ! </Text>
            <Button 
              mt={10} 
              bg="red.600" 
              color="white" 
              fontSize={30} 
              p={30}  
              boxShadow='dark-lg'
              href="/contact" 
              target="_blank"> oprimas aqui !</Button>
            
          </Card>
        </Flex>
      </Box>
      {/* seccion 3 */}

      <Footer/>
    </>
    
    
  );
};

export default Home;