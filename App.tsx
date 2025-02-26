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
import {AppPage, RooStackNavigator} from './src/components/organisms/RootStackNavigator';
import Home from './src/components/pages/Home';
import EventDetail from './src/components/pages/EventDetail';
import TicketSelection from './src/components/pages/TicketSelection';

const appPages: Array<AppPage> = [
  {screenName: 'Login', componentName: Login},
  {screenName: 'Home', componentName: Home},
  {screenName: 'EventDetail', componentName: EventDetail},
  {screenName: 'TicketSelection', componentName: TicketSelection},
];

const App = (): ReactElement => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <RooStackNavigator appPagesArray={appPages} />
      </GluestackUIProvider>
    </NavigationContainer>
  );
};

export default App;
