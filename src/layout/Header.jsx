import { Card, CardHeader, Flex } from '@chakra-ui/react';
import React from 'react';



export const Header = () => {
  return (
   
  <>
    <Card pos='static' > 
     <CardHeader h='5rem' >
      <Flex gap='1' justify='space-evenly'  >
        <p>logo</p>
        <p> hora</p>
        <p>usuario</p>

      </Flex>
     </CardHeader>
    </Card>
    
  </>
    
  )
}

export default Header;