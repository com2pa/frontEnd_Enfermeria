import React, { useEffect, useState } from "react";
import SidebarWithHeader from "../pagesPrivate/LayoutPrivate/SidebarWithHeader";
import axios from "axios";
import { Button, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

const Cita = () =>{
  const [patients, setPatients] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/patient/');
        setPatients(data);
        
        
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchData();
  }, [setPatients]);
    
 
  return (
    <SidebarWithHeader>

      <h1>ver citas</h1>
      <TableContainer>
        <Table size='sm'  variant='striped' colorScheme='red'>
          <Thead>
            <Tr>
              <Td>Nombre y Apellido</Td>
              <Td> Sintoma </Td>
              <Td>Servicio </Td>
              <Td>Direccion</Td>
              <Td>Telefono</Td>
              <Td>fecha</Td>
              <Td>Status</Td>
                           
            </Tr>
          </Thead>
          <Tbody>
            {patients.map((patient) => (
              <Tr key={patient.id}>
                <Td value={patient.id}>{patient.name}</Td>
                
                <Td>{patient.description}</Td> 
                <td>{patient.services}</td>
                <Td>{patient.address}</Td>
                <Td>{patient.phone}</Td>
                <Td>{patient.date}</Td>
                <Td>
                  <Button bg="green"> Estatus</Button>
                  
                </Td>               
              </Tr>
            ))}    
            
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              
              
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>     
    </SidebarWithHeader>
  );
 
};

export default Cita;