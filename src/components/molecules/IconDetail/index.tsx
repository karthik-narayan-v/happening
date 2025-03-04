import React, {ReactNode} from 'react';
import {Box, Heading, Text} from '@gluestack-ui/themed';

export type IconDetailProps = {
  icon: ReactNode;
  color: string;
  title: string;
  gap?: number;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: number;
  fontSize?: number;
  marginVertical?: number;
};

const IconDetail: React.FC<IconDetailProps> = ({
  icon,
  color,
  title,
  gap = 8,
  fontFamily = 'Poppins-Regular',
  fontWeight = 400,
  lineHeight = 21,
  fontSize = 14,
  marginVertical = 0,
}) => {
  return (
    <Box flexDirection="row" alignItems="center" gap={gap} marginVertical={marginVertical}>
      {icon}
      <Heading
        marginVertical={'$0'}
        color={color}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        fontSize={fontSize}>
        {title}
      </Heading>
    </Box>
  );
};

export default IconDetail;
