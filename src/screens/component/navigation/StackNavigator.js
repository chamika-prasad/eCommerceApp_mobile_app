/* eslint-disable prettier/prettier */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductList from '../../productlist.js';
import Login from '../../login.js';
import Signup from '../../signup.js';
import Splash_screen from '../../splash_screen.js';
import Product from '../../product.js';
import Cart from '../../cart.js';
import Logout from '../../logout';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'ProductList') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Logout') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="ProductList" component={ProductList} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
};

const StackNaviagtor = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splash_screen">
        <Stack.Screen
          name="Splash_screen"
          component={Splash_screen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Product"
          component={Product}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNaviagtor;
