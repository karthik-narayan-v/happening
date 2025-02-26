import React from 'react';
import { RootStackScreenProps } from '../../../models/RootStackParams';
import { Box, Heading } from '@gluestack-ui/themed';
const EventDetail = ({navigation}: RootStackScreenProps<'EventDetail'>)=>{
    return (<Box w="full" h="full">
        <Heading>Event Detail</Heading>
    </Box>);
};

export default EventDetail;
