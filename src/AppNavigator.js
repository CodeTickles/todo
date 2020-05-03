import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import {Dashboard} from './Dashboard';

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{backgroundColor: 'blue', paddingVertical: 70}}
        drawerType="slide"
        drawerContentOptions={{
          activeTintColor: 'white',
          labelStyle: {fontSize: 36},
          //   activeBackgroundColor: 'rgba(255,255,255,0.3)',
          inactiveTintColor: 'rgba(255,255,255,0.5)',
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
