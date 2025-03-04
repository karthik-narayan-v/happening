import React from 'react';
import {Svg, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
import {Box, Heading, Text} from '@gluestack-ui/themed';

export type TicketCategoryProps = {
  startColor: string;
  endColor: string;
  ticketClass: string;
  price: string;
  height: number;
  isLast?: boolean;
};

const TicketCategory: React.FC<TicketCategoryProps> = ({
  startColor,
  endColor,
  ticketClass,
  price,
  height,
  isLast = false,
}) => {
  return (
    <Box
      w="$full"
      height={height}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#FBFBFB"
      borderWidth={1}
      borderColor="#EEE6F9"
      borderBottomLeftRadius={isLast ? 10 : 0}
      borderBottomRightRadius={isLast ? 10 : 0}>
      <Svg height="100%" width="100%" style={{position: 'absolute'}}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor={startColor} stopOpacity="1" />
            <Stop offset="100%" stopColor={endColor} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>

      <Box marginVertical={-20} flexDirection="row" alignItems="center" gap={4}>
        <Heading
          fontFamily="Inter-Regular"
          fontWeight={400}
          fontSize={14}
          lineHeight={17}
          color="$white">
          {ticketClass}
        </Heading>
        <Heading
          fontFamily="Poppins-Regular"
          fontWeight={400}
          fontSize={14}
          lineHeight={21}
          color="$white">
          {price}
        </Heading>
      </Box>
    </Box>
  );
};

export default TicketCategory;
