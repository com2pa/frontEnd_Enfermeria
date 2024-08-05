import { Button, ButtonGroup, Card, Divider, Flex, HStack, IconButton, Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, Select,  Text,  useBoolean,  useToast } from "@chakra-ui/react";
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
  const [selectedService, setSelectedService] = useState('');
  // const [onClose] =useDisclosure();
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


  // selecciona el servicio seleccionado
  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    console.log(e.target.value,'....');
  };

  const handleSave = async ()=> {  
    // const selectedServiceObj = services.find(service => service.id === selectedService);

    // const updatedData = {
    //   // _id: nurse._id,
    //   services: selectedService,     
          
    // };
    // console.log('77777',updatedData.services);
    // console.log('datos a enviar', nurse._id,updatedData);
    // const selectedServiceName = services.find(service => service.id === selectedService)?.NameService;    
    console.log(1);
    const updatedNurse ={...nurse, services: selectedService};
    console.log(updatedNurse);
    try {
      const {data} = await axios.patch(`/api/nurse/${nurse._id}`,updatedNurse);    
      console.log(' enviados ..',data);
      // handleEditNurse(updatedNurse);
      SetIsEditing.off();
      toast({
        position:'top',
        title: 'Success',
        // description: data, 
        status:'success',
        duration:4000,
        isClosable:true,
      });
    } catch (error) {
      console.log(error);
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
                  {/* <RadioGroup 
                    value={selectedService} 
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
                        isChecked={selectedService === service.id} 
                        label={service.name}
                        gap={5}
                        borderColor="red" 
                      >
                  
                        {service.NameService}
                      </Radio>
                    ))}
                  </RadioGroup> */}
                  <Select
                    value={selectedService}
                    onChange={handleServiceChange}                    
                    placeholder="Seleccione opcion para el enfermero"
                    color="black"
                    fontSize="14px"
                    fontWeight="semibold"
                    border="1px solid black"
                    borderColor="green.600"
                    borderRadius="5px"
                    mt={5}
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.NameService}
                      </option>
                    ))}
                  </Select>
                  <Flex justifyContent="center"> 

                    <Button 
                      onClick={()=>handleSave(nurse._id)} 
                      bg="green.300"
                      color="white"
                      mt={5}
                      
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