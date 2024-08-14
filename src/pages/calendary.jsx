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
        const fechaActual = new Date().toISOString().split('T')[0];
        // Aquí podrías añadir más opciones a las citas, como la descripción
        const citasPacientes = data.map(patient => {
          return {
            title:patient.name,
            date: patient.date[0].split('T')[0],
            time:patient.time,
            status:patient.status            
          };
        }).filter(appointments => appointments.date >= fechaActual && appointments.status ==='finalizado');
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
  // cita finalizadas
  // const activeAppointments = appointments.filter(appointment => appointment.status !== 'finalizado');
  // console.log('cita finalizada',activeAppointments);
 
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
        // const appointment = activeAppointments.find(appointment => appointment.date === dateCalendar);
        
        return dateCalendar === dateAppointment?.date;
        // return appointment === dateCalendar;
        
      }}
      initialView="dayGridMonth"
      // weekends={false}
      events={{appointments}}
      // events={{activeAppointments}}

    />
  );
};
export default Calendary;