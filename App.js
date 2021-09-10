import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/Login';
import AppStackScreen from './stacks/AppStackScreen'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
        <AppStackScreen></AppStackScreen>
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
