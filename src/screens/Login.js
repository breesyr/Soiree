import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableWithoutFeedback, Keyboard,
    KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import { FirebaseContext } from '../../context/FirebaseContext';
import {UserContext} from '../../context/UserContext';

export default Login = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const firebase = useContext(FirebaseContext);
    const [_, setUser] = useContext(UserContext);

    const signIn = async () => {

        try {
            await firebase.signIn(email, password);

            const uid = firebase.getCurrentUser().uid;

            const userInfo = await firebase.getUserInfo(uid);

            setUser({
                username: userInfo.username,
                email: userInfo.email,
                uid,
                //profilePhotoUrl: userInfo.profilePhotoUrl,
                isLoggedIn: true,
            });
        } catch (error) {
            alert(error.message);
        } 
    };


    return(  
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style ={styles.inner}>
            <Text style ={styles.titleText}>Soiree</Text>
            <TextInput
            placeholder="email"
            onChangeText={setEmail}
            style={styles.textBox}
            autoCapitalize = 'none'
            value={email}
            />
            <TextInput
            secureTextEntry={true}
            placeholder="password"
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.textBox}
            autoCapitalize = 'none'
            value={password}
            />
            <TouchableOpacity style = {styles.button} onPress={signIn}>
                <Text >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button2} onPress={() => navigation.navigate("Register")}>
                <Text >Don't have an account? Click here to Register</Text>
            </TouchableOpacity>
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
        fontSize: 32,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#dab4ed',
        padding: 10,
        height: 40,
        width: 100,
        borderWidth: 1,
        
    },
    button2: {
        alignItems: 'center',
        //backgroundColor: '#E1D5E7',
        padding: 10,
        
        
    },
});