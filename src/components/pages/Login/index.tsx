import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {
  Box,
  Button,
  ButtonText,
  FormControl,
  Heading,
  Input,
  InputField,
  VStack,
} from '@gluestack-ui/themed';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgLogo, SvgSocial} from '../../../models/Image';

const Login = ({navigation}: RootStackScreenProps<'Login'>) => {
  const insets = useSafeAreaInsets();
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const handleSubmit = () => {
    if (email.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  console.log(insets);

  const onLogin = () => {
    navigation.navigate('Menu');
  };
  return (
    <VStack width="100%" height="100%" backgroundColor="#FFF" paddingHorizontal={24}>
      <Box marginTop={108} marginBottom={52} alignItems="center">
        {SvgLogo('180px', '85px')}
      </Box>

      <Heading
        fontFamily="Poppins-Regular"
        fontWeight={400}
        lineHeight={24}
        fontSize={16}
        marginHorizontal={40}
        textAlign="center"
        color="#000000">
        {'Login now to find whats happening around you'}
      </Heading>
      <FormControl marginTop={24} isInvalid={isInvalid} gap={24}>
        <Input borderWidth={1} borderRadius={30} borderColor="#D9D9D9" backgroundColor="#FBFBFB">
          <InputField
            placeholder="Enter email address or mobile number"
            textAlign="center"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}
            color={'#A3A3A3'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </Input>
        <Input borderWidth={1} borderRadius={30} borderColor="#D9D9D9" backgroundColor="#FBFBFB">
          <InputField
            placeholder="Click on Send OTP"
            textAlign="center"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}
            color={'#A3A3A3'}
            value={otp}
            onChangeText={text => setOtp(text)}
          />
        </Input>
        <Button
          width={'auto'}
          backgroundColor="$primary600"
          borderWidth={1}
          borderRadius={30}
          borderColor="#D9D9D9"
          paddingHorizontal={16}
          paddingVertical={10}
          onPress={onLogin}>
          <ButtonText
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}
            color={'#FFF'}
            textAlign="center">
            {'Login'}
          </ButtonText>
        </Button>
        <Button alignSelf="flex-end" marginHorizontal={16} onPress={handleSubmit}>
          <ButtonText
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={24}
            fontSize={16}
            color="$primary600">
            {'Send OTP'}
          </ButtonText>
        </Button>
      </FormControl>
      <Heading
        fontFamily="Poppins-Regular"
        fontWeight={400}
        lineHeight={24}
        fontSize={16}
        marginTop={56}
        textAlign="center"
        color="#A3A3A3">
        {'or'}
      </Heading>
      <Heading
        fontFamily="Poppins-Regular"
        fontWeight={400}
        lineHeight={24}
        fontSize={16}
        marginTop={24}
        textAlign="center"
        color="#A3A3A3">
        {'Sign in with other accounts'}
      </Heading>
      <Box marginTop={24} alignItems="center">
        <SvgSocial />
      </Box>
    </VStack>
  );
};

export default Login;
