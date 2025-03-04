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
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import {View} from 'react-native';

const Account = ({navigation}: RootStackScreenProps<'Account'>) => {
  const [isOpen, setIsOpen] = useState(false);

  const openActionSheet = () => setIsOpen(true);
  const closeActionSheet = () => setIsOpen(false);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* Button to Open ActionSheet */}
      <Button onPress={openActionSheet}>
        <ButtonText>Open ActionSheet</ButtonText>
      </Button>

      {/* ActionSheet Component */}
      <View>
        <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ActionsheetBackdrop />
          <ActionsheetContent>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>

            <ActionsheetItem onPress={() => setIsOpen(false)}>
              <ActionsheetItemText>Option 1</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={() => setIsOpen(false)}>
              <ActionsheetItemText>Option 2</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={() => setIsOpen(false)}>
              <ActionsheetItemText>Cancel</ActionsheetItemText>
            </ActionsheetItem>
          </ActionsheetContent>
        </Actionsheet>
      </View>
    </View>
  );
};

export default Account;
