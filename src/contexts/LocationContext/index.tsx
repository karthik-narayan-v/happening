import {Box, Button, ButtonText, Heading, Switch, VStack} from '@gluestack-ui/themed';
import React, {createContext, useMemo, useState, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {SvgLocation, SvgRadioNotSelected, SvgRadioSelected} from '../../models/Image';

export type LocationContextType = {
  selectedLocation: {
    city: string;
    address: string;
  };
  handlePopup: (isOpen: boolean) => void;
};

const LocationContext = createContext<LocationContextType>({
  selectedLocation: {
    city: 'Bangalore',
    address: '#2 KR Layout, Indiranagar',
  },
  handlePopup: () => {},
});

const LocationProvider = ({children}: {children: React.ReactNode}) => {
  const [selectedLocation, setSelectedLocation] = useState({
    city: 'Bangalore',
    address: '#2 KR Layout, Indiranagar',
  });

  const recentLocations = [
    {city: 'Saket', address: 'Saket, 2nd main, Saket main road'},
    {city: 'Delhi', address: 'Sheikh Sarai, #14 JL Road, Delhi'},
  ];

  const actionSheetRef = useRef<ActionSheetRef>(null);

  const handlePopup = (isOpen: boolean) => {
    if (isOpen) {
      actionSheetRef.current?.show();
    } else {
      actionSheetRef.current?.hide();
    }
  };

  const changeLocation = (city: string, address: string) => {
    setSelectedLocation({city, address});
  };

  const value = useMemo(() => ({selectedLocation, handlePopup}), [selectedLocation]);

  return (
    <LocationContext.Provider value={value}>
      {children}

      <ActionSheet ref={actionSheetRef} closeOnTouchBackdrop={false}>
        <VStack
          paddingHorizontal={24}
          paddingVertical={16}
          backgroundColor="$white"
          borderTopLeftRadius={5}
          borderTopRightRadius={5}>
          <Heading
            fontFamily="Poppins-Regular"
            fontWeight={500}
            fontSize={18}
            lineHeight={27}
            color="$black">
            {'Select Your Location'}
          </Heading>
          <Box flexDirection="row" alignItems="center" gap={16}>
            <Heading
              fontFamily="Inter-Regular"
              fontWeight={400}
              fontSize={14}
              lineHeight={17}
              color="$gray300">
              {'Phone location permission'}
            </Heading>
            <Switch
              width={34}
              height={34}
              defaultValue={true}
              trackColor={{false: '$secondary500', true: '$primary700'}}
              thumbColor={'$primary600'}
            />
          </Box>
          <Heading
            m={'$0'}
            fontFamily="Poppins-Regular"
            fontWeight={500}
            fontSize={16}
            lineHeight={24}
            color="$black">
            {'Current Location'}
          </Heading>
          <Pressable onPress={() => changeLocation('Bangalore', '#2 KR Layout, Indiranagar')}>
            <Box
              alignItems="center"
              flexDirection="row"
              backgroundColor="$primary300"
              paddingVertical={4}
              borderRadius={5}
              paddingHorizontal={12}
              justifyContent="space-between">
              <Box alignItems="center" flexDirection="row" gap={12}>
                {SvgLocation('20px', '25px')}
                <VStack>
                  <Heading
                    marginVertical={'$0'}
                    color="$primary600"
                    fontFamily="Poppins-Regular"
                    fontWeight={500}
                    lineHeight={21}
                    fontSize={14}>
                    Bangalore
                  </Heading>
                  <Heading
                    marginVertical={'$0'}
                    color="$black"
                    fontFamily="Poppins-Regular"
                    fontWeight={400}
                    lineHeight={18}
                    fontSize={12}>
                    #2 KR Layout, Indiranagar
                  </Heading>
                </VStack>
              </Box>
              {selectedLocation.city === 'Bangalore' &&
              selectedLocation.address === '#2 KR Layout, Indiranagar' ? (
                <SvgRadioSelected />
              ) : (
                <SvgRadioNotSelected />
              )}
            </Box>
          </Pressable>

          <Heading
            m={'$0'}
            fontFamily="Poppins-Regular"
            fontWeight={500}
            fontSize={16}
            lineHeight={24}
            color="$black">
            {'Recent Locations'}
          </Heading>
          {recentLocations.map((location, index) => (
            <Pressable key={index} onPress={() => changeLocation(location.city, location.address)}>
              <Box
                alignItems="center"
                flexDirection="row"
                paddingVertical={4}
                borderRadius={5}
                paddingHorizontal={12}
                justifyContent="space-between">
                <Box alignItems="center" flexDirection="row" gap={12}>
                  {SvgLocation('16px', '20px')}
                  <Heading
                    marginVertical={'$0'}
                    color="$black"
                    fontFamily="Poppins-Regular"
                    fontWeight={400}
                    lineHeight={31}
                    fontSize={14}>
                    {location.address}
                  </Heading>
                </Box>
                {selectedLocation.city === location.city &&
                selectedLocation.address === location.address ? (
                  <SvgRadioSelected />
                ) : (
                  <SvgRadioNotSelected />
                )}
              </Box>
            </Pressable>
          ))}

          <Box marginTop={24}>
            <Button
              alignSelf="flex-end"
              backgroundColor="$primary600"
              borderWidth={1}
              borderRadius={20}
              borderColor="$coolGray100"
              paddingHorizontal={16}
              paddingVertical={4}
              onPress={() => handlePopup(false)}>
              <ButtonText
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight={24}
                fontSize={14}
                color={'$white'}
                textAlign="center">
                {'Confirm'}
              </ButtonText>
            </Button>
          </Box>
        </VStack>
      </ActionSheet>
    </LocationContext.Provider>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    paddingVertical: 10,
  },
  cancel: {
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
});

export {LocationContext, LocationProvider};
