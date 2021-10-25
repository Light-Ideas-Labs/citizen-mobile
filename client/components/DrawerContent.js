import React from 'react';
import styles from './styles';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  
  const paperTheme = useTheme();
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            {/* user info */}
            <Drawer.Section style={styles.drawerSection}>
            <TouchableOpacity onPress={() => {props.navigation.navigate('Profile')}}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Image
                  source={require("../assets/profile/PhotoProfile.png")}
                  size={50} />
                <View style={{ flexDirection: "column", marginLeft: 15 }}>
                  <Title style={styles.title}>Jordan Doe</Title>
                  <Caption style={styles.cation}>jordanmuthemba25@gmail.com</Caption>
                </View>
              </View>
            </View>
            </TouchableOpacity>
            </Drawer.Section>
            <Drawer.Section>
            <DrawerItemList {...props} />
            </Drawer.Section>
            {/* navigation menus  */}
            <Drawer.Section style={styles.drawerSection}>
              {/* drawer project */}
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="dashboard" type='material' color={color} size={size} />
                )}
                label="Dashboard"
                onPress={() => {props.navigation.navigate('Home')}} />

              {/* drawer project */}
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="person" type='material' color={color} size={size} onPress={() => {}} />
                )}
                label="Profile"
                onPress={() => {props.navigation.navigate('Profile')}} />

              {/* drawer project */}
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="search" type='material' color={color} size={size} onPress={() => {}} />
                )}
                label="Projects"
                onPress={() => {props.navigation.navigate('Explore')}} />
            </Drawer.Section>

            <Drawer.Section title="Preferences">
              <TouchableRipple onPress={() => {toggleTheme(); }} >
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch 
                       value={paperTheme}
                       trackColor = {{false: "#767577",true : "#81b0ff"}}
                       thumbColor = "#f4f3f4" />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
            {/* <DrawerItem 
               label = "Account Settings"
               icon = {({color,size})=>(
               <Icon 
                            type ="material-community"
                            name = "cog-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                />
              <DrawerItem 
                 label = "Help"
                 icon = {({color,size})=>(
                  <Icon 
                    type ="material-community"
                    name = "lifebuoy"
                    color ={color}
                    size ={size}
                    />
                    )}
                /> */}


          </View>
        </DrawerContentScrollView>
        <Drawer.Section styles={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="logout-variant"
                type ="material-community"
                color={color}
                size={size}
                onPress={() => {}}
              />
            )}
            label="Sign Out"
          />
        </Drawer.Section>
      </View>
    );
  }

export default DrawerContent;
