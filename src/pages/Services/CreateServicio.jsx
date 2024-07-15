// import { DeleteIcon } from '@chakra-ui/icons';
import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Flex, FormControl, IconButton, Input, List, ListItem, Text ,useToast,} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ImPencil2 } from 'react-icons/im';
// import {baseUrl} from '../../config/url'



const REGEX_NAME = /^[A-Z][a-z]*[ ][A-Z][a-z]*$/;

export const CreateServicio = (e) => {
  // e.preventDefault()gi
  const[NameService, setNameService] = useState('')
  const[newCategorias, setNewCategorias] = useState([ ])
  const[nameValidation, setNameValidation]=useState(false);
  
  const handleNameInput = ({target})=>{
    setNameService(target.value);
    console.log(target.value)
  }
  // editar 
  const handleEdit = async (e, index, currentName)=>{
    e.preventDefault();
    try {
      console.log(2);
      const newName = prompt('Enter the new name:', currentName);
      const{data} = await axios.put(`/api/servicio/${index}`,{NameService: newName});
      
      toast({
        position:'top',
        title: 'Success',
        description: data,
        status:'success',
        duration: 4000,
        isClosable: true,
      });
      const updatedServices = services.map((service, i) =>
        i === index ? newName : service
      );
      setServices(updatedServices);
      setNameService('');
    
    }catch(error){
      console.log(error)
      toast({
        position:'top',
        title: 'Error',
        status: 'error',
        // description: error.response.data.error,
        // status: 'Hubo un error verique sus datos !',
        // duration: 9000,
        isClosable: true,
      })
    }
  }

  // eliminar
  const handleDelete = async (e, id)=>{
    e.preventDefault();
    try {
      console.log(2);
      // const{data} = await axios.delete(`/api/servicio/${id}`,{NameService});
      
      toast({
        position:'top',
        title: 'Success',
        description: data,
        status:'success',
        duration: 4000,
        isClosable: true,
      });
      console.log(data)
    }catch(error){
      console.log(error)
      toast({
        position:'top',
        title: 'Error',
        status: 'error',
        // description: error.response.data.error,
        // status: 'Hubo un error verique sus datos !',
        // duration: 9000,
        isClosable: true,
      })
    }
  }



  const toast = useToast();

  const handleNewCategoria = async (e)=>{
    e.preventDefault();
    try {
      console.log(1);
      const{data} = await axios.post(`/api/servicio`,{NameService});
      
      toast({
        position:'top',
        title: 'Success',
        description: data,
        status:'success',
        duration: 4000,
        isClosable: true,
      });
      console.log(data)

      setNewCategorias([...newCategorias, NameService]);
      setNameService(''); 


    } catch (error) {
      toast({
        position:'top',
        title: 'Error',
        status: 'error',
        // description: error.response.data.error,
        // status: 'Hubo un error verique sus datos !',
        // duration: 9000,
        isClosable: true,
      })
      console.log(error);
    }
    
  }
  useEffect(()=>{
    setNameValidation(REGEX_NAME.test(NameService))
  },[NameService]);




  return (
    <>
      <Card>
        <Flex 
        justifyContent="center" 
        // onSubmit={handleNewCategoria}
        >
          <CardHeader >Ingrese el Servicio</CardHeader>
          {/* Agregar formulario */}

        </Flex>
        <Box>
          <Flex flexDirection="row" m="2rem" gap={3}>
            <FormControl isInvalid={!nameValidation}>
              {/* Formulario */}
              <Input 
              type="text" 
              placeholder="Nombre del Servicio" 
              value={NameService}
              onChange={handleNameInput}
              />
            </FormControl>
            <ButtonGroup>
              <Button 
                type="submit" 
                colorScheme='green' 
                onClick={handleNewCategoria}
                isDisabled={!nameValidation}
              > Agregar</Button>
            </ButtonGroup>
          </Flex>
        </Box>
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
        <List mt={2}>
          {newCategorias.map((cat, index) => (
            <Card key={index} mt={5} padding={7}> 
                <Flex  alignItems="center" gap={5} justifyContent="space-between"> 
                  <Text>{cat}</Text>
                    <Flex flexDir="row" gap="0.5rem" justifyContent="flex-end" >
                      {/* <ButtonGroup> */}
                        <IconButton onClick={(e) => handleEdit(e, index, cat)} color="white" bg="yellow.300" icon={<ImPencil2 /> }/>
                        <IconButton color="white" bg="red.600" icon={<DeleteIcon/> }/>
                      {/* </ButtonGroup>            */}

                    </Flex>
                </Flex>

            </Card>
             
          ))}
        </List>
      
    </>

  )

}

export default CreateServicio;