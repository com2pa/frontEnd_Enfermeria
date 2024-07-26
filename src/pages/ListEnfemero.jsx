import { ButtonGroup, Card, Flex, IconButton, Input } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { ImPencil2 } from "react-icons/im";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";


export const ListEnfermero =({nurse,  handleEditNurse, handleDeleteNurse })=>{
  const { auth} = useAuth();
  const [isInputActive, setIsInputActive]= useState(false);
  // 
  const[name, setName]=useState(nurse.name);

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
          borderWidth={isInputActive ? '2px' : '0px'}
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

        </Flex>
      </Flex>
    </Card>
  );
};
export default ListEnfermero;