import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Transaction from './tabScreens/Transcation';
import Account from './tabScreens/Account';
import Icon from 'react-native-vector-icons/Ionicons';
import Analytics from './tabScreens/Analytics';
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Transaction">
      <Tab.Screen
        name="Transaction"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cash" size={30} color={color} />
          ),
          tabBarActiveTintColor: '#2b9b66',
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
          tabBarActiveTintColor: '#2b9b66',
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
        }}
        name="Account"
        component={Account}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="stats-chart" size={30} color={color} />
          ),
          tabBarActiveTintColor: '#2b9b66',
          tabBarInactiveTintColor: 'gray',
        }}
        name="Analytics"
        component={Analytics}
      />
    </Tab.Navigator>
  );
}

export default Home;
