import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import TransactionDetails from './Screens/TransactionDetails';
import Settings from './Screens/Settings';
const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
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
            options={{headerShown: true}}
            name="Transaction Details"
            component={TransactionDetails}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
