import React, {ReactNode, useEffect, useRef} from 'react';
import {Box, Heading, Text, VStack} from '@gluestack-ui/themed';
import {SvgLogo} from '../../../models/Image';

import {Animated, Easing} from 'react-native';

const BouncingLogo = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10, // Moves up
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0, // Moves back down
          duration: 300,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View style={{transform: [{translateY: bounceAnim}]}}>
      {SvgLogo('180px', '85px')}
    </Animated.View>
  );
};

const ComingSoon: React.FC = () => {
  return (
    <VStack
      width={'100%'}
      height={'100%'}
      bgColor="$white"
      justifyContent="center"
      alignItems="center">
      <Box bgColor="$white" flexDirection="row" alignItems="center" gap={12}>
        <BouncingLogo />
        <Heading
          alignSelf="flex-end"
          fontFamily="Poppins-Regular"
          fontWeight={500}
          fontSize={18}
          lineHeight={27}>
          Soon
        </Heading>
      </Box>
    </VStack>
  );
};

export default ComingSoon;
