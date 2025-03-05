import React, {useContext, useState} from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, FlatList, Heading, HStack, ScrollView, useToken, VStack} from '@gluestack-ui/themed';
import {SvgLocation, SvgClose} from '../../../models/Image';
import {Pressable, Image} from 'react-native';
import categories from '../../../models/json/categories';
import popular from '../../../models/json/popular';
import resumeshow from '../../../models/json/resumeshow';
import images from '../../../assets/png/images';
import {LocationContext} from '../../../../src/contexts/LocationContext';
const Home = ({navigation}: RootStackScreenProps<'Home'>) => {
  const eventTypes = ['Entertainment', 'Academic', 'Volunteering'];
  const [selectedEvent, setSelectedEvent] = useState(0);

  const renderEventTab = () => {
    const primary100 = useToken('colors', 'primary100');
    return (
      <Box marginTop={24} flexDirection="row" paddingHorizontal={24}>
        {eventTypes.map((item: string, index: number) => {
          const isSelected = selectedEvent === index;

          return (
            <Pressable key={item} onPress={() => setSelectedEvent(index)}>
              <Box
                backgroundColor={isSelected ? '$primary300' : '$white'}
                paddingHorizontal={16}
                paddingVertical={5}
                borderWidth={1}
                borderColor={isSelected ? '$primary600' : primary100}
                borderTopLeftRadius={index === 0 ? 10 : 0}
                borderBottomLeftRadius={index === 0 ? 10 : 0}
                borderTopRightRadius={index === 2 ? 10 : 0}
                borderBottomRightRadius={index === 2 ? 10 : 0}>
                <Heading
                  marginVertical={'$0'}
                  color={isSelected ? '$primary600' : '$gray300'}
                  fontFamily="Poppins-Regular"
                  fontWeight={500}
                  lineHeight={21}
                  fontSize={14}>
                  {item}
                </Heading>
              </Box>
            </Pressable>
          );
        })}
      </Box>
    );
  };

  const chunkArray = (arr: any[], size: number) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const category = chunkArray(categories, 2);
  const popularShows = chunkArray(popular, 1);
  const resumingShows = chunkArray(resumeshow, 1);
  const [resumeShows, setResumeShows] = useState(resumingShows);
  const handleRemoveShow = (id: string) => {
    const updatedShows = resumeShows.filter((show: any) => show[0].id !== id);
    setResumeShows(updatedShows);
  };
  const {selectedLocation, handlePopup} = useContext(LocationContext);
  const onBarPress = () => {
    handlePopup(true);
  };
  return (
    <ScrollView height={'100%'} backgroundColor="$white" showsVerticalScrollIndicator={false}>
      <Pressable onPress={onBarPress}>
        <Box
          alignItems="center"
          flexDirection="row"
          backgroundColor="$primary300"
          marginTop={9}
          marginHorizontal={24}
          paddingHorizontal={12}
          paddingVertical={4}
          gap={12}
          borderRadius={5}>
          {SvgLocation('20px', '25px')}
          <VStack width={'100%'}>
            <Heading
              marginVertical={'$0'}
              color="$primary600"
              fontFamily="Poppins-Regular"
              fontWeight={500}
              lineHeight={21}
              fontSize={14}>
              {selectedLocation.city}
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="$black"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={18}
              fontSize={12}>
              {selectedLocation.address}
            </Heading>
          </VStack>
        </Box>
      </Pressable>

      {renderEventTab()}
      <Heading
        marginTop={24}
        paddingLeft={24}
        marginVertical={'$0'}
        color="$gray300"
        fontFamily="Poppins-Regular"
        fontWeight={500}
        lineHeight={27}
        fontSize={18}>
        Pick your category
      </Heading>
      <FlatList
        data={category}
        horizontal
        marginLeft={24}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => (
          <Box>
            {item.map((listItem: any) => (
              <Box
                marginRight={16}
                width={90}
                height={90}
                borderRadius={10}
                key={listItem.id}
                flexDirection="row"
                alignItems="flex-end"
                justifyContent="center">
                <Image
                  resizeMode="cover"
                  source={images[listItem.image]}
                  alt={listItem.image}
                  style={{width: 90, height: 70, borderRadius: 10}}
                />
                <Box width={90} height={70} position="absolute" justifyContent="flex-end">
                  <Box width={'100%'} height={21} backgroundColor="#F9F5FDE5">
                    <Heading
                      height={21}
                      marginTop={0}
                      fontFamily="Poppins-Regular"
                      fontWeight={500}
                      fontSize={14}
                      lineHeight={21}
                      color="$secondary900"
                      textAlign="center">
                      {listItem.title}
                    </Heading>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      />
      <Heading
        marginTop={24}
        paddingLeft={24}
        marginVertical={'$0'}
        color="$gray300"
        fontFamily="Poppins-Regular"
        fontWeight={500}
        lineHeight={27}
        fontSize={18}>
        Most Popular
      </Heading>
      <FlatList
        data={popularShows}
        horizontal
        marginTop={24}
        marginLeft={24}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => (
          <Box>
            {item.map((listItem: any) => (
              <Pressable onPress={() => navigation.navigate('EventDetail', {id: listItem.id})}>
                <Box key={listItem.id} paddingRight={16}>
                  <Image
                    resizeMode="cover"
                    source={images[listItem.image]}
                    alt={listItem.image}
                    style={{width: 300, height: 125, borderRadius: 10}}
                  />
                </Box>
              </Pressable>
            ))}
          </Box>
        )}
      />
      <Heading
        marginTop={24}
        paddingLeft={24}
        marginVertical={'$0'}
        color="$gray300"
        fontFamily="Poppins-Regular"
        fontWeight={500}
        lineHeight={27}
        fontSize={18}>
        Resume your booking
      </Heading>
      <FlatList
        data={resumeShows}
        horizontal
        marginTop={24}
        marginLeft={24}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => (
          <Box marginRight={24}>
            {item.map((listItem: any) => (
              <Box width={110} height={70} key={listItem.id}>
                <Image
                  source={images[listItem.image]}
                  alt={listItem.image}
                  resizeMode="cover"
                  style={{width: 110, height: 70, borderRadius: 10, position: 'absolute'}}
                />
                <Pressable onPress={() => handleRemoveShow(listItem.id)}>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    margin={4}
                    width={18}
                    height={18}
                    backgroundColor="$primary300"
                    alignSelf="flex-end"
                    borderRadius={10}>
                    <SvgClose />
                  </Box>
                </Pressable>
              </Box>
            ))}
          </Box>
        )}
      />
    </ScrollView>
  );
};

export default Home;
