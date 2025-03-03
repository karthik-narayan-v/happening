import React from 'react';
import {RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Button, ButtonText, FormControl, Heading, VStack} from '@gluestack-ui/themed';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgLogo, SvgSocial} from '../../../models/Image';
import HaInputField from '../../../components/atoms/HaInputField';

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

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handleOTPSubmit = (text: string) => {
    setOtp(text);
  };
  return (
    <VStack width="100%" height="100%" backgroundColor="#FFF" paddingHorizontal={36}>
      <Box marginTop={108} marginBottom={52} alignItems="center">
        {SvgLogo('180px', '85px')}
      </Box>
      <Heading
        fontFamily="Poppins-Regular"
        fontWeight={400}
        lineHeight={24}
        fontSize={16}
        marginHorizontal={52}
        textAlign="center"
        color="$black">
        {'Login now to find whats happening around you'}
      </Heading>
      <FormControl marginTop={40} isInvalid={isInvalid} gap={24}>
        <HaInputField
          placeholder={'Enter email address or mobile number'}
          value={email}
          onChange={handleEmailChange}
        />
        <HaInputField placeholder={'Click on Send OTP'} value={otp} onChange={handleOTPSubmit} />
        <Button
          backgroundColor="$primary600"
          borderWidth={1}
          borderRadius={30}
          borderColor="$gray100"
          paddingHorizontal={16}
          paddingVertical={10}
          onPress={onLogin}
          action="primary">
          <ButtonText
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}
            color={'$white'}
            textAlign="center">
            {'Login'}
          </ButtonText>
        </Button>
        <Button alignSelf="flex-end" onPress={handleSubmit}>
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
        color="$gray200">
        {'or'}
      </Heading>
      <Heading
        fontFamily="Poppins-Regular"
        fontWeight={400}
        lineHeight={24}
        fontSize={16}
        marginTop={12}
        textAlign="center"
        color="$gray200">
        {'Sign in with other accounts'}
      </Heading>
      <Box marginTop={12} alignItems="center">
        <SvgSocial />
      </Box>
    </VStack>
  );
};

export default Login;
