import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';


export const verificacionCorreo = () => {
  return (
    <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
    >
 
  <Stack>
   
      
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src="#"
        alt='Norsing_at_Home_verify '
    />

    <Stack>
        <CardBody>
        <Heading size='md'>Verificate</Heading>

        <Text py='2'>
        “Cordial saludo, te invitamos a completar tu registro en nuestra web. Por favor, 
        sigue los pasos indicados y dirígete al botón para finalizar con el siguiente paso de 
        inicio de sesión.”
        </Text>
        </CardBody>

        <CardFooter>
        <Button variant='solid' colorScheme='blue'>
        ¡ Pulsa aqui para verificarte !
        </Button>
        </CardFooter>
    </Stack>
    </Card>  
       
  </Stack>
</Card>
  )
  
}

export default verificacionCorreo;