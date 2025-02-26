import React from 'react';
import { RootStackScreenProps } from '../../../models/RootStackParams';
import { Box, Heading } from '@gluestack-ui/themed';
const Login = ({navigation}: RootStackScreenProps<'Login'>)=>{
    return (<Box w="full" h="full">
        <Heading>Login</Heading>
    </Box>);
};

export default Login;
