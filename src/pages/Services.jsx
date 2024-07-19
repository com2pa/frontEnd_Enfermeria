import { ChevronDownIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Menu from '../layout/Menu';
export const Services = () => {
  return (
    <>
      <Menu/>
      <Box h="40vh" bg="red.600" display="flex" alignItems="center" justifyContent="center">
        <Flex alignContent="center" justifyContent="center">
          <Heading color="white" display="flex" mb={2} justifyContent="center" > Servicios de Enfermeria at Home</Heading>
        </Flex>      
      </Box>
      <Box h="60vh" display="flex" justifyContent="center" alignItems="center">
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg="grey.200"
        >
          {/* <Container> */}
          <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">Nuestros Servicios de Enfermería</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
              Nuestro Servicio de Enfermería a domicilio está formado por profesionales 
              capacitados para asistir pacientes en su proceso de sanación del dolor y la enfermedad.
               
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">¿En qué casos son necesarios nuestros servicios?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  <ul>
                    <li>Patologías agudas o crónicas que ameriten cuidados de enfermería continúo, 
                    para cumplimiento de tratamiento endovenoso o hidratación con la supervisión 
                    constante de signos vitales y estado general del paciente.</li>
                    <li>Realización de curas complicadas como consecuencia de</li>
                    <li>Cuidados paliativos en caso de pacientes terminales.</li>
                    <li>Cuidados y apoyo post-parto.</li>

                  </ul>
               
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">Igualmente prestamos los siguientes servicios:</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  <ul>
                    <li>Toma de muestras de sangre para laboratorio.</li>
                    <li>Toma de vías y aplicación de tratamiento endovenoso según horario indicado por médico tratante.</li>
                  

                  </ul>
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}>
                <Text fontSize="md">Para cada Paciente</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
              diseñamos un Plan de Atención de Enfermería de acuerdo a sus necesidades procurando siempre 
              el Bienestar integral.
              Con este fin ofrecemos una Visita de Primer Contacto que 
              nos permitirá evaluar integralmente al paciente y su entorno, 
              con el objeto de realizar un diagnóstico exhaustivo y planificar el servicio requerido.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* </Container> */}
        </Flex>
      </Box>
    </>


  );
};
export default Services;

