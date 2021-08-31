import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableWithoutFeedback, Keyboard,
    KeyboardAvoidingView } from 'react-native';


export default Login = () => {
    return(  
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style ={styles.inner}>
            <Text style ={styles.titleText}>Soiree</Text>
            <TextInput
            placeholder="username"
            style={styles.textBox}
            autoCapitalize = 'none'
            />
            <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={styles.textBox}
            />
            <Button
            title= 'Login'
            />
            <Button
            title= 'Register'
            />
        </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
      flex: 1,  
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      backgroundColor: '#E1D5E7',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    textBox: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 25,
    }
});