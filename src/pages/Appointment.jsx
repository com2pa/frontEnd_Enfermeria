import React, { useEffect, useState } from "react";
import SidebarWithHeader from "../pagesPrivate/LayoutPrivate/SidebarWithHeader";
import axios from "axios";
import { 
  Button, 
  ButtonGroup, 
  Card, 
  Heading, 
  HStack, 
  IconButton, 
  // Input, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay,   
  Table, 
  TableContainer, 
  Tbody, 
  Td, 
  Tfoot, 
  Th, 
  Thead, 
  Tr, 
  useDisclosure, 
  useToast
} from "@chakra-ui/react";
// import { ImPencil2 } from "react-icons/im";
import { DeleteIcon } from "@chakra-ui/icons";


const Cita = () =>{
  const [patients, setPatients] = useState([]);  
  const {isOpen,onOpen,onClose} = useDisclosure();
  const [selectedPatient,setSelectedPatient]= useState(null);


  const toast = useToast();
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
    
  const handleDelete = async(id)=>{
    try {
      const { data } = await axios.delete(`/api/patient/${id}`);
      setPatients(patients.filter((patient)=>patient.id!==id));
      toast({
        title: 'Éxito',
        description: 'La cita ha sido eliminada exitosamente',data,
        status:'success',
        duration: 5000,
        isClosable: true,
      });
      
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudo eliminar la cita',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const handleStatus = async(id, newStatus)=>{
    try{
      const {data}=  await axios.patch(`/api/patient/${id}`,{status:newStatus});
      const updatePatients = patients.map((patient)=>
        patient.id === id?{...patient, status:newStatus} : patient
      );
      console.log(data);
      console.log(updatePatients);
      toast({
        title: 'Éxito',
        description: 'El estado de la cita ha sido actualizado',data,
        status: 'success',
        // duration: 5000,
        isClosable: true,
      });
    }catch(error){
      console.log(error);
      toast({
        title: 'Error',
        description:error.response.data.error,
        status: 'error',
        // duration: 5000,
        isClosable: true,
      });
    }
    
  };
  return (
    <>
      <SidebarWithHeader>
        <Heading mb={5}> Citas</Heading>
        <TableContainer>
          <Table size='sm'  variant='striped' colorScheme='red'>
            <Thead >
              <Tr>
                <th>Nombre y Apellido</th>
                
                <th>Servicio </th>            
                <th>fecha</th>
                <th>Hora</th>
                <th>Status</th>                           
              </Tr>
            </Thead>
            <Tbody>
              {patients.map((patient) => (
                <Tr key={patient.id}>
                  <Td value={patient.id}>{patient.name}</Td>               
                  <td>{patient.services}</td>               
                  <Td>{patient.date}</Td>
                  <Td>{patient.time}</Td>
                  <Td>
                    <ButtonGroup>                      
                      {/* <IconButton 
                        // onClick={handleEdit} 
                        color="white" 
                        bg="yellow.300" 
                        icon={<ImPencil2 /> }
                      /> */}
                      <Button
                        onClick={() => handleStatus(patient.id, 'espera')}
                        disabled={patient.status === 'espera'}
                        bg={patient.status === 'espera' ?'blue.500'  : 'white' }
                      >
                        espera
                      </Button>
                      <Button
                        onClick={() => handleStatus(patient.id, 'finalizado')}
                        disabled={patient.status === 'finalizado'}
                        bg={patient.status === 'espera' ? 'blue.500' : 'white'}
                      >
                        Finalizado
                      </Button>

                      
                      <IconButton 
                        onClick={()=>handleDelete(patient.id)} 
                        color="white" bg="red.600" 
                        icon={<DeleteIcon/> }
                      /> 
                      <Button bg="blue" onClick={() => {
                        onOpen();
                        setSelectedPatient(patient);
                      }}>
                          Ver Detalles
                      </Button>
                    </ButtonGroup>  
                  
                  </Td>               
                </Tr>
              ))}    
            
            </Tbody>
            <Tfoot>
              <Tr colSpan="5" >
                <Th rowSpan={5} display="flex" justifyContent="center">To convert</Th>        
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>     
      </SidebarWithHeader>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalle de la cita</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>           
            {/* {
              patients.map((patient)=>{
                return(
                  <Card key={patient.id} p={5} borderLeft="2px" borderLeftColor="red.600">
                    <p >Dirección:<span> {patient.address}</span></p>
                    <p>Telefono: <span> {patient.phone}</span></p>
                    <p>Edad: <span> {patient.age}</span></p>
                    <p>correo: <span> {patient.email}</span></p>
                    <p>Sintoma: <span> {patient.description}</span></p>
                  </Card>
                );
              })
            } */}
            {selectedPatient && (
              <Card p={5} borderLeft="2px" borderLeftColor="red.600">                
                <p>Status: <span>{selectedPatient.status}</span></p>
                <p>Dirección: <span>{selectedPatient.address}</span></p>
                <p>Teléfono: <span>{selectedPatient.phone}</span></p>
                <p>Edad: <span>{selectedPatient.age}</span></p>
                <p>Correo electrónico: <span>{selectedPatient.email}</span></p>
                <p>Síntoma: <span>{selectedPatient.description}</span></p>
              </Card>
            )}
          </ModalBody>
          <ModalFooter>            
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     
  )   
    </>
  );
 
};

export default Cita;