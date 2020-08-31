import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from '../views/Home';
import ProductDetail from '../views/ProductDetail';


const config = {
  animation: 'spring',
  config: {
    stiffness: 200,
    mass: 0.8,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.09,
  },
};


const Stack = createStackNavigator();

function AppStackNav() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      mode="modal"
      headerMode="none"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          transitionSpec: {
          open: config,
          close: config,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStackNav
