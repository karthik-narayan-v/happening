import React from 'react';
import { RootStackScreenProps } from '../../../models/RootStackParams';
import { Box, Heading } from '@gluestack-ui/themed';
const TicketSelection = ({navigation}: RootStackScreenProps<'TicketSelection'>)=>{
    return (<Box w="full" h="full">
        <Heading>Ticket Selection</Heading>
    </Box>);
};

export default TicketSelection;
