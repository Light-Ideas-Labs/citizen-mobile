import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { MainStackNavigator, RootStackScreen, FavoriteStackNavigator, ProfileStackNavigator, ExploreStackNavigator, HistoryStackNavigator } from './ScreenStackNavigators'

const Tab = createBottomTabNavigator();

const  BottomTabNavigator = () => {
        return (
                <Tab.Navigator
                tabBarOptions={{
                    keyboardHidesTabBar: !(Platform.OS === 'ios'),
                    inactiveTintColor: '#3A95FF',
                    activeTintColor: '#FFB500',
                    labelPosition: 'below-icon',
                    labelStyle: {
                        fontSize: 12,
                        marginTop: 0,
                      },
                    tabStyle: {
                        width: 50,    
                      }, 
                }}>
                    {/* Tab home */}
                    <Tab.Screen 
                    name='Home' 
                    component={MainStackNavigator}
                    options={{
                        tabBarIcon: ({ color, focused}) => (
                            <Icon name='home' type='material' color={ color}  focused={ focused } size={26} /> )
                    }} />
                    
                    {/* Tab favorite */}
                   <Tab.Screen
                     name='Charities' 
                     component={FavoriteStackNavigator}
                     options={{
                        tabBarIcon: ({ color, focused }) => (
                            <Icon name='heart-outline' type='material-community' color={ color} focused={ focused }  size={26} /> )
                    }} />
                    
                    {/* Tab project */}
                    <Tab.Screen name='Explore'
                     component={ExploreStackNavigator}
                     options={{
                        tabBarIcon: ({ color, focused }) => (
                           <Icon name='search' type='material'  color={ color} focused={ focused }  size={26} /> ),
                    }} />
                    
                    {/* Tab profile */}
                    <Tab.Screen name='Profile'
                     component={ProfileStackNavigator}
                     options={{
                         tabBarIcon: ({ color, focused }) => (
                            <Icon name='person-outline' type='material' color={ color} focused={ focused }  size={26} /> )
                     }} />

                    {/* Tab history */}                    
                    <Tab.Screen name='History' 
                    component={HistoryStackNavigator}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <Icon name='history' type='material-community'  color={ color} focused={ focused }  size={26} /> ),
                            // tabBarBadge: 3,
                    }} />
                </Tab.Navigator>
        );
    }

export default BottomTabNavigator;