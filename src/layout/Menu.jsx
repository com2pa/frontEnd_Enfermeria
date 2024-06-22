import { Card, CardHeader, Flex,Link,Button,} from '@chakra-ui/react';
import React from 'react'


export const Menu = () => {
  return (
       
    <Card>
      <CardHeader>
        <Flex gap="2" justifyContent="end">         
           <Button colorScheme='teal' variant='outline'>    
            <Link  href='/home'>Home</Link>
           </Button>
           <Button colorScheme='teal' variant='outline'>    
            <Link  href='/about'>About</Link>
           </Button>
           <Button colorScheme='teal' variant='outline'>    
            <Link  href='/services'>Services</Link>
           </Button>
           <Button colorScheme='teal' variant='outline'>    
            <Link  href='/contact'>Contact</Link>
           </Button>
           <Button colorScheme='teal' variant='outline'>    
            <Link  href='/sesion'>Sesion</Link>
           </Button>
        </Flex>

      </CardHeader>
     </Card>
    
  )
}

export default Menu;