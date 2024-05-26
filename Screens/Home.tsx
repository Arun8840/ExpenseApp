import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Transaction from './tabScreens/Transcation';
import Account from './tabScreens/Account';
import Icon from 'react-native-vector-icons/Ionicons';
import Analytics from './tabScreens/Analytics';
import Settings from '../Screens/Settings';
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0C0C0C',
          padding: 3,
          borderTopColor: 'black',
          minHeight: 50,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={30} color={color} />
          ),
          tabBarActiveTintColor: '#DCFFB7',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
        component={Transaction}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" size={30} color={color} />
          ),
          tabBarActiveTintColor: '#DCFFB7',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
        name="Account"
        component={Account}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="stats-chart" size={30} color={color} />
          ),
          tabBarActiveTintColor: '#DCFFB7',
          tabBarInactiveTintColor: 'gray',
        }}
        name="Categories"
        component={Analytics}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" size={30} color={color} />
          ),
          tabBarActiveTintColor: '#DCFFB7',
          tabBarInactiveTintColor: 'gray',
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}

export default Home;
