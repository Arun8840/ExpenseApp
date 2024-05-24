import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import TransactionDetails from './Screens/TransactionDetails';
import Settings from './Screens/Settings';
import CreateTransaction from './Components/CreateTransaction';
import tw from 'twrnc';
const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#0C0C0C]`}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome">
          <Stack.Screen
            options={{headerShown: false}}
            name="welcome"
            component={Welcome}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              presentation: 'modal',
              headerStyle: {
                backgroundColor: '#DCFFB7',
              },
              headerTitleStyle: {
                color: '#0c0c0c',
              },
            }}
            name="Transaction Details"
            component={TransactionDetails}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="Settings"
            component={Settings}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              presentation: 'modal',
              headerStyle: {
                backgroundColor: '#DCFFB7',
              },
              headerTitleStyle: {
                color: '#0c0c0c',
              },
            }}
            name="Create Transaction"
            component={CreateTransaction}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
