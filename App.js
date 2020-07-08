// @flow
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StatusBar, Button} from 'react-native';
import LunchScreen from './components/LunchScreen';
import FoodScreen from './components/FoodScreen';
import HeaderLanding from './components/~common/HeaderLanding';
import HeaderFood from './components/~common/HeaderFood';
import CartScreen from './components/CartScreen';

import DrawerContainer from './components/~common/TestComp';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContainer {...props} />}>
          <Drawer.Screen name="Home" component={Root} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

function Root() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: null,
      }}>
      <Stack.Screen
        name="LunchScreen"
        component={LunchScreen}
        options={{headerTitle: (props) => <HeaderLanding {...props} />}}
      />
      <Stack.Screen
        name="FoodScreen"
        component={FoodScreen}
        options={{headerTitle: (props) => <HeaderFood {...props} />}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerTitle: (props) => <HeaderFood {...props} />}}
      />
    </Stack.Navigator>
  );
}

export default App;
