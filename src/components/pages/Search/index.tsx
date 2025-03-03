import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Heading} from '@gluestack-ui/themed';
const Search = ({navigation}: RootStackScreenProps<'Search'>) => {
  return (
    <Box width="100%" height="100%" backgroundColor="#FFF">
      <Heading>Search</Heading>
    </Box>
  );
};

export default Search;
