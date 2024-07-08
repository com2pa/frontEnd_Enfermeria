import {  DeleteIcon } from '@chakra-ui/icons';
import { Box, Button,   Center,  Flex, FormControl,    IconButton,  Input, ListItem, OrderedList, Square, Text } from '@chakra-ui/react'
import axios from 'axios';
import { ImPencil2 } from "react-icons/im";


  (async()=>{
  const {data} = await axios.get('/api/servicio')
})();


export const Servicio = () => {



  return (
    <>
        <Center bg='tomato' h='100px' w='100%' color='white'>
          <h1>Servicio</h1>
        </Center>

        
          <Flex color='white' marginLeft={10} marginRight={10}>            
            <Square bg='blue.500' w='35%' size='150px'>
              <Flex flexDir="column">
                <Text>Box 2</Text>
                <OrderedList>
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
                  <ListItem>Consectetur adipiscing elit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </OrderedList>

              </Flex>
            </Square>
            <Box flex='1'  bg='tomato' alignContent="center">
              <Text mb={5} display="flex" justifyContent="center">Box 3</Text>
              <FormControl>
                <Flex gap='2rem' ml={5} mr={5}  > 
                    <Input p="1.5rem 2rem" size="md"  type='text' placeholder='Nombre del servicio' />
                    <Button p="1.5rem 2rem"  colorScheme="green" >Registrar</Button>
                      {/* onClick={}  */}
                </Flex>                
              </FormControl>
              <ul >
                <li >
                  <div>
                    <Flex mt={5} gap={5} justifyContent="center" >
                      <Text>Item 1</Text>
                      <Box >
                        <IconButton
                              isRound={true}
                              variant='solid'
                              colorScheme='teal'
                              aria-label='Done'
                              fontSize='20px'
                              icon={<ImPencil2 />}
                              
                            />
                            <IconButton
                              isRound={true}
                              variant='solid'
                              colorScheme='teal'
                              aria-label='Done'
                              fontSize='20px'
                              icon={<DeleteIcon />}
                              
                            />  

                      </Box>

                    </Flex>
                  </div>
                </li>
               
              </ul>
            </Box>
          </Flex>

        
        
    </>
  )
}

export default Servicio


