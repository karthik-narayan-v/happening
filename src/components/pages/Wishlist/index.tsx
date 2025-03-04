import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Heading} from '@gluestack-ui/themed';
import ComingSoon from '../../../components/molecules/ComingSoon';
const Wishlist = ({navigation}: RootStackScreenProps<'Wishlist'>) => {
  return (
    <Box width="100%" height="100%" backgroundColor="#FFF">
      <ComingSoon />
    </Box>
  );
};

export default Wishlist;
