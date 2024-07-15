// import {Norsing} from '../assets/Enfermera.jpg'
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Card,  Flex, FormControl, FormLabel, Heading,    Image,    Input,   InputGroup,   InputLeftElement,    Select,   Text, Textarea, VStack,  } from "@chakra-ui/react";
import {  BsPerson } from "react-icons/bs";
import {  MdLocationOn, MdOutlineCalendarToday, MdOutlineEmail, MdPhone } from "react-icons/md";
import Enfermera from '../assets/Enfermera.jpg'


export const Home = () => {
  return (
    
    
    <>
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
              <Button bgColor="red.600">
                Inicia tu cita
              </Button>
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
    <Flex gap="1rem" >
      <Card bg="red.600"  w="50%" h="100vh" border="1px solid red.100">
      {/* <calendary/> */}
      </Card>
      <Card bg="red.600" w="50%" h="100vh" border="1px solid red.100" display="flex" justifyContent="center" alignItems="center">
        <Heading color="white" display="flex" mb={2} justifyContent="center" >¡ Pide tu cita aqui !</Heading>
      <Box bg="white"  borderRadius="lg" w="80%" display="flex"   >
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <Flex gap={2}>
                        <FormControl id="name">
                          <FormLabel>Nombre y Apellido</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="sm" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Correo</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="sm" />
                          </InputGroup>
                        </FormControl>
                      </Flex>
                      <Flex gap={2}>
                        <FormControl >
                          <FormLabel>Telefono</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdPhone color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="sm" />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Edad</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="sm" />
                          </InputGroup>
                        </FormControl>

                      </Flex>
                      <FormControl>
                        <FormLabel>Domicilio</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdLocationOn color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="sm" />
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Servicio a requerir</FormLabel>
                        <InputGroup borderColor="#E0E1E7" size="sm">
                            <Select placeholder='   Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                          </Select>
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel>¿Qué dia deseas realizar?</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineCalendarToday color="gray.800" />
                          </InputLeftElement>
                          <Input type="date" size="sm" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Describa lo que presenta </FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="ejemplo presento ....."
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                          Enviar
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
      </Card>
    </Flex>
  </Box>
  {/* seccion 3 */}

  </>
    
    
  )
}

export default Home;