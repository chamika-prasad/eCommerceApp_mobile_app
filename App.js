/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login.js';
import Signup from './src/screens/signup.js';
import Splash_screen from './src/screens/splash_screen.js';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
//import ProductList from './src/screens/productlist.js';
import Product from './src/screens/product.js';
import TabNavigation from './src/screens/component/navigation/StackNavigator.js';
import StackNaviagtor from './src/screens/component/navigation/StackNavigator.js';
import { Provider } from 'react-redux';
import {Store} from './src/redux/store/store'
const Stack = createNativeStackNavigator();

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
function App() {
  return (
    <Provider store={Store}>
    <GestureHandlerRootView style={{flex: 1}}>
      <StackNaviagtor />
    </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
