import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Heading} from '@gluestack-ui/themed';
import ComingSoon from '../../../components/molecules/ComingSoon';
const Booking = ({navigation}: RootStackScreenProps<'Booking'>) => {
  return (
    <Box width="100%" height="100%" backgroundColor="#FFF">
      {/* <Heading
      alignSelf="center"
      fontFamily="Poppins-Regular"
      fontWeight={500}
      fontSize={18}
      lineHeight={27}>
      Booking
    </Heading> */}
      <ComingSoon />
    </Box>
  );
};

export default Booking;
