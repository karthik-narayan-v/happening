import React, {ReactNode} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {incrementSeat, decrementSeat} from '../../../store';
import {RootState} from '../../../store';
import {Box, Heading, useToken} from '@gluestack-ui/themed';
import {SvgMinus, SvgPlus} from '../../../models/Image';
import {Pressable} from 'react-native';

export type SelectTicketProps = {
  leftIcon: ReactNode;
  ticketClass: string;
  price: string;
  seats: number;
  ticketClassId: string;
};

const SelectTicket: React.FC<SelectTicketProps> = ({
  leftIcon,
  ticketClass,
  price,
  seats,
  ticketClassId,
}) => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector(
    (state: RootState) => state.seats.selectedSeats[ticketClassId] || 0,
  );

  const primary600 = useToken('colors', 'primary600');
  const primary300 = useToken('colors', 'primary300');
  const coolGray100 = useToken('colors', 'coolGray100');

  const handleDecrement = () => {
    dispatch(decrementSeat({ticketClassId, price: parseInt(price.replace(/[^0-9]/g, ''))}));
  };

  const handleIncrement = () => {
    dispatch(incrementSeat({ticketClassId, price: parseInt(price.replace(/[^0-9]/g, ''))}));
  };

  return (
    <Box
      borderWidth={1}
      borderColor={'$primary700'}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal={24}
      paddingVertical={12}
      backgroundColor="$white">
      <Box flexDirection="row" alignItems="center" gap={8}>
        {leftIcon}
        <Heading
          marginVertical={'$0'}
          color="$black"
          fontFamily="Poppins-Regular"
          fontWeight={400}
          lineHeight={21}
          fontSize={14}>
          {ticketClass}
        </Heading>
        <Heading
          marginVertical={'$0'}
          color="$gray300"
          fontFamily="Poppins-Regular"
          fontWeight={400}
          lineHeight={27}
          fontSize={14}>
          {price}
        </Heading>
        <Heading
          marginVertical={'$0'}
          color="$orange600"
          fontFamily="Poppins-Regular"
          fontWeight={400}
          lineHeight={18}
          fontSize={12}>
          {`${seats} seats left`}
        </Heading>
      </Box>
      <Box flexDirection="row" alignItems="center" gap={18}>
        <Pressable onPress={selectedSeats > 0 ? handleDecrement : undefined}>
          <Box
            width={24}
            height={24}
            backgroundColor={primary300}
            borderWidth={1}
            opacity={selectedSeats > 0 ? 1 : 0.2}
            borderColor={primary600}
            justifyContent="center"
            alignItems="center">
            <SvgMinus />
          </Box>
        </Pressable>

        <Heading
          marginVertical={'$0'}
          padding={4}
          color="$gray300"
          fontFamily="Inter-Regular"
          fontWeight={400}
          lineHeight={17}
          fontSize={14}>
          {selectedSeats}
        </Heading>
        <Pressable onPress={selectedSeats < seats ? handleIncrement : undefined}>
          <Box
            width={24}
            height={24}
            opacity={selectedSeats < seats ? 1 : 0.2}
            backgroundColor={primary300}
            borderWidth={1}
            borderColor={primary600}
            justifyContent="center"
            alignItems="center">
            <SvgPlus />
          </Box>
        </Pressable>
      </Box>
    </Box>
  );
};

export default SelectTicket;
