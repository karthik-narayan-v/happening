import React, {useState} from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Button, ButtonText, Heading, ScrollView, useToken, VStack} from '@gluestack-ui/themed';
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
import IconDetail from '../../../components/molecules/IconDetail';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const EventDetail = ({navigation, route}: RootStackScreenProps<'EventDetail'>) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [slotSelected, setSlotSelected] = useState(false);
  const detailSubTiles = ['About', 'Crew'];
  const handleBack = () => {
    navigation.goBack();
  };
  const orange600 = useToken('colors', 'orange600');
  const secondary500 = useToken('colors', 'secondary500');
  const secondary400 = useToken('colors', 'secondary400');
  const primary700 = useToken('colors', 'primary700');
  const insets = useSafeAreaInsets();
  const {id} = route.params; // Get the selected event ID
  const event: any = eventDetails.find(event => event?.id === id);
  return (
    <VStack width="100%" height="100%">
      <Box width={'100%'} height={'auto'}>
        {event?.cover && (
          <Image
            resizeMode="cover"
            source={images[event?.cover]}
            alt={'cover image'}
            style={{width: 'auto', height: 230 + insets.top}}
          />
        )}
        <Box
          position="absolute"
          height={230 + insets.top}
          paddingTop={24 + insets.top}
          justifyContent="space-between">
          <Box flexDirection="row" width={'100%'} justifyContent="space-between">
            <Pressable onPress={handleBack}>
              <Box
                justifyContent="center"
                alignItems="center"
                width={24}
                height={24}
                backgroundColor="$white"
                borderRadius={20}
                left={24}>
                <SvgChevronLeft />
              </Box>
            </Pressable>

            <Box
              justifyContent="center"
              alignItems="center"
              width={24}
              height={24}
              backgroundColor="$white"
              borderRadius={20}
              right={24}>
              <SvgShare />
            </Box>
          </Box>
          <Box width={'100%'} flexDirection="row" paddingHorizontal={24}>
            {detailSubTiles.map((item: string, index: number) => {
              const isSelected = selectedTab === index;
              return (
                <Pressable key={item} onPress={() => setSelectedTab(index)}>
                  <Box
                    backgroundColor={isSelected ? '$white' : '$white100'}
                    paddingHorizontal={16}
                    paddingVertical={5}
                    borderWidth={1}
                    borderBottomWidth={0}
                    borderColor={isSelected ? '$white' : '$primary300'}
                    borderTopLeftRadius={10}
                    borderTopRightRadius={10}>
                    <Heading
                      marginVertical={'$0'}
                      color={isSelected ? '$primary600' : secondary500}
                      fontFamily="Poppins-Regular"
                      fontWeight={400}
                      lineHeight={18}
                      fontSize={12}>
                      {item}
                    </Heading>
                  </Box>
                </Pressable>
              );
            })}
          </Box>
        </Box>
      </Box>
      <ScrollView
        backgroundColor="$white"
        paddingHorizontal={24}
        height={'100%'}
        width={'100%'}
        showsVerticalScrollIndicator={false}>
        <Heading
          color="$gray300"
          fontFamily="Poppins-Regular"
          fontWeight={500}
          lineHeight={27}
          fontSize={18}>
          {event?.title}
        </Heading>
        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box flexDirection="row" gap={16} alignItems="center" justifyContent="space-between">
            <IconDetail
              icon={<SvgFilledHeart />}
              title={`${event?.interested} intrested`}
              color={'$primary600'}
              gap={12}
              fontFamily="Inter-regular"
              lineHeight={17}
              fontSize={14}
            />
            <Box
              padding={8}
              flexDirection="row"
              alignItems="center"
              gap={4}
              borderRadius={5}
              backgroundColor="$primary300"
              borderWidth={1}
              borderColor="$primary100">
              <SvgPlay />
              <Heading
                marginVertical={'$0'}
                color="$black"
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight={18}
                fontSize={12}>
                {`Teaser`}
              </Heading>
            </Box>
            <IconDetail
              icon={<SvgThunder />}
              title={`Fast filling`}
              color={orange600}
              gap={4}
              lineHeight={18}
              fontSize={12}
            />
          </Box>
          <SvgHeart />
        </Box>

        <Box flexDirection="row" marginVertical={12} gap={16} alignItems="center">
          <IconDetail icon={<SvgTime />} title={event?.duration} color={secondary500} />
          <IconDetail
            icon={<SvgUser />}
            title={`${event?.ageCategory} years+`}
            color={secondary500}
          />
          <IconDetail icon={<SvgMusic />} title={event?.genre.join(', ')} color={secondary500} />
        </Box>
        <IconDetail
          icon={<SvgLanguage />}
          title={event?.languages.join(', ')}
          color={secondary500}
        />
        <IconDetail
          icon={<SvgCalendar />}
          title={event?.eventDate}
          color={secondary500}
          marginVertical={12}
        />
        <Box flexDirection="row" alignItems="center" gap={8}>
          <Heading
            marginVertical={'$0'}
            color={secondary500}
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={17}
            fontSize={14}>
            Price:
          </Heading>
          <Heading
            marginVertical={'$0'}
            color={secondary500}
            fontFamily="Poppins-Regular"
            fontWeight={500}
            lineHeight={17}
            fontSize={14}>
            {event?.priceRange}
          </Heading>
        </Box>
        <Box borderWidth={1} borderColor={primary700} marginVertical={12} />
        <Box flexDirection="row" alignItems="center" gap={8}>
          <SvgFilledLocation />
          <Heading
            marginVertical={'$0'}
            color="$gray300"
            fontFamily="Poppins-Regular"
            fontWeight={500}
            lineHeight={21}
            fontSize={14}>
            {event?.location}
          </Heading>
          <SvgInfo />
        </Box>
        <Box marginTop={12} flexDirection="row" alignItems="center" gap={8}>
          <Pressable onPress={() => setSlotSelected(!slotSelected)}>
            <Box
              backgroundColor={'$white100'}
              paddingHorizontal={8}
              paddingVertical={4}
              borderWidth={1}
              borderColor={slotSelected ? '$primary600' : '$secondary700'}
              borderRadius={20}>
              <Heading
                marginVertical={'$0'}
                color={secondary500}
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight={21}
                fontSize={14}>
                {event?.slot.time}
              </Heading>
            </Box>
          </Pressable>

          <Heading
            marginVertical={'$0'}
            color={orange600}
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={18}
            fontSize={12}>
            {`${event?.slot.tickets} seats left`}
          </Heading>
        </Box>
        <Box marginTop={12} flexDirection="row" alignItems="center" gap={16}>
          <SvgParking />
          <SvgWheelChair />
          <SvgFood />
          <Box flexDirection="row" alignItems="center" gap={4}>
            <SvgMap />
            <Heading
              marginVertical={'$0'}
              color={secondary400}
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
        <Box borderWidth={1} borderColor={primary700} marginVertical={12} />
        <Box marginTop={12} width={'100%'}>
          <Heading
            marginVertical={'$0'}
            color={secondary500}
            fontFamily="Poppins-Regular"
            fontWeight={500}
            lineHeight={21}
            fontSize={14}>
            {'Policies & Rules'}
          </Heading>
          {event?.policies.map((item: any) => (
            <Heading
              marginVertical={'$0'}
              color={secondary500}
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
            color={secondary500}
            fontFamily="Poppins-Regular"
            fontWeight={500}
            lineHeight={21}
            fontSize={14}>
            {'Offers for you'}
          </Heading>
          {event?.offers.map((item: any) => (
            <Heading
              marginVertical={'$0'}
              color={secondary500}
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
        backgroundColor="$white"
        width={'100%'}
        borderWidth={1}
        paddingHorizontal={12}
        paddingTop={16}
        paddingBottom={16 + insets.bottom}
        justifyContent={'flex-end'}
        flexDirection="row"
        borderColor="$gray50"
        gap={22}
        alignItems="center">
        {!slotSelected && (
          <Heading
            marginVertical={'$0'}
            color="$warmGray400"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}>
            {' Select time slot to proceed'}
          </Heading>
        )}

        <Button
          backgroundColor="$primary600"
          borderWidth={1}
          borderRadius={20}
          borderColor="#D9D9D9"
          paddingHorizontal={16}
          paddingVertical={4}
          onPress={slotSelected ? () => navigation.navigate('TicketSelection', {id}) : () => {}}
          opacity={slotSelected ? 1 : 0.7}>
          <ButtonText
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={24}
            fontSize={16}
            color={'$white'}
            textAlign="center">
            {'Proceed'}
          </ButtonText>
        </Button>
      </Box>
    </VStack>
  );
};

export default EventDetail;
