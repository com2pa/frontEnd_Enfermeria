import React, { useEffect } from 'react';
import SidebarWithHeader from '../pagesPrivate/LayoutPrivate/SidebarWithHeader';
import {  Card, Flex, Heading, List, ListIcon, ListItem,Text, useToast } from '@chakra-ui/react';
import { MdCheckCircle,} from 'react-icons/md';
import { BsFillStopwatchFill } from 'react-icons/bs';
import { GiFinishLine } from 'react-icons/gi';
import axios from 'axios';


export const Index = () => {
  const toast = useToast();
  // notificacion de registro de cita
  const [notificacion, setNotificacion] = React.useState(0);

  // notificacion de cita finalizado
  const [finalizadaCount, setFinalizadaCount] = React.useState(0);

  // notificacion de cita en espera
  const [esperaCount, setEsperaCount] = React.useState(0);
  
  useEffect(()=>{
    const festchPatient= async ()=>{
      const {data}= await axios.get('/api/patient');
      console.log('paciente dashboard index', data);
      try {
        // notificacion de registro activo
        setNotificacion(data.length);        
        console.log('Notificaciones de pacientes', data.length);

        let esperas = data.filter(data => data.status && data.status == 'espera').length;
        let esperaCount = esperas;
        setEsperaCount(esperaCount);
        console.log('espera', esperaCount);
        
        let finalizadas = data.filter(data => data.status && data.status == 'finalizado').length;
        let finalizadaCount = finalizadas;
        setFinalizadaCount(finalizadaCount);
        console.log('finalizadas', finalizadaCount);
       

        toast({
          position:'top',
          type:'info',
          title: 'Actualizaciones de pacientes',
          description: `Hay ${data.length} pacientes registrados`,
          duration: 8000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          position:'top',
          type: 'error',
          title: 'Error al obtener las citas actuales',
          description: error.response.data.error,
          duration: 2000,
          isClosable: true,
        });
      }
    };
    festchPatient();
    
  },[notificacion,toast,esperaCount,setEsperaCount,setNotificacion,setFinalizadaCount,finalizadaCount]);

  return (
    <SidebarWithHeader>
      <Card p={5}>
        <Flex justifyContent="center">
          <Heading color="red.600"> Bienvenido</Heading>
        </Flex>
        
      </Card>
      <Card mt={5} display="flex" alignItems="center" p={5}>
        {/* Agregar contenido */}
        <Text>Resumen de Status de citas </Text>
        <List spacing={3} mt={5}>
          <ListItem>
            
            <ListIcon as={MdCheckCircle} color='green.500' />
              Total de citas Activas : {notificacion}
          </ListItem>
          <ListItem>
            <ListIcon as={BsFillStopwatchFill} color='yellow.500' />
              Total de citas Esperas : {esperaCount}
          </ListItem>
          <ListItem>           
            <ListIcon as={GiFinishLine} color='red.600' />
              Total de citas Finalizadas :{finalizadaCount}
          </ListItem>
        </List>
      </Card>



    </SidebarWithHeader>
  );
};

export default Index;