import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import { Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Calendary = () => {
  const [appointments, setAppointments] = useState([]);

 
  useEffect(() => {
    const Fechas= async ()=>{

      try {
        const {data} = await axios.get('/api/patient/');
        console.log(data);      
        
        // Aquí podrías añadir más opciones a las citas, como la descripción
        const citasPacientes = data.map(patient => ({
          title:patient.name,
          date: patient.date,
          time:patient.time
          
        }));
        
        setAppointments(citasPacientes);
  
      } catch (error) {
        console.log(error);
      }
  
    };
    Fechas();
  }, [setAppointments]);

  return (
    // Ajustar los parámetros a tu necesidad
    <>
      <Flex  
        justifyContent="center" 
        m={10}
        align="center" 
        p={10}
        color="red.600"
      >
        <Heading>Nuestras citas activas</Heading>
      </Flex>
      <FullCalendar
        // localizer
        height="400px"
        width="100%"
        // editable={true}
        dayMaxEvents:true //permite saber por un link si hay mas eventos
        // dayMinWidth="50px"
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        // weekends={false}
        events={{appointments}}
      />
  
    </>
  );
};
export default Calendary;