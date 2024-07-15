'use client'

import {
  Box,
  chakra,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
const Logo = (props: any) => {
  return (
    <Heading color="red.600" shadow="dark-lg "p='1' rounded='sm'  bg='white'>NURSING AT HOME</Heading>

  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (

    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('red.600', 'red.300')}
      color={useColorModeValue('white', 'white')}>

      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Logo />
        <Stack direction={'row'} spacing={6}>
          <Box as={ReactRouterLink} to='/home'>
            Home
          </Box>
          <Box as={ReactRouterLink} to='/about'>
            About
          </Box>
          <Box as={ReactRouterLink} to='/services'>
            Services
          </Box>
          <Box as={ReactRouterLink} to='/contact'>
            Contact
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        // borderColor={useColorModeValue('gray.200', 'gray.700')}
        color={useColorModeValue('red.600', 'red.300')}
        bg={useColorModeValue('white', 'White.300')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2024 Ingeniero Merwil Vegas. Todos los derechos reservados </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}