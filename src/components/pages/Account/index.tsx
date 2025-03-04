import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {useState} from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Box,
  Button,
  ButtonText,
  Heading,
  VStack,
} from '@gluestack-ui/themed';
import {View} from 'react-native';
import ComingSoon from '../../../components/molecules/ComingSoon';

const Account = ({navigation}: RootStackScreenProps<'Account'>) => {
  return (
    <Box width="100%" height="100%" backgroundColor="#FFF">
      <ComingSoon />
    </Box>
  );
};

export default Account;
