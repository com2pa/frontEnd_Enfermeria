import React from 'react';
import SidebarWithHeader from '../pagesPrivate/LayoutPrivate/SidebarWithHeader';
import { Card, Flex, Heading } from '@chakra-ui/react';

export const Index = () => {
  return (
    <SidebarWithHeader>
      <Card p={5}>
        <Flex justifyContent="center">
          <Heading color="red.600"> Bienvenido</Heading>

        </Flex>
      </Card>

    </SidebarWithHeader>
  );
};

export default Index;