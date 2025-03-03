import {RootStackParamList} from '../../../models/RootStackParams';
import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactElement} from 'react';
export type RootStackProps = {
  appPagesArray: Array<AppPage>;
};
export type AppPage = {
  screenName: keyof RootStackParamList;
  componentName: any;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStackNavigator = ({appPagesArray}: RootStackProps): ReactElement => (
  <Stack.Navigator>
    {appPagesArray.map(screen => {
      return (
        <Stack.Screen
          key={screen.screenName}
          name={screen.screenName}
          component={screen.componentName}
          options={{
            headerShown: false,
          }}
        />
      );
    })}
  </Stack.Navigator>
);
