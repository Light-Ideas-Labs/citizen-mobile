import React, { Component } from 'react'
import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack'
import  Icon  from 'react-native-vector-icons'

// Auth Screens
import SignInScreen from '../screens/SignIn/SignInScreen'
import OrganizationScreen from '../screens/Organization/OrganizationScreen'
import ProposalScreen from '../screens/Organization/ProposalScreen' 

const Stack = createStackNavigator();
const Auth = createStackNavigator();

const MainStackNavigator = ({ navigation }) => {
  return (
  <Stack.Navigator>

  </Stack.Navigator>
  )
};

const RootStackScreen = ({ navigation }) => {
    return (
    <Auth.Navigator headerShown='false'>
        <Auth.Screen 
            name='SignIn' 
            component={SignInScreen} 
            options={{ 
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid 
            }} />  
        <Auth.Screen
          name='Organization'
          component={OrganizationScreen}
          options={{
            headerTitle: false,
            headerShown: true,
            headerTitleStyle: { color: '#ffff', },
            headerTintColor: '#ffffff',
            headerStyle: { backgroundColor: '#3A95FF', },
            ...TransitionPresets.RevealFromBottomAndroid 
        }}/>  
        <Auth.Screen
        name='Create Proposal' component={ProposalScreen}
        options={{
            headerTitleStyle: { color: '#ffff', },
            headerTintColor: '#ffffff',
            headerStyle: { backgroundColor: '#3A95FF', },
        }} />
    </Auth.Navigator>
    )
}


export { RootStackScreen }