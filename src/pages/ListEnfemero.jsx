import { Button, ButtonGroup, Card, Divider, Flex, HStack, IconButton, Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, Radio, RadioGroup,  Text,  useBoolean, useToast } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { ImPencil2 } from "react-icons/im";
import { DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

import axios from "axios";



export const ListEnfermero =({nurse,  handleEditNurse, handleDeleteNurse })=>{
  const { auth} = useAuth();
  const [isInputActive, setIsInputActive]= useState(false);
  const [isEditing , SetIsEditing] = useBoolean();
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(nurse.serviceId);

  // 
  const[name, setName]=useState(nurse.name);
  
  const toast = useToast();

  // mostrar los servicios
  useEffect(() => {    
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/servicio');
        setServices(response.data);
        console.log('Los servicios',response.data);
      } catch (error) {
        console.error('Error solicitud del  services:', error);
      }
    };

    fetchServices();
  }, [setServices]);


  const handleServiceChange = (serviceId) => {
    setSelectedServiceId(serviceId);
    // console.log(serviceId,'....');
  };
  // guardar los servicio creado
  const handleSave = async () => {
    const updatedData = {
      _id: nurse._id,
      service: selectedServiceId,
      // serviceName: services.find((service) => service.id === selectedServiceId)?.NameService,
    };
    console.log(updatedData._id);
    console.log(updatedData.service);
    // const updatedNurse = { ...nurse, serviceId: selectedServiceId };
    // const updatedServiceId = selectedServiceId;
    handleEditNurse(updatedData);
    console.log('datos a enviar 1', updatedData);
    
    try {
      console.log(3);
      // const {data} = await axios.put(`/api/nurse/${nurse._id}`, {service:updatedNurse});
      const {data} = await axios.put(`/api/nurse/${updatedData._id}`,updatedData);
      handleEditNurse(data);
      // console.log(data);
      
      SetIsEditing.off();
      toast({
        position:'top',
        title: 'Success',
        description: 'servicio actualizado : ',data, 
        status:'success',
        duration:4000,
        isClosable:true,
      });
    } catch (error) {
      console.error('Error actualizacion del  nurse:', error);
      toast({
        position:'top',
        title: 'Error seleccionado el servicio',
        description: error.response.data.error,
        status:'error',
        duration:4000,
        isClosable:true,
      });
    }  
  };



  const handleEdit = () => {
    
    if (!isInputActive) {
      setIsInputActive(true);
    } else {
      console.log('nombre Antes',nurse);
      const handleEditado = {...nurse, name: name};
     
      // actuaizar la lista 
      if(handleEditNurse !== nurse){
        console.log('nombre despues', handleEditado);
        handleEditNurse(handleEditado);
      }
      
      setIsInputActive(false); 
      
    }
  };
  return(
    <>
      <Card  
        // key={nurse.id}  
        mt={5} 
        padding={7}
      > 
        <Flex  
          alignItems="center" 
          gap={5} 
          justifyContent="space-between"
        > 
          <Input
            
            value={name}
            readOnly={isInputActive ? false : true}
            borderWidth={isInputActive ? '3px' : '0px'}
            borderColor={isInputActive ? 'blue':'white'}
            onChange={({ target }) => setName(target.value)}
            contentEditable="true"

          />
          <Flex flexDir="row" gap="0.5rem" justifyContent="flex-end" >
            {auth.role === 'admin' && (
              <ButtonGroup>
                      
                <IconButton 
                  onClick={handleEdit} 
                  color="white" 
                  bg="yellow.300" 
                  icon={<ImPencil2 /> }
                />
                <IconButton 
                  onClick={() => handleDeleteNurse(nurse._id)} 
                  color="white" bg="red.600" 
                  icon={<DeleteIcon/> }
                />                      
              </ButtonGroup>            
            )}
            <Popover
              isOpen={isEditing}
              onOpen={SetIsEditing.on}
              onClose={SetIsEditing.off}
              closeOnBlur={false}
              isLazy
              lazyBehavior="keepMounted"
            >
              {/* <PopoverAnchor >           */}
              {/* <Text>Servicio !</Text> */}          
              {/* <IconButton size="sm" icon={<FcBusinessman />} /> */}
              {/* </PopoverAnchor> */}
              <HStack>
                <PopoverTrigger>
                  <Button
                    h="30px"
                    colorScheme="green"
                    color="white"
                    p={5}
                  >
                    {isEditing ? 'Guardar' : 'Servicio'}
                  </Button>
                </PopoverTrigger>
              </HStack>
              <PopoverContent>
                <PopoverBody>
                  <Flex justifyContent="center">
                    <Text as='b'> Seleccione el servicio del Enfermero </Text>
                  </Flex>
                  <Divider  borderColor="red" pt={2}/>
                  <RadioGroup 
                    value={selectedServiceId} 
                    onChange={handleServiceChange}
                    name="service"
                    gap={5}
                    mt={5}
                    mb={5}
                  >
                    {services.map((service) => (
                      <Radio 
                        key={service.id} 
                        value={service.id}
                        color="red"
                        size="md"
                        // isChecked={selectedServiceId === service.id} 
                        // label={service.name}
                        gap={5}
                        borderColor="red" 
                      >
                  
                        {service.NameService}
                      </Radio>
                    ))}
                  </RadioGroup>
                  <Flex justifyContent="center"> 

                    <Button 
                      onClick={handleSave} 
                      bg="green.300"
                      color="white"
                    >Guardar</Button>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>

          </Flex>
        </Flex>
      </Card>   
     
    </>
  );
};
export default ListEnfermero;