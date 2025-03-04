import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {
  SvgChevronLeft,
  SvgGold,
  SvgMinus,
  SvgPlatinum,
  SvgPlus,
  SvgSilver,
} from '../../../models/Image';
import {
  Box,
  Button,
  ButtonText,
  ScrollView,
  Heading,
  VStack,
  Pressable,
  useToken,
} from '@gluestack-ui/themed';
import TicketCategory from '../../../components/molecules/TicketCategory';
import SelectTicket from '../../../components/molecules/SelectTicket';
const TicketSelection = ({navigation}: RootStackScreenProps<'TicketSelection'>) => {
  const handleBack = () => {
    navigation.goBack();
  };
  const secondary800 = useToken('colors', 'secondary800');
  const secondary400 = useToken('colors', 'secondary400');
  return (
    <VStack width={'100%'} height={'100%'} backgroundColor="$white">
      <Box width={'100%'} flexDirection="row" padding={24} gap={12} alignItems="center">
        <Pressable onPress={handleBack}>
          <SvgChevronLeft />
        </Pressable>
        <Heading
          marginVertical={'$0'}
          color="$gray300"
          fontFamily="Poppins-Regular"
          fontWeight={500}
          lineHeight={27}
          fontSize={18}>
          {'Select Seats'}
        </Heading>
      </Box>
      <ScrollView height={'100%'}>
        <Box width={'100%'} paddingHorizontal={24} marginBottom={24}>
          <Box
            height={60}
            width={'100%'}
            alignContent="center"
            backgroundColor="$white100"
            borderWidth={1}
            borderColor="$primary100"
            borderTopLeftRadius={10}
            borderTopRightRadius={10}>
            <Box
              alignSelf="center"
              marginHorizontal={20}
              paddingVertical={12}
              width={'30%'}
              backgroundColor={secondary800}
              borderWidth={1}
              borderRadius={5}
              alignItems="center"
              borderColor="$primary100">
              <Heading
                marginVertical={'$0'}
                color={secondary400}
                fontFamily="Inter-Regular"
                fontWeight={400}
                lineHeight={14}
                fontSize={17}>
                {'Stage'}
              </Heading>
            </Box>
          </Box>
          <TicketCategory
            startColor={'#ABAAD4'}
            endColor={'#59586E'}
            ticketClass="Platinum class"
            price="₹ 1,480"
            height={40}
          />
          <TicketCategory
            startColor={'#FAC38C'}
            endColor={'#947353'}
            ticketClass="Gold Class"
            price="₹ 800"
            height={50}
          />
          <TicketCategory
            startColor={'#DBDBDB'}
            endColor={'#757575'}
            ticketClass="Silver Class"
            price="₹ 480"
            height={80}
            isLast={true}
          />
          <Heading
            marginTop={4}
            textAlign="center"
            marginVertical={'$0'}
            color={secondary400}
            fontFamily="Inter-Regular"
            fontWeight={400}
            lineHeight={14}
            fontSize={17}>
            {'Seats Layout'}
          </Heading>
        </Box>
        <SelectTicket
          leftIcon={<SvgSilver />}
          ticketClass={'Silver Class'}
          price={'₹ 480'}
          seats={8}
          selectedSeats={1}
          onSeatChange={() => {}}
        />
        <SelectTicket
          leftIcon={<SvgGold />}
          ticketClass={'Gold Class'}
          price={'₹ 800'}
          seats={5}
          selectedSeats={0}
          onSeatChange={() => {}}
        />
        <SelectTicket
          leftIcon={<SvgPlatinum />}
          ticketClass={'Platinum Class'}
          price={'₹ 1,480'}
          seats={8}
          selectedSeats={1}
          onSeatChange={() => {}}
        />
      </ScrollView>
      <Box
        width={'100%'}
        borderWidth={1}
        justifyContent="space-between"
        flexDirection="row"
        paddingHorizontal={24}
        paddingVertical={16}
        borderColor="$gray50"
        alignItems="center"
        backgroundColor="$white">
        <VStack gap={8}>
          <Box flexDirection="row" alignItems="center" gap={8}>
            <Heading
              marginVertical={'$0'}
              color="$primary600"
              fontFamily="Inter-Regular"
              fontWeight={600}
              lineHeight={22}
              fontSize={18}>
              {'₹'}
              <Heading
                marginVertical={'$0'}
                color="$primary600"
                fontFamily="Poppins-Regular"
                fontWeight={600}
                lineHeight={27}
                fontSize={18}>
                {' 1,480'}
              </Heading>
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="$secondary500"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {' for 1 seat'}
            </Heading>
          </Box>
          <Heading
            marginVertical={'$0'}
            color="$secondary500"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}>
            {'+199 tax & fees'}
          </Heading>
        </VStack>

        <Button
          backgroundColor="$primary600"
          borderWidth={1}
          borderRadius={20}
          borderColor="$coolGray100"
          paddingHorizontal={16}
          paddingVertical={4}
          onPress={() => navigation.navigate('Menu')}>
          <ButtonText
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}
            color={'$white'}
            textAlign="center">
            {'Pay now'}
          </ButtonText>
        </Button>
      </Box>
    </VStack>
  );
};

export default TicketSelection;
