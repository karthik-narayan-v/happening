import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, FlatList, Heading, HStack, ScrollView, VStack} from '@gluestack-ui/themed';
import {SvgLocation, SvgClose} from '../../../models/Image';
import {Pressable, Image} from 'react-native';
import categories from '../../../models/json/categories';
import popular from '../../../models/json/popular';
import resumeshow from '../../../models/json/resumeshow';
import images from '../../../assets/png/images';
const Home = ({navigation}: RootStackScreenProps<'Home'>) => {
  const eventTypes = ['Entertainment', 'Academic', 'Volunteering'];

  const chunkArray = (arr: any[], size: number) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const category = chunkArray(categories, 2);
  const popularShows = chunkArray(popular, 1);
  const resumingShows = chunkArray(resumeshow, 1);

  return (
    <ScrollView height={'100%'} backgroundColor="#ffffff">
      <Box
        alignItems="center"
        flexDirection="row"
        backgroundColor="#F9F5FD"
        marginHorizontal={24}
        paddingHorizontal={12}
        paddingVertical={12}
        gap={12}
        borderRadius={'5px'}>
        <SvgLocation />
        <VStack width={'100%'}>
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
            color="#000000"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={18}
            fontSize={12}>
            #2 KR Layout, Indiranagar
          </Heading>
        </VStack>
      </Box>
      <Box marginTop={24} width={'100%'} flexDirection="row" paddingHorizontal={24}>
        {eventTypes.map((item: string, index: number) => {
          return (
            <Pressable key={item}>
              <Box
                backgroundColor="#F9F5FD"
                paddingHorizontal={16}
                paddingVertical={5}
                borderWidth={1}
                borderColor="#7E2CCF"
                borderTopLeftRadius={index === 0 ? 10 : 0}
                borderBottomLeftRadius={index === 0 ? 10 : 0}
                borderTopRightRadius={index === 2 ? 10 : 0}
                borderBottomRightRadius={index === 2 ? 10 : 0}>
                <Heading
                  marginVertical={'$0'}
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
      <Heading
        marginTop={24}
        paddingLeft={24}
        marginVertical={'$0'}
        color="#3C3C3C"
        fontFamily="Poppins-Regular"
        fontWeight={500}
        lineHeight={27}
        fontSize={18}>
        Pick your category
      </Heading>
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => (
          <Box>
            {item.map((listItem: any) => (
              <Box
                width={90}
                height={90}
                margin={16}
                borderRadius={10}
                key={listItem.id}
                flexDirection="row"
                alignItems="flex-end"
                justifyContent="center">
                <Box>
                  <Image
                    resizeMode="cover"
                    source={images[listItem.image]}
                    alt={listItem.image}
                    style={{width: 90, height: 70, borderRadius: 10}}
                  />
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
        color="#3C3C3C"
        fontFamily="Poppins-Regular"
        fontWeight={500}
        lineHeight={27}
        fontSize={18}>
        Most Popular
      </Heading>
      <FlatList
        data={popularShows}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => (
          <Pressable onPress={() => navigation.navigate('EventDetail')}>
            {item.map((listItem: any) => (
              <Box margin={8} key={listItem.id}>
                <Image
                  resizeMode="cover"
                  source={images[listItem.image]}
                  alt={listItem.image}
                  style={{width: 300, height: 125, borderRadius: 10}}
                />
              </Box>
            ))}
          </Pressable>
        )}
      />
      <Heading
        marginTop={24}
        paddingLeft={24}
        marginVertical={'$0'}
        color="#3C3C3C"
        fontFamily="Poppins-Regular"
        fontWeight={500}
        lineHeight={27}
        fontSize={18}>
        Resume your booking
      </Heading>
      <FlatList
        data={resumingShows}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => (
          <Box>
            {item.map((listItem: any) => (
              <Box width={110} height={70} margin={8} key={listItem.id}>
                <Image
                  source={images[listItem.image]}
                  alt={listItem.image}
                  resizeMode="cover"
                  style={{width: 110, height: 70, borderRadius: 10, position: 'absolute'}}
                />
                <Box
                  justifyContent="center"
                  alignItems="center"
                  margin={4}
                  width={18}
                  height={18}
                  backgroundColor="#F9F5FD"
                  alignSelf="flex-end"
                  borderRadius={10}>
                  <SvgClose />
                </Box>
              </Box>
            ))}
          </Box>
        )}
      />
    </ScrollView>
  );
};

export default Home;
