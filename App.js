import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/Login';
import MainStackScreen from './stacks/MainStackScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './navigator/AppNavigator';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
        <MainStackScreen></MainStackScreen>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
