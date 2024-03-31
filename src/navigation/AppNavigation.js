import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
