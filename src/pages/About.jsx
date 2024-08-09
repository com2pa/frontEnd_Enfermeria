import React from 'react';
import Menu from '../layout/Menu';
import {Card, Flex, Image, Text } from '@chakra-ui/react';
import Enfermera from '../assets/Enfermera.jpg';
import Footer from '../layout/Footer';
export const About = () => {
  return (
    <>
      <Flex flexDir="column" gap={8} p={8} maxW="90rem" mx="auto">
        <Menu/>
        <Flex gap={4} flexDir={{ base: 'column', md: 'row', }}>
          <Card variant="outline" w="100%" textAlign="justify" justifyContent="center">
            <Flex flexDir="column" alignContent="center"p={4}  gap="3rem">
              <Text color="red.600" display={'flex'} fontSize={{ base: 25, md: 45}} justifyContent={{base:'center', md:'center',lg:'center'}} fontWeight="600">
                Quienes somos
              </Text>
              <Text fontSize={{ base: 15, md: 20 }}>
                Contamos con una formación sólida técnica, científica, humanística
                y ética con experiencia por más de 20 años en el área de salud. Formación 
                que nos permite desempeñar  con claidez lealtad, conciencia profesional y con
                compromiso con los pacientes, Nos definimos como un equipo de salud responsable, 
                , organizado, proactivo, contamos con personal hábil, con potencial humano, orientado
                a objetivo y retos.
              </Text>                       
            </Flex>
          </Card>
          <Card variant="outline" width="100%" height="auto" display={{base: 'none', md: 'block'}}>
            <Image src={Enfermera} alt="cerrar-equipo-listo-trabajar" height="100%" objectFit="cover" w="100%"  />
          </Card>
        </Flex>
        <Footer/>
      </Flex>
      
    </>
  );
  
};
export default About;
