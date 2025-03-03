import React from 'react';
import {Svg, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
import {Box, Text} from '@gluestack-ui/themed';

export type TicketCategoryProps = {
  startColor: string;
  endColor: string;
  text: string;
  height: number;
  isLast?: boolean;
};

const TicketCategory: React.FC<TicketCategoryProps> = ({
  startColor,
  endColor,
  text,
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
      borderBottomEndRadius={isLast ? 10 : 0}>
      {/* SVG Linear Gradient */}
      <Svg height="100%" width="100%" style={{position: 'absolute'}}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor={startColor} stopOpacity="1" />
            <Stop offset="100%" stopColor={endColor} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>

      {/* Content inside the Box */}

      <Text color="$white" fontWeight="$bold">
        {text}
      </Text>
    </Box>
  );
};

export default TicketCategory;
