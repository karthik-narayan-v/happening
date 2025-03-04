import React, {ReactNode} from 'react';
import {Svg, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
import {Box, Heading, Text, useToken} from '@gluestack-ui/themed';
import {SvgMinus, SvgPlus} from '../../../models/Image';

export type SelectTicketProps = {
  leftIcon: ReactNode;
  ticketClass: string;
  price: string;
  seats: number;
  selectedSeats: number;
  onSeatChange: () => void;
};

const SelectTicket: React.FC<SelectTicketProps> = ({
  leftIcon,
  ticketClass,
  price,
  seats,
  selectedSeats,
  onSeatChange,
}) => {
  const primary600 = useToken('colors', 'primary600');
  const primary300 = useToken('colors', 'primary300');
  const coolGray100 = useToken('colors', 'coolGray100');
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
        <Box
          width={24}
          height={24}
          backgroundColor={primary300}
          borderWidth={1}
          borderColor={selectedSeats > 0 ? primary600 : coolGray100}
          justifyContent="center"
          alignItems="center">
          <SvgMinus />
        </Box>
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
        <Box
          width={24}
          height={24}
          backgroundColor={primary300}
          borderWidth={1}
          borderColor={selectedSeats <= seats ? primary600 : coolGray100}
          justifyContent="center"
          alignItems="center">
          <SvgPlus />
        </Box>
      </Box>
    </Box>
  );
};

export default SelectTicket;
