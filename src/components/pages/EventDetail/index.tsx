import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Button, ButtonText, Heading, ScrollView, VStack} from '@gluestack-ui/themed';
import eventDetails from '../../../models/json/eventDetails';
import {Image, Pressable} from 'react-native';
import images from '../../../assets/png/images';
import {
  SvgChevronLeft,
  SvgFilledHeart,
  SvgHeart,
  SvgThunder,
  SvgPlay,
  SvgShare,
  SvgTime,
  SvgUser,
  SvgMusic,
  SvgLanguage,
  SvgCalendar,
  SvgInfo,
  SvgFilledLocation,
  SvgParking,
  SvgWheelChair,
  SvgFood,
  SvgMap,
} from '../../../models/Image';
const EventDetail = ({navigation}: RootStackScreenProps<'EventDetail'>) => {
  const detailSubTiles = ['About', 'Crew'];
  return (
    <VStack width="100%" height="100%">
      <Box width={'100%'} height={'auto'}>
        <Image
          resizeMode="cover"
          source={images[eventDetails[0].cover]}
          alt={'cover image'}
          style={{width: 'auto', height: 230}}
        />
        <Box
          flexDirection="row"
          position="absolute"
          width={'100%'}
          justifyContent="space-between"
          top={24}>
          <Box
            justifyContent="center"
            alignItems="center"
            width={24}
            height={24}
            backgroundColor="#F9F5FD"
            alignSelf="flex-end"
            borderRadius={20}
            left={24}>
            <SvgChevronLeft />
          </Box>
          <Box
            justifyContent="center"
            alignItems="center"
            width={24}
            height={24}
            backgroundColor="#F9F5FD"
            alignSelf="flex-end"
            borderRadius={20}
            right={24}>
            <SvgShare />
          </Box>
        </Box>
        <Box
          top={197}
          position="absolute"
          alignSelf="flex-end"
          width={'100%'}
          flexDirection="row"
          paddingHorizontal={24}>
          {detailSubTiles.map((item: string, index: number) => {
            return (
              <Pressable key={item}>
                <Box
                  backgroundColor="#F9F5FD"
                  paddingHorizontal={16}
                  paddingVertical={5}
                  borderWidth={1}
                  borderBottomWidth={0}
                  borderColor="#7E2CCF"
                  borderTopLeftRadius={10}
                  borderTopRightRadius={10}>
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
      </Box>
      <ScrollView paddingHorizontal={24} height={'100%'} width={'100%'}>
        <Heading
          color="#3C3C3C"
          fontFamily="Poppins-Regular"
          fontWeight={500}
          lineHeight={27}
          fontSize={18}>
          {eventDetails[0].title}
        </Heading>
        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box flexDirection="row" gap={8} alignItems="center" justifyContent="space-between">
            <Box flexDirection="row" gap={8}>
              <SvgFilledHeart />
              <Heading
                marginVertical={'$0'}
                color="$primary600"
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight={17}
                fontSize={14}>
                {`${eventDetails[0].interested} Intrested`}
              </Heading>
            </Box>
            <Box
              padding={4}
              flexDirection="row"
              alignItems="center"
              gap={8}
              backgroundColor="#F9F5FD"
              borderWidth={1}
              borderColor="#EEE6F9">
              <SvgPlay />
              <Heading
                marginVertical={'$0'}
                color="#000000"
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight={18}
                fontSize={12}>
                {`Teaser`}
              </Heading>
            </Box>
            <Box padding={4} flexDirection="row" alignItems="center" gap={8}>
              <SvgThunder />
              <Heading
                marginVertical={'$0'}
                color="#FF935B"
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight={18}
                fontSize={12}>
                {`Fast filling`}
              </Heading>
            </Box>
          </Box>
          <SvgHeart />
        </Box>

        <Box flexDirection="row" marginTop={12} gap={16} alignItems="center">
          <Box flexDirection="row" alignItems="center" gap={8}>
            <SvgTime />
            <Heading
              marginVertical={'$0'}
              color="#757575"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {eventDetails[0].duration}
            </Heading>
          </Box>
          <Box flexDirection="row" alignItems="center" gap={8}>
            <SvgUser />
            <Heading
              marginVertical={'$0'}
              color="#757575"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {`${eventDetails[0].ageCategory} years+`}
            </Heading>
          </Box>
          <Box flexDirection="row" alignItems="center" gap={8}>
            <SvgMusic />
            <Heading
              marginVertical={'$0'}
              color="#757575"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {eventDetails[0].genre}
            </Heading>
          </Box>
        </Box>
        <Box marginTop={12} flexDirection="row" alignItems="center" gap={8}>
          <SvgLanguage />
          <Heading
            marginVertical={'$0'}
            color="#757575"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}>
            {eventDetails[0].languages}
          </Heading>
        </Box>
        <Box marginTop={12} flexDirection="row" alignItems="center" gap={8}>
          <SvgCalendar />
          <Heading
            marginVertical={'$0'}
            color="#757575"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}>
            {eventDetails[0].eventDate}
          </Heading>
        </Box>
        <Box marginTop={12} flexDirection="row" alignItems="center" gap={8}>
          <Heading
            marginVertical={'$0'}
            color="#757575"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={17}
            fontSize={14}>
            Price:
          </Heading>
          <Heading
            marginVertical={'$0'}
            color="#757575"
            fontFamily="Poppins-Regular"
            fontWeight={500}
            lineHeight={17}
            fontSize={14}>
            {eventDetails[0].priceRange}
          </Heading>
        </Box>
        <Box borderWidth={1} borderColor="#E8DFF4" marginVertical={12} />
        <Box flexDirection="row" alignItems="center" gap={4}>
          <Box flexDirection="row" alignItems="center" gap={8}>
            <SvgFilledLocation />
            <Heading
              marginVertical={'$0'}
              color="#3C#C#C"
              fontFamily="Poppins-Regular"
              fontWeight={500}
              lineHeight={21}
              fontSize={14}>
              {eventDetails[0].location}
            </Heading>
          </Box>
          <SvgInfo />
        </Box>
        <Box marginTop={12} flexDirection="row" alignItems="center" gap={4}>
          <Box
            backgroundColor="#FBFBFB"
            padding={4}
            borderWidth={1}
            borderColor="#F1E6FF"
            borderRadius={20}>
            <Heading
              marginVertical={'$0'}
              color="$primary600"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {eventDetails[0].slot.time}
            </Heading>
          </Box>
          <Heading
            marginVertical={'$0'}
            color="#FF935B"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={18}
            fontSize={12}>
            {`${eventDetails[0].slot.tickets} seats left`}
          </Heading>
        </Box>
        <Box marginTop={12} flexDirection="row" alignItems="center" gap={8}>
          <SvgParking />
          <SvgWheelChair />
          <SvgFood />
          <Box flexDirection="row" alignItems="center" gap={4}>
            <SvgMap />
            <Heading
              marginVertical={'$0'}
              color="#7A7A7A"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}
              textDecorationLine="underline"
              textDecorationStyle="solid">
              {'4 kms nearby'}
            </Heading>
          </Box>
        </Box>
        <Box borderWidth={1} borderColor="#E8DFF4" marginVertical={12} />
        <Box marginTop={12} width={'100%'}>
          <Heading
            marginVertical={'$0'}
            color="#757575"
            fontFamily="Poppins-Regular"
            fontWeight={500}
            lineHeight={21}
            fontSize={14}>
            {'Policies & Rules'}
          </Heading>
          {eventDetails[0].policies.map(item => (
            <Heading
              marginVertical={'$0'}
              color="#757575"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {item}
            </Heading>
          ))}
        </Box>
        <Box marginTop={12} width={'100%'}>
          <Heading
            marginVertical={'$0'}
            color="#757575"
            fontFamily="Poppins-Regular"
            fontWeight={500}
            lineHeight={21}
            fontSize={14}>
            {'Offers for you'}
          </Heading>
          {eventDetails[0].offers.map(item => (
            <Heading
              marginVertical={'$0'}
              color="#757575"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {item}
            </Heading>
          ))}
        </Box>
      </ScrollView>
      <Box
        width={'100%'}
        borderWidth={1}
        justifyContent="space-around"
        flexDirection="row"
        padding={24}
        borderColor="#E5E5E5"
        alignItems="center">
        <Box />
        <Heading
          marginVertical={'$0'}
          color="#757575"
          fontFamily="Poppins-Regular"
          fontWeight={400}
          lineHeight={21}
          fontSize={14}>
          {' Select time slot to proceed'}
        </Heading>

        <Button
          backgroundColor="$primary600"
          borderWidth={1}
          borderRadius={20}
          borderColor="#D9D9D9"
          padding={10}
          onPress={() => navigation.navigate('TicketSelection')}>
          <ButtonText
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}
            color={'#FFF'}
            textAlign="center">
            {'Proceed'}
          </ButtonText>
        </Button>
      </Box>
    </VStack>
  );
};

export default EventDetail;
