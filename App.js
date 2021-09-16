import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/Login';
import AuthStackScreen from './stacks/AuthStackScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { UserProvider } from './context/UserContext';
import { FirebaseProvider } from './context/FirebaseContext';

export default function App() {
  return (
    <FirebaseProvider>
      <UserProvider>
        <NavigationContainer>
            <AuthStackScreen></AuthStackScreen>
        </NavigationContainer>
      </UserProvider>
    </FirebaseProvider>
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
