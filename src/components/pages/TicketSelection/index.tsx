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
import {Box, Button, ButtonText, ScrollView, Heading, VStack} from '@gluestack-ui/themed';
import TicketCategory from '../../../components/molecules/TicketCategory';
const TicketSelection = ({navigation}: RootStackScreenProps<'TicketSelection'>) => {
  return (
    <VStack width={'100%'} height={'100%'}>
      <Box width={'100%'} flexDirection="row" padding={24} gap={4} alignItems="center">
        <SvgChevronLeft />
        <Heading
          marginVertical={'$0'}
          color="#3C3C3C"
          fontFamily="Poppins-Regular"
          fontWeight={500}
          lineHeight={27}
          fontSize={18}>
          {'Select Seats'}
        </Heading>
      </Box>
      <ScrollView height={'100%'}>
        <Box width={'100%'} paddingHorizontal={24}>
          <Box
            height={60}
            width={'100%'}
            alignContent="center"
            backgroundColor="#FBFBFB"
            borderWidth={1}
            borderColor="#EEE6F9"
            borderTopStartRadius={10}>
            <Box
              alignSelf="center"
              marginHorizontal={20}
              paddingVertical={12}
              width={'30%'}
              backgroundColor="#E6E6E6"
              borderWidth={1}
              borderRadius={5}
              alignItems="center"
              borderColor="#EEE6F9">
              <Heading
                marginVertical={'$0'}
                color="#7A7A7A"
                fontFamily="Poppins-Regular"
                fontWeight={400}
                lineHeight={14}
                fontSize={17}>
                {'Stage'}
              </Heading>
            </Box>
          </Box>
          <TicketCategory
            startColor={'#ABAAD4'}
            endColor={'#59586E'}
            text={'Platinum Class ₹ 1,480'}
            height={40}
          />
          <TicketCategory
            startColor={'#FAC38C'}
            endColor={'#947353'}
            text={'Gold Class ₹ 800'}
            height={50}
          />
          <TicketCategory
            startColor={'#DBDBDB'}
            endColor={'#757575'}
            text={'Silver Class ₹ 480'}
            height={80}
            isLast={true}
          />
          <Heading
            marginTop={4}
            textAlign="center"
            marginVertical={'$0'}
            color="#7A7A7A"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={14}
            fontSize={17}>
            {'Seats Layout'}
          </Heading>
        </Box>
        <Box
          borderWidth={1}
          borderColor="#E8DFF4"
          marginVertical={12}
          flexDirection="row"
          alignItems="center"
          justify-content>
          <Box flexDirection="row" alignItems="center">
            <SvgSilver />
            <Heading
              marginVertical={'$0'}
              color="#000000"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {'Silver Class'}
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="#3C3C3C"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={27}
              fontSize={14}>
              {'₹ 480'}
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="#FF935B"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={18}
              fontSize={12}>
              {'8 seats left'}
            </Heading>
          </Box>
          <Box flexDirection="row" alignItems="center" gap={8}>
            <Box
              backgroundColor="#F9F5FD"
              borderWidth={1}
              borderColor="#7E2CCF"
              paddingHorizontal={6}
              paddingVertical={8}>
              <SvgMinus />
            </Box>
            <Heading
              marginVertical={'$0'}
              color="#3C3C3C"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={17}
              fontSize={14}>
              {'1'}
            </Heading>
            <Box
              paddingHorizontal={6}
              paddingVertical={8}
              backgroundColor="#F9F5FD"
              borderWidth={1}
              borderColor="#7E2CCF">
              <SvgPlus />
            </Box>
          </Box>
        </Box>
        <Box
          borderWidth={1}
          borderColor="#E8DFF4"
          marginVertical={12}
          flexDirection="row"
          alignItems="center"
          justify-content>
          <Box flexDirection="row" alignItems="center">
            <SvgGold />
            <Heading
              marginVertical={'$0'}
              color="#000000"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {'Gold Class'}
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="#3C3C3C"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={27}
              fontSize={14}>
              {'₹ 800'}
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="#FF935B"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={18}
              fontSize={12}>
              {'5 seats left'}
            </Heading>
          </Box>
          <Box flexDirection="row" alignItems="center" gap={8}>
            <Box
              backgroundColor="#F9F5FD"
              borderWidth={1}
              borderColor="#7E2CCF"
              paddingHorizontal={6}
              paddingVertical={8}>
              <SvgMinus />
            </Box>
            <Heading
              marginVertical={'$0'}
              color="#3C3C3C"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={17}
              fontSize={14}>
              {'0'}
            </Heading>
            <Box
              paddingHorizontal={6}
              paddingVertical={8}
              backgroundColor="#F9F5FD"
              borderWidth={1}
              borderColor="#7E2CCF">
              <SvgPlus />
            </Box>
          </Box>
        </Box>
        <Box
          borderWidth={1}
          borderColor="#E8DFF4"
          marginVertical={12}
          flexDirection="row"
          alignItems="center"
          justify-content>
          <Box flexDirection="row" alignItems="center">
            <SvgPlatinum />
            <Heading
              marginVertical={'$0'}
              color="#000000"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {'Platinum Class'}
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="#3C3C3C"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={27}
              fontSize={14}>
              {'₹ 1,480'}
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="#FF935B"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={18}
              fontSize={12}>
              {'8 seats left'}
            </Heading>
          </Box>
          <Box flexDirection="row" alignItems="center" gap={8}>
            <Box
              backgroundColor="#F9F5FD"
              borderWidth={1}
              borderColor="#7E2CCF"
              paddingHorizontal={6}
              paddingVertical={8}>
              <SvgMinus />
            </Box>
            <Heading
              marginVertical={'$0'}
              color="#3C3C3C"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={17}
              fontSize={14}>
              {'1'}
            </Heading>
            <Box
              paddingHorizontal={6}
              paddingVertical={8}
              backgroundColor="#F9F5FD"
              borderWidth={1}
              borderColor="#7E2CCF">
              <SvgPlus />
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Box
        width={'100%'}
        borderWidth={1}
        justifyContent="space-between"
        flexDirection="row"
        padding={24}
        borderColor="#E5E5E5"
        alignItems="center">
        <VStack>
          <Box flexDirection="row" alignItems="center">
            <Heading
              marginVertical={'$0'}
              color="$primary600"
              fontFamily="Poppins-Regular"
              fontWeight={600}
              lineHeight={27}
              fontSize={18}>
              {'₹ 1,480'}
            </Heading>
            <Heading
              marginVertical={'$0'}
              color="#757575"
              fontFamily="Poppins-Regular"
              fontWeight={400}
              lineHeight={21}
              fontSize={14}>
              {' for 1 seat'}
            </Heading>
          </Box>
          <Heading
            marginVertical={'$0'}
            color="#757575"
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
          borderColor="#D9D9D9"
          padding={10}
          onPress={() => navigation.navigate('Menu')}>
          <ButtonText
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight={21}
            fontSize={14}
            color={'#FFF'}
            textAlign="center">
            {'Pay now'}
          </ButtonText>
        </Button>
      </Box>
    </VStack>
  );
};

export default TicketSelection;
