
import { Box, Button, ButtonGroup, Card, CardHeader, Flex, FormControl,  Input, List, useToast,} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import SidebarWithHeader from '../pagesPrivate/LayoutPrivate/SidebarWithHeader.jsx';
import { useAuth } from '../hooks/useAuth.jsx';
import ServiceCard from './ServiceCard.jsx';

const REGEX_NAME = /^[A-Z][a-z]*[ ][A-Z][a-z]*$/;

export const CreateServicio = () => {

  const[NameService, setNameService] = useState('');
  const[newCategorias, setNewCategorias] = useState([]);
  const[nameValidation, setNameValidation]=useState(false);
  

  const { auth} = useAuth();
  
  const handleNameInput = ({target})=>{
    setNameService(target.value);
    console.log(target.value);
  };
  
  useEffect(() => {
    const getCategories = async () => {
      const {data} = await axios.get(`/api/servicio`);
      setNewCategorias(data);
    };
    getCategories();
  }, [setNewCategorias]);



  const toast = useToast();

  const handleNewCategoria = async (e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post(`/api/servicio`,{NameService});
      
      toast({
        position:'top',
        title: 'Success',
        description: data.NameService,
        status:'success',
        duration: 4000,
        isClosable: true,
      });
      console.log(data);

      setNewCategorias(newCategorias.concat(data));
     
      setNameService(''); 


    } catch (error) {
      toast({
        position:'top',
        title: 'Error',
        status: 'error',
        // description: error.response.data.error,
        duration: 9000,
        isClosable: true,
      });
      console.log(error);
    }
    
  };
  useEffect(()=>{
    setNameValidation(REGEX_NAME.test(NameService));
  },[NameService]);


  // console.log('muestra todo los servicio',newCategorias);

  //-- editar 
  const updateService = async (updateService,)=>{
    // console.log('servicio a editar', updateService);
    const id = updateService.id;
    const name = updateService.NameService;
    console.log(id,name);
    
    try {
      const {data} = await axios.put(`/api/servicio/${id}`,{name});
      toast({
        position:'top',
        title: 'Success',
        description: data,
        status:'success',
        duration: 4000,
        isClosable: true,
      });
      // const updatedServices = newCategorias.map((cat, i) =>
      //   i === id ? newName : cat
      // );
      // // setNameService(updatedServices);
      // setNewCategorias('');
    
    }catch(error){
      console.log(error);
      toast({
        position:'top',
        title: 'Error',
        status: 'error',
        // description: error.response.data.error,
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // eliminar
  const handleDelete = async (id)=>{
    try {
      console.log(2);
      
      const{data} = await axios.delete(`/api/servicio/${id}`);
      // console.log(data,'eliminando');

      const updatedCategorias = newCategorias.filter((cat) =>  cat.id !== id);
      setNewCategorias(updatedCategorias);
      // console.log(newCategorias);
      
      toast({
        position:'top',
        title: 'Success',
        description: data,
        status:'success',
        duration: 4000,
        isClosable: true,
      });
      // console.log(data);
    }catch(error){
      console.log(error);
      toast({
        position:'top',
        title: 'Error',
        status: 'error',
        description: error.response.data.error,
        // duration: 9000,
        isClosable: true,
      });
    }
  };


  return (
    <SidebarWithHeader>
      <Card>
        <Flex 
          justifyContent="center" 
          onSubmit={handleNewCategoria}
        >
          <CardHeader >Ingrese el Servicio</CardHeader>
          {/* Agregar formulario */}

        </Flex>
        {auth.role === 'admin' && (
          <Box>
            <Flex flexDirection="row" m="2rem" gap={3}>
              <FormControl isInvalid={!nameValidation}>
                {/* Formulario */}
                <Input 
                  type="text" 
                  placeholder="Nombre del Servicio" 
                  value={NameService}
                  onChange={handleNameInput}
                  contentEditable="true"
                />
              </FormControl>
              <ButtonGroup>
                <Button 
                  type="submit" 
                  colorScheme='green' 
                  onClick={handleNewCategoria}
                  isDisabled={!nameValidation}
                >  Agregar Servicio
                </Button>
              </ButtonGroup>
            </Flex>
          </Box>
        )}
      </Card>
      {/* Listado de categorias */}
      <Card mt={5}>
        <Flex 
          justifyContent="center" 
        >
          <CardHeader >Servicio</CardHeader>
        </Flex>

      </Card>
      {/* añadiendo servicios */}
      {/* Cómo renderizar matrices en React
        El mensaje de error indica que estás intentando representar un 
        objeto como hijo en un componente de React, lo cual no es válido. En su caso, 
        el error ocurre cuando asigna la matriz newCategorias y pasa el objeto cat directamente 
        al componente ServiceCard
      */}
      <List>
        {newCategorias.map((service) => (
         
          <ServiceCard
            key={service.id} 
            
            name={service.NameService} 
            updateService={updateService}
            handleDelete={handleDelete}
            service={service} 
          />
        ))}
      </List>
    </SidebarWithHeader>

  );

};

export default CreateServicio;