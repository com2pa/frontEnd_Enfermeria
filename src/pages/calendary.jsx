import dayGridPlugin from '@fullcalendar/daygrid';
import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const Calendary = () => {
  const [appointments, setAppointments] = useState([]);

 
  useEffect(() => {
    const Fechas= async ()=>{

      try {
        const {data} = await axios.get('/api/patient/');
        console.log(data);      
        
        // Aquí podrías añadir más opciones a las citas, como la descripción
        const citasPacientes = data.map(patient => {
          return {
            title:patient.name,
            date: patient.date[0].split('T')[0],
            time:patient.time            
          };
        });
        // const hehe = {
        //   title:'Gabriel Garcia',
        //   date: '2024-08-14',
        //   time: '8:30'          
        // };
        // setAppointments(citasPacientes.concat(hehe)); 
        setAppointments(citasPacientes); 
      } catch (error) {
        console.log(error);
      }  
    };
    Fechas();
  }, [setAppointments]);

  console.log(appointments);
  
  return (
    <Calendar
      // localizer
      width="100%"
      // editable={true}
      onClickDay={() => {
        console.log(`hola`);
          
      }}
      dayMaxEvents:true //permite saber por un link si hay mas eventos
      // dayMinWidth="50px"
      plugins={[ dayGridPlugin ]}
      tileDisabled={({ activeStartDate, date, view }) => {
        const dateCalendar = date.toISOString().split('T')[0];
        const dateAppointment = appointments.find(appointment => appointment.date === dateCalendar);
        return dateCalendar === dateAppointment?.date;
      }}
      initialView="dayGridMonth"
      // weekends={false}
      events={{appointments}}
    />
  );
};
export default Calendary;