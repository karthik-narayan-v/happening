import React, {ReactNode} from 'react';
import {Heading} from '@gluestack-ui/themed';
import {TextStyle} from 'react-native';

interface HaHeadingProps {
  children: ReactNode;
  variant: 'variant1' | 'variant2';
  color: string;
}

const HaHeading: React.FC<HaHeadingProps> = ({children, variant, color}) => {
  const variants = {
    variant1: {
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
      lineHeight: 24,
      fontSize: 16,
    },
    variant2: {
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
      lineHeight: 24,
      fontSize: 16,
    },
  };

  return (
    <Heading {...variants[variant]} color={color}>
      {children}
    </Heading>
  );
};

export default HaHeading;
