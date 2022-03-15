import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from './Screens/LoadingScreen';
import CameraScreen from './Screens/CameraScreen';
import Home from './Screens/Home';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
