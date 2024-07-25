import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Transaction from './tabScreens/Transcation';
import Icon from 'react-native-vector-icons/Ionicons';
import FetherIcon from 'react-native-vector-icons/Feather';
import Analytics from './tabScreens/Analytics';
import Limiter from './tabScreens/Limiter';
import ExpenseAccount from './ExpenseAccount';
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
            <FetherIcon name="sliders" size={30} color={color} />
          ),
          tabBarActiveTintColor: '#DCFFB7',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
        name="Budgets"
        component={Limiter}
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
        name="Account"
        component={ExpenseAccount}
      />
    </Tab.Navigator>
  );
}

export default Home;
