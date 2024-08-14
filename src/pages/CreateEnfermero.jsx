import { Box, Button, ButtonGroup, Card, CardHeader, Flex, FormControl,  Input, List, useToast } from "@chakra-ui/react";
import SidebarWithHeader from "../pagesPrivate/LayoutPrivate/SidebarWithHeader";
import { useAuth } from '../hooks/useAuth.jsx';
import { useEffect, useState } from "react";
import axios from "axios";
import ListEnfermero from './ListEnfemero.jsx'; 

const REGEX_NAME = /^[A-Z][a-z]*[ ][A-Z][a-z]*$/;

export const CreateEnfermero=()=>{
  const [name,setName] = useState('');
  const [nameValidation,setNameValidation] = useState(false);



  const[newNurse,setNewNurse]=useState([]);
  // console.log(newNurse);
  const { auth} = useAuth();

  // validar el formulario
  useEffect(()=>{
    setNameValidation(REGEX_NAME.test(name));
  },[name]);


  const toast = useToast();

  const handleNameInput = ({target})=>{
    setName(target.value);
  };
 



  useEffect(() => {
    const fetchNurses = async () => {      
      const { data } = await axios.get('/api/nurse/');
      setNewNurse(data);      
    };
    fetchNurses();
  }, [setNewNurse]);

  //crear enfermero  
  const handleNewNurse = async(e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post(`/api/nurse/`,{name});
      console.log('creado ! ',data);

      toast({
        position:'top',
        title: 'Success',
        description: data.name,
        status:'success',
        duration:4000,
        isClosable:true,
      });
     
      // agregar los nombre a la lista 
      setNewNurse([...newNurse,data]);
      

      // limpiar el input      
      setName(''); 
      // setService('');
           
    } catch (error) {
      console.log(error); 
      toast({
        position:'top',
        titLE:'Error',
        status:'error',
        description:'error.response.data.error',
        duration:4000,
        isClosable:true,
      }); 
    }
  };

  // editar enfermero
  const handleEditNurse = async(handleEditNurse)=>{
    const id= handleEditNurse._id;
    const name = handleEditNurse.name;
    // const service = handleEditNurse.service;
    
    // console.log('...',handleEditNurse);
    try {
      const {data} = await axios.put(`/api/nurse/${id}`,{name});
      console.log('editado! ',data);
      toast({
        position:'top',
        title: 'Success',
        description: data.name,
        status:'success',
        duration:4000,
        isClosable:true,
      });
      // actualizar la lista
      const updatedNurses = newNurse.map(nurse=>nurse._id === id ? data : nurse);
      // const updatedServices = newNurse.map(nurse=>nurse._id === id? {...nurse, services:[...nurse.services, handleEditNurse.service]} : nurse);
      setNewNurse(updatedNurses);

      // agregar servicio en service
      // if(handleEditNurse.service!== handleEditNurse.service){
      //   // actualizar la lista de servicios
      // setNewNurse(updatedServices);
      // }
      

    } catch (error) {
      // console.log(error);
      toast({
        position:'top',
        title: 'Error',
        // description: error.response.data.error,
        status:'error',
        duration:4000,
        isClosable:true,
      });
    }
    // limpiar el input
    setName('');
    // setService('');
  };


  // eliminar enfermero
  const handleDeleteNurse = async(_id)=>{
    
    try {
      console.log(2);
      
      await axios.delete(`/api/nurse/${_id}`);
      console.log('eliminando');
      
      const updatedNurses = newNurse.filter((nurse) =>  nurse._id!== _id);
      setNewNurse(updatedNurses);
      console.log('enfermeros',updatedNurses);
      
    } catch (error) {
      console.log(error);
      // toast({
      //   position:'top',
      //   title: 'Error',
      //   description: error.response.data.error,
      //   status:'error',
      //   duration:4000,
      //   isClosable:true,
      // });
    }
    
  };
  

  return(
    <SidebarWithHeader>
      <Card>
        {auth.role === 'admin' && (
          <>
        
            <Flex 
              justifyContent="center" 
              onSubmit={handleNewNurse}
            >
              <CardHeader >Ingrese el Enfermero</CardHeader>
              {/* Agregar formulario */}

            </Flex>
        
            <Box>
              <Flex 
                flexDirection="row" 
                m="2rem" 
                gap={3}
                isInvalid={!nameValidation}
              >
                <FormControl >
                  {/* Formulario */}
                  <Input 
                    type="text" 
                    placeholder="Nombre enfermero" 
                    value={name}
                    // onChange={(target)=>(setName(target.value))}
                    onChange={handleNameInput}
                    contentEditable="true"
                  />
                </FormControl>
                <ButtonGroup>
                  <Button 
                    type="submit" 
                    colorScheme='green' 
                    onClick={handleNewNurse}
                    isDisabled={!nameValidation}
                  >  Agregar Enfermero
                  </Button>
                </ButtonGroup>
              </Flex>
            </Box>
          </>
        )}
      </Card>
      <Card mt={8}>
        <Flex 
          justifyContent="center" 
        >
          <CardHeader >Enfermeros</CardHeader>
        </Flex>
      </Card>
      
      <List>
        {newNurse.map((nurse) => {
          return (
          // Se recibe el enfermero como propio para poder usar sus datos en el componente ListEnfermero
            <ListEnfermero
              key={nurse.id}
              nurse={nurse}
              handleEditNurse={handleEditNurse}
              handleDeleteNurse={handleDeleteNurse}
            />
          );
          
        })}
      </List>
    </SidebarWithHeader>
  );
};