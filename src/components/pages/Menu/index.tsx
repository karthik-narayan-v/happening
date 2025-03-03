import React from 'react';
import {RootStackParamList, RootStackScreenProps} from '../../../models/RootStackParams';
import {Box, Button, Heading, HStack, Pressable, VStack} from '@gluestack-ui/themed';
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
const Stack = createStackNavigator<RootStackParamList>();

// 🔹 Custom Header Component
const InAppHeader = ({navigation}: {navigation: any}) => {
  return (
    <Box
      paddingHorizontal={24}
      backgroundColor="#FFFFFF"
      width={'100%'}
      flexDirection="row"
      justifyContent="space-between">
      <Box />
      {SvgLogo('80px', '30px')}
      <Button>
        <Box position="relative">
          <SvgBell />
        </Box>
        <Box
          marginTop={'-60%'}
          alignSelf="flex-end"
          width={14}
          height={14}
          borderRadius={16}
          backgroundColor="$primary600">
          <Heading
            fontFamily="Poppins-Regular"
            fontWeight={500}
            lineHeight={12}
            fontSize={10}
            textAlign="center"
            color="#000">
            4
          </Heading>
        </Box>
      </Button>
    </Box>
  );
};

const screenOptions = {
  header: ({navigation}: {navigation: any}) => <InAppHeader navigation={navigation} />,
};

const Menu = ({navigation}: RootStackScreenProps<'Menu'>) => {
  const getIconForTab = (label: string) => {
    switch (label) {
      case 'Home':
        return SvgHome();
      case 'Booking':
        return SvgBooking();
      case 'Search':
        return SvgSearch();
      case 'Wishlist':
        return SvgHeart();
      case 'Account':
        return SvgAccount();
    }
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  };

  const BookingStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    );
  };

  const SearchStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    );
  };
  const WishlistStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Wishlist" component={Wishlist} />
      </Stack.Navigator>
    );
  };
  const AccountStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    );
  };

  const onTabPress = (label: string) => {
    navigation.navigate(label);
  };

  const customTabBar = ({state, descriptors}: {state: any; descriptors: any}) => {
    return (
      <Box
        borderWidth={1}
        borderColor="#D9D9D9"
        backgroundColor="#FFF"
        flexDirection="row"
        justifyContent="space-between">
        {state.routes.map((routeItem: any, index: number) => {
          const {options} = descriptors[routeItem.key];
          const label =
            options.tabBarLabel != undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title.title
                : routeItem.name;
          const isFocused = state.index === index;

          return (
            <Pressable key={label} onPress={() => onTabPress(label)}>
              <VStack padding={10} alignItems="center">
                {getIconForTab(label)}
                <Heading
                  marginTop={'$4'}
                  fontFamily="Poppins-Regular"
                  fontWeight={400}
                  lineHeight={17}
                  fontSize={14}
                  textAlign="center"
                  color="$primary600">
                  {label}
                </Heading>
              </VStack>
            </Pressable>
          );
        })}
      </Box>
    );
  };

  return (
    <Box width={'100%'} height={'100%'} bgColor="#fff">
      <Tab.Navigator tabBar={props => customTabBar(props)}>
        <Tab.Screen name="Home" component={HomeStack} options={screenOptions} />
        <Tab.Screen name="Booking" component={BookingStack} options={screenOptions} />
        <Tab.Screen name="Search" component={SearchStack} options={screenOptions} />
        <Tab.Screen name="Wishlist" component={WishlistStack} options={screenOptions} />
        <Tab.Screen name="Account" component={AccountStack} options={screenOptions} />
      </Tab.Navigator>
    </Box>
  );
};

export default Menu;
