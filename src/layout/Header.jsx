import { Card, CardHeader, Flex, Image } from '@chakra-ui/react';
import React from 'react';
// import Nursing from '../../public/Nursing'


export const Header = () => {
  return (
   
  <>
    <Card pos='static' > 
     <CardHeader h='5rem' >
      <Flex gap='1' justify='space-evenly'  >
        {/* <Image src={Nursing} alt='Dan Abramov' w="5rem" height="auto" /> */}
        <p> hora</p>
        <p>usuario</p>

      </Flex>
     </CardHeader>
    </Card>
    
  </>
    
  )
}

export default Header;