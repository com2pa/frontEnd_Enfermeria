// import {Norsing} from '../assets/Enfermera.jpg'
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Card,  Flex,  Heading,    Image,    Text,  } from "@chakra-ui/react";
import Enfermera from '../assets/Enfermera.jpg';
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import Calendary  from "./Calendary";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();
  const navToPage=(url)=>{
    navigate(url);
  };
  
  return (
    
    
    <>
      <Flex flexDir="column" gap={8} p={8} maxW="90rem" mx="auto">
        <Menu />
        {/* seccion 1 */}
        <Flex gap={4} flexDir={{ base: 'column', md: 'row', }}>
          <Card variant="outline" w="100%" textAlign="justify" justifyContent="center">
            <Flex flexDir="column" alignContent="center"p={4}  gap="3rem">
              <Text color="red.600" fontSize={{ base: 25, md: 45}} fontWeight="600">
                Enfermería en Casa
              </Text>
              <Text fontSize={{ base: 15, md: 20 }}>
                ¡ Servicio de enfermeria en casa atencion post operatorio, cuidados al adulto mayor
                con profesionales entrenados, comprometidos con su salud  el bienes del paciente !
              </Text>
                
              <Text  fontSize={{ base: 15, md: 20 }}>
                ¿Necesitas ayuda? Contactanos al  <span> <PhoneIcon color="red.600"/>  01800-123-4567 </span>
                o al correo <EmailIcon color="red.600" /> Com2pa@gmail.com             
              </Text>            
            </Flex>
          </Card>
          <Card variant="outline" width="100%" height="30rem" display={{base: 'none', md: 'block'}}>
            <Image src={Enfermera} alt="cerrar-equipo-listo-trabajar" height="100%" objectFit="cover" w="100%"  />
          </Card>
        </Flex>
        {/* seccion 2 */}
        <Box >
          <Flex gap="1rem" flexDir={{base: 'column', md: 'row'}}  >
            <Flex flexDir={{ base: "column", md: 'row'}}  w="100%" gap={4} align="center">
              <Card p={4} display="flex" variant="outline" w="100%" height="100%" flexDir="column" gap={4} justifyContent="center">
                <Heading>Nuestras citas activas</Heading>
                <Button 
                  bg="red.600" 
                  color="white"
                  size={{ base: 'md', md: 'lg' }}
                  boxShadow='dark-lg'
                  href="/contact" 
                  target="_blank"
                  onClick={()=>navToPage('/Contact')}
                > Pide tu cita!</Button>
              </Card>
              <Card display="flex" variant="outline" p={4} align="center" w="100%" justifyContent="center">
                <Calendary/>
              </Card>
            </Flex>
          </Flex>
        </Box>
        <Footer />
      </Flex>
    </>
    
    
  );
};

export default Home;