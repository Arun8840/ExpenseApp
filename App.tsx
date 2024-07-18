import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import TransactionDetails from './Screens/TransactionDetails';
import Settings from './Screens/Account';
import CreateTransaction from './Components/CreateTransaction';
import tw from 'twrnc';
import useGetTheme from './Utility/Theme';
import FilterExpenses from './Screens/FilterExpenses';
import CreateCategory from './Components/CreateCategory';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import UpdateTransaction from './Components/UpdateTransaction';
import BudgetEdit from './Components/BudgetEdit';
import SplashScreen from './Components/SplashScreen';
const Stack = createNativeStackNavigator();
const App = (): JSX.Element => {
  const {colormain} = useGetTheme();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={tw`flex-1 bg-[#0C0C0C]`}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              options={{headerShown: false}}
              name="splash"
              component={SplashScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="welcome"
              component={Welcome}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="dashboard"
              component={Home}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#000000',
                },
                headerTitleStyle: {
                  color: 'white',
                },
                headerTintColor: colormain,
                headerBackTitle: 'Back',
              }}
              name="Transaction Details"
              component={TransactionDetails}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Settings"
              component={Settings}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#000000',
                },
                headerTitleStyle: {
                  color: 'white',
                },
                headerTintColor: colormain,
                headerBackTitle: 'Back',
              }}
              name="Transactions"
              component={FilterExpenses}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                presentation: 'formSheet',
                headerStyle: {
                  backgroundColor: colormain,
                },
              }}
              name="Create Transaction"
              component={CreateTransaction}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                presentation: 'formSheet',
                headerStyle: {
                  backgroundColor: colormain,
                },
              }}
              name="Edit Transaction"
              component={UpdateTransaction}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                presentation: 'formSheet',
                headerStyle: {
                  backgroundColor: colormain,
                },
              }}
              name="Create Category"
              component={CreateCategory}
            />

            <Stack.Screen
              options={{
                headerShown: true,
                presentation: 'formSheet',
                headerStyle: {
                  backgroundColor: colormain,
                },
              }}
              name="Set Budget"
              component={BudgetEdit}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
