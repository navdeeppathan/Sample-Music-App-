import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../SignIn';
import {NavigationContainer} from '@react-navigation/native';
import ImageSlider from '../ImageSlider';
import Home from '../Home';
import ForgotPassword from '../ForgotPassword';
import ResetPassword from '../ResetPassword';
import VerifyEmail from '../VerifyEmail';
import TestSignup from '../TestSignup';

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="imageSlider"
          component={ImageSlider}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        <Stack.Screen name="SignUp" component={TestSignup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        {/* <Stack.Screen name="VerifyEmail" component={TestVerification} /> */}

        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigation;
