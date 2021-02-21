// libraries
import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';

// for navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator
} from '@react-navigation/drawer';

// screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';
import HelpListings from './screens/helplistings';
import MyListings from './screens/mylistings';
import CreateFavor from './screens/CreateFavor';
import Rating from './screens/rating';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor: '#E79191',
            }
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{
            headerStyle: {
              backgroundColor: '#E79191',
            }
          }}
        />
        <Stack.Screen
          name="Help Listings"
          component={DrawerNavigator}
          options={{ 
            title: 'Beyond Money',
            headerStyle: {
              backgroundColor: '#E79191',
            },
            headerLeft: null,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="My Listings"
          component={MyListings}
          options={{
            headerStyle: {
              backgroundColor: '#E79191',
            }
          }}
        />
        <Stack.Screen
          name="NEED A FAVOR"
          component={CreateFavor}
          options={{
            headerStyle: {
              backgroundColor: '#E79191',
            }
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: '#E79191',
            },
            headerLeft: null,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="Rating"
          component={Rating}
          options={{
            headerStyle: {
              backgroundColor: '#E79191',
            },
            headerLeft: null,
            gestureEnabled: false
          }}
        />
    </Stack.Navigator>
  );
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="Help Listings" component={HelpListings} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="My Listings" component={MyListings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

  );
}


App.navigationOptions = {
  headerLeft: () => {
    return null;
  },
  headerTitle: 'Beyond Money'
};
