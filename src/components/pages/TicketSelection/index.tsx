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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import tickets from '../../../models/json/tickets';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
const TicketSelection = ({navigation, route}: RootStackScreenProps<'TicketSelection'>) => {
  const id = route.params.id;
  const ticketDetails = tickets.find(ticket => ticket.id === id)?.ticketsList || [];

  const handleBack = () => {
    navigation.goBack();
  };

  const secondary800 = useToken('colors', 'secondary800');
  const secondary400 = useToken('colors', 'secondary400');
  const insets = useSafeAreaInsets();
  const totalPrice = useSelector((state: RootState) => state.seats.totalPrice);
  const selectedSeats = useSelector((state: RootState) =>
    Object.values(state.seats.selectedSeats).reduce((acc, val) => acc + val, 0),
  );
  const formatPrice = (price: number) => {
    return `${new Intl.NumberFormat('en-IN').format(price)}`;
  };

  return (
    <VStack width={'100%'} height={'100%'} backgroundColor="$white">
      <Box
        width={'100%'}
        flexDirection="row"
        padding={24}
        marginTop={insets.bottom}
        gap={12}
        alignItems="center">
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

          {ticketDetails.map((ticket, index) => (
            <TicketCategory
              key={ticket.ticketClassId}
              startColor={
                ticket.ticketClass === 'Platinum'
                  ? '#ABAAD4'
                  : ticket.ticketClass === 'Gold'
                    ? '#FAC38C'
                    : '#DBDBDB'
              }
              endColor={
                ticket.ticketClass === 'Platinum'
                  ? '#59586E'
                  : ticket.ticketClass === 'Gold'
                    ? '#947353'
                    : '#757575'
              }
              ticketClass={`${ticket.ticketClass} Class`}
              price={`₹ ${ticket.price}`}
              height={
                ticket.ticketClass === 'Platinum' ? 40 : ticket.ticketClass === 'Gold' ? 50 : 80
              }
              isLast={index === ticketDetails.length - 1}
            />
          ))}

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

        {ticketDetails.map(ticket => (
          <SelectTicket
            key={ticket.ticketClassId}
            leftIcon={
              ticket.ticketClass === 'Platinum' ? (
                <SvgPlatinum />
              ) : ticket.ticketClass === 'Gold' ? (
                <SvgGold />
              ) : (
                <SvgSilver />
              )
            }
            ticketClass={`${ticket.ticketClass} Class`}
            price={`₹ ${ticket.price}`}
            seats={ticket.seats}
            ticketClassId={String(ticket.ticketClassId)}
          />
        ))}
      </ScrollView>
      <Box
        width={'100%'}
        borderWidth={1}
        justifyContent="space-between"
        flexDirection="row"
        paddingHorizontal={24}
        paddingBottom={16 + insets.bottom}
        paddingTop={16}
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
              {'₹ '}
              <Heading
                marginVertical={'$0'}
                color="$primary600"
                fontFamily="Poppins-Regular"
                fontWeight={600}
                lineHeight={27}
                fontSize={18}>
                {formatPrice(totalPrice)}
              </Heading>
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="$secondary500"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {` for ${selectedSeats} seats`}
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
