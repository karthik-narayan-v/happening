import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Heading} from '@gluestack-ui/themed';
const Account = ({navigation}: RootStackScreenProps<'Account'>) => {
  return (
    <Box width="100%" height="100%" backgroundColor="#FFF">
      <Heading>Account</Heading>
    </Box>
  );
};

export default Account;
