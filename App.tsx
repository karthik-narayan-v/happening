/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import Login from './src/components/pages/Login';
import Menu from './src/components/pages/Menu';
import {AppPage, RootStackNavigator} from './src/components/organisms/RootStackNavigator';
import Home from './src/components/pages/Home';
import EventDetail from './src/components/pages/EventDetail';
import TicketSelection from './src/components/pages/TicketSelection';
import {defaultTheme} from './src/themes';
import Account from './src/components/pages/Account';
import Booking from './src/components/pages/Booking';
import Search from './src/components/pages/Search';
import Wishlist from './src/components/pages/Wishlist';
import {LocationProvider} from './src/contexts/LocationContext';
import {Provider} from 'react-redux';
import {store} from './src/store';

const appPages: Array<AppPage> = [
  {screenName: 'Login', componentName: Login},
  {screenName: 'Menu', componentName: Menu},
  {screenName: 'Home', componentName: Home},
  {screenName: 'EventDetail', componentName: EventDetail},
  {screenName: 'TicketSelection', componentName: TicketSelection},
  {screenName: 'Account', componentName: Account},
  {screenName: 'Booking', componentName: Booking},
  {screenName: 'Search', componentName: Search},
  {screenName: 'Wishlist', componentName: Wishlist},
];

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GluestackUIProvider config={defaultTheme}>
          <LocationProvider>
            <RootStackNavigator appPagesArray={appPages} />
          </LocationProvider>
        </GluestackUIProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
