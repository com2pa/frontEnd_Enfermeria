import {Box, Card, Flex, Heading, Image, ListItem, OrderedList, Text } from '@chakra-ui/react';
import Menu from '../layout/Menu';
import Servicio from '../assets/servicio.jpg';
import Signos from '../assets/signos-vitales.jpg';
import Sig from '../assets/signos.jpg';
import Plan from '../assets/plan.png';
import Footer from '../layout/Footer';
export const Services = () => {
  return (
    <>
      <Flex flexDir={"column"} gap={8} p={8} maxW="90rem" mx="auto">
        <Menu/>   
        <Card h="20vh" bg="red.600" display="flex" alignItems={{base:'center',md:'center'}} textAlign={{base:'center',md:'center'}} justifyContent={{base:'center',md:'center'}}>
          <Heading color="white" fontSize={{base:'20',sm:'25',md:'25',lg:'25',xl:'45'}} > Servicios de Enfermeria at Home</Heading>
        </Card>
        <Flex gap={4} flexDir={{ base: 'column', md: 'row', }}>
          <Card variant="outline" w="100%" justifyContent={{lg:'center'}} >
            <Flex flexDir="column" p={4}  gap="3rem">
              <Text color="red.600"   fontWeight="600" fontSize={{ base: 25, md: 25,lg:25,xl:45,}}textAlign={{base:'center', md:'center',lg:'center'}} >
                Nuestros Servicios de Enfermería
              </Text>
              <Text fontSize={{ base: 15, md: 15 ,lg:15,xl:30}}textAlign={{base:'justify', md:'justify',lg:'justify',xl:'justify'}}>
              Nuestro Servicio de Enfermería a domicilio está formado por profesionales 
              capacitados para asistir pacientes en su proceso de sanación del dolor y la enfermedad.
              </Text> 
            </Flex>
          </Card>
          <Card variant="outline" width="100%" height="30rem" display={{base: 'none', md: 'block'}}>
            <Image src={Servicio} alt="cerrar-equipo-listo-trabajar" height="100%" objectFit="cover" w="100%"  />
          </Card>
        </Flex>
        <Box>
          <Flex gap={4} flexDir={{ base: 'column', md: 'row', }} justifyContent={{lg:'center'}}>
            <Card variant="outline" w="100%" >
              <Flex flexDir="column" p={4}  gap="3rem">
                <Text color="red.600" fontSize={{ base: 20, md: 20,lg:25,xl:45}}textAlign={{base:'center', md:'center',lg:'center',xl:45}} fontWeight="600">
                  ¿En qué casos son necesarios nuestros servicios?
                </Text>
                <Text fontSize={{ base: 15, md: 15 ,lg:15,xl:30}} textAlign={{base:'justify', md:'justify',lg:'justify',xl:'justify'}}>                
                  <OrderedList>
                    <ListItem>Patologías agudas o crónicas que ameriten cuidados de enfermería continúo, 
                    para cumplimiento de tratamiento endovenoso o hidratación con la supervisión 
                    constante de signos vitales y estado general del paciente.</ListItem>
                    <ListItem>Realización de curas complicadas como consecuencia de</ListItem>
                    <ListItem>Cuidados paliativos en caso de pacientes terminales.</ListItem>
                    <ListItem>Cuidados y apoyo post-parto.</ListItem>

                  </OrderedList>
               
                
                </Text> 
              </Flex>
            </Card>
            <Card variant="outline" width="100%" height="auto" display={{base: 'none', md: 'block',lg:'block'}}>
              <Image src={Sig} alt="cerrar-equipo-listo-trabajar" height="100%" objectFit="cover" w="100%"  />
            </Card>          
          </Flex>
        </Box>
        <Box>
          <Flex gap={4} flexDir={{ base: 'column', md: 'row', }} >
            <Card variant="outline" w="100%" justifyContent={{lg:'center'}}>
              <Flex flexDir="column" p={4}  gap="3rem">
                <Text color="red.600" fontSize={{base: 20, md: 20,lg:25,xl:45}}textAlign={{base:'center', md:'center',lg:'center',xl:'center'}} fontWeight="600">
                  Igualmente prestamos los siguientes servicios:
                </Text>
                <Text fontSize={{ base: 15, md: 15 ,lg:15,xl:30}} textAlign={{base:'justify', md:'justify',lg:'justify',xl:'justify'}}>                
                  <OrderedList>
                    <ListItem>Toma de muestras de sangre para laboratorio.</ListItem>
                    <ListItem>Toma de vías y aplicación de tratamiento endovenoso según horario indicado por médico tratante.</ListItem>
                  </OrderedList>  
                </Text> 
              </Flex>
            </Card>
            <Card variant="outline" width="100%" height="30rem" display={{base: 'none', md: 'block'}}>
              <Image src={Signos} alt="cerrar-equipo-listo-trabajar" height="100%" objectFit="cover" w="100%"  />
            </Card>          
          </Flex>
        </Box>
        <Box>
          <Flex gap={4} flexDir={{ base: 'column', md: 'row', }}>
            <Card variant="outline" w="100%"  justifyContent={{lg:'center'}}>
              <Flex flexDir="column" p={4}  gap="3rem">
                <Text color="red.600" fontSize={{base: 20, md: 20,lg:25,xl:45}}textAlign={{base:'center', md:'center',lg:'center',xl:'center'}} fontWeight="600">
                  Para cada Paciente
                </Text>
                <Text fontSize={{ base: 15, md: 15 ,lg:15,xl:30}} textAlign={{base:'justify', md:'justify',lg:'justify',xl:'justify'}}>                
                Diseñamos un Plan de Atención de Enfermería de acuerdo a sus necesidades procurando siempre 
                el Bienestar integral.
                Con este fin ofrecemos una Visita de Primer Contacto que 
                nos permitirá evaluar integralmente al paciente y su entorno, 
                con el objeto de realizar un diagnóstico exhaustivo y planificar el servicio requerido.
                </Text> 
              </Flex>
            </Card>
            <Card variant="outline" width="100%" height="30rem" display={{base: 'none', md: 'block'}}>
              <Image src={Plan} alt="cerrar-equipo-listo-trabajar" height="100%" objectFit="cover" w="100%"  />
            </Card>          
          </Flex>
        </Box>
        <Footer/>

      </Flex>
    </>


  );
};
export default Services;

