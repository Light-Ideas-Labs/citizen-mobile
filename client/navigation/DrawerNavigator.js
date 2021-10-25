import React from 'react';
import { createDrawerNavigator, createAppContainer } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements'
import BottomTabNavigator from './BottomTabNavigator'
import { DrawerContent } from '../components/DrawerContent'
import { HomeNavigator, OrganizationStackNavigator, ExploreStackNavigator } from './ScreenStackNavigators'
// , activeBackgroundColor: '#3A95FF'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
    <Drawer.Navigator
       drawerContent={props => <DrawerContent {...props}/>}
       drawerContentOptions={{ activeTintColor:'#FFB500', inactiveTintColor: '#3A95FF' }}>
        <Drawer.Screen 
           name='RootClientTabs' 
           component={ BottomTabNavigator }
           options = {{
            title:'Citizen Console',
            drawerIcon: ({focused, size}) =>(
                <Icon 
                    type = "material-community"
                    name = "home"
                    color = {focused ? '#3A95FF' : '#FFB500'}
                    size = {size}
                />
            )
        }}
            />
        <Drawer.Screen 
           name='ProfileDrawer' 
           component={ OrganizationStackNavigator }
           options = {{
            title:'Organization Console',
            drawerIcon: ({ focused, size }) =>(
                <Icon 
                    type = "material"
                    name = "business"
                    color = {focused ? '#3A95FF' : '#FFB500'}
                    size = {size}

                />
            )
        }} />
    </Drawer.Navigator>
    );
};

export default DrawerNavigator;