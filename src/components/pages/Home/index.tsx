import React from 'react';
import { RootStackScreenProps } from '../../../models/RootStackParams';
import { Box, Heading } from '@gluestack-ui/themed';
const Home = ({navigation}: RootStackScreenProps<'Home'>)=>{
    return (<Box w="full" h="full">
        <Heading>Home</Heading>
    </Box>);
};

export default Home;
