import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Heading} from '@gluestack-ui/themed';
const Wishlist = ({navigation}: RootStackScreenProps<'Wishlist'>) => {
  return (
    <Box width="100%" height="100%" backgroundColor="#FFF">
      <Heading>Wishlist</Heading>
    </Box>
  );
};

export default Wishlist;
