import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Button, Heading, Pressable, useTheme, useToken, VStack} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SvgLogo,
  SvgBell,
  SvgHome,
  SvgBooking,
  SvgSearch,
  SvgHeart,
  SvgAccount,
} from '../../../models/Image';
import Account from '../Account';
import Booking from '../Booking';
import Home from '../Home';
import Search from '../Search';
import Wishlist from '../Wishlist';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const InAppHeader = ({navigation}: {navigation: any}) => (
  <Box
    paddingBottom={9}
    paddingHorizontal={24}
    backgroundColor="$white"
    width="100%"
    flexDirection="row"
    justifyContent="space-between">
    <Box />
    {SvgLogo('80px', '30px')}
    <Button>
      <Box>
        <SvgBell />
      </Box>
      <Box
        marginRight="-20%"
        marginTop="-60%"
        alignSelf="flex-end"
        width={14}
        height={14}
        borderRadius={16}
        backgroundColor="$primary600"
      />
      <Heading
        marginRight={'-70%'}
        marginTop={'-65%'}
        fontFamily="Inter-Regular"
        fontWeight={500}
        lineHeight={12}
        fontSize={10}
        textAlign="center"
        color="$white">
        4
      </Heading>
    </Button>
  </Box>
);

const screenOptions = {
  header: ({navigation}: {navigation: any}) => <InAppHeader navigation={navigation} />,
};

const createStack = (name: string, Component: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={name} component={Component} />
    </Stack.Navigator>
  );
};

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  const primaryColor = useToken('colors', 'primary600');
  const grayColor = useToken('colors', 'secondary600');

  return (
    <Box
      borderTopWidth={1}
      borderColor="$gray50"
      backgroundColor="$white"
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal={20}>
      {state.routes.map((routeItem: any, index: number) => {
        const {options} = descriptors[routeItem.key];
        const label = options.tabBarLabel ?? options.title ?? routeItem.name;
        const isFocused = state.index === index;

        return (
          <Pressable key={label} onPress={() => navigation.navigate(label)}>
            <VStack padding={10} alignItems="center">
              {getIconForTab(label, isFocused, primaryColor, grayColor)}
              <Heading
                marginTop="$4"
                marginBottom="$0"
                fontFamily="Inter-Regular"
                fontWeight={400}
                lineHeight={17}
                fontSize={14}
                textAlign="center"
                color={isFocused ? '$primary600' : '$gray200'}>
                {label}
              </Heading>
            </VStack>
          </Pressable>
        );
      })}
    </Box>
  );
};

const getIconForTab = (
  label: string,
  isFocused: boolean,
  primaryColor: string,
  grayColor: string,
) => {
  switch (label) {
    case 'Home':
      return SvgHome(isFocused ? primaryColor : grayColor);
    case 'Booking':
      return SvgBooking(isFocused ? primaryColor : grayColor);
    case 'Search':
      return SvgSearch(isFocused ? primaryColor : grayColor);
    case 'Wishlist':
      return SvgHeart(isFocused ? primaryColor : grayColor);
    case 'Account':
      return SvgAccount(isFocused ? primaryColor : grayColor);
  }
};

const Menu = () => {
  const white = useToken('colors', 'white');
  const HomeStack = () => createStack('MenuHome', Home);
  const BookingStack = () => createStack('MenuBooking', Booking);
  const SearchStack = () => createStack('MenuSearch', Search);
  const WishlistStack = () => createStack('MenuWishlist', Wishlist);
  const AccountStack = () => createStack('MenuAccount', Account);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}} edges={['top', 'bottom']}>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" options={screenOptions} component={HomeStack} />
        <Tab.Screen name="Booking" options={screenOptions} component={BookingStack} />
        <Tab.Screen name="Search" options={screenOptions} component={SearchStack} />
        <Tab.Screen name="Wishlist" options={screenOptions} component={WishlistStack} />
        <Tab.Screen name="Account" options={screenOptions} component={AccountStack} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Menu;
