import { Card, CardHeader, Flex,Button, } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
export const Menu = () => {
  return (
       
    <Card>
      {/* <img src={logo} className='App-logo' style="widtg:5rem"  alt='logo'/> */}
      <CardHeader>
        
        <Flex gap="2" justifyContent="end">
        
          <Button as={ReactRouterLink} colorScheme='teal' variant='outline' to='/home'>Home
           </Button>
           <Button as={ReactRouterLink} colorScheme='teal' variant='outline'   to='/about'>About    
           </Button>
           <Button as={ReactRouterLink} colorScheme='teal' variant='outline'to='/services'>Services    
           </Button>
           <Button as={ReactRouterLink} colorScheme='teal' variant='outline'to='/contact'>Contact 
           </Button>
           <Button as={ReactRouterLink} colorScheme='teal' variant='outline' to='/sesion'>Sesion    
           </Button>
        </Flex>

      </CardHeader>
     </Card>
    
  )
}

export default Menu;