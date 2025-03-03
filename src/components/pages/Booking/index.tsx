import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Heading} from '@gluestack-ui/themed';
const Booking = ({navigation}: RootStackScreenProps<'Booking'>) => {
  return (
    <Box width="100%" height="100%" backgroundColor="#FFF">
      <Heading>Booking</Heading>
    </Box>
  );
};

export default Booking;
