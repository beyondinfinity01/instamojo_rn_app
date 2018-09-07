/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import WebView from './src/WebView';




const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Webview: WebView,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
