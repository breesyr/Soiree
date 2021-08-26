import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';

export default Register = () =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.logo}>
                <Image 
                    style = {styles.img}
                    source = {require('./turtle.png')}
                />
                Soiree
            </Text>
            <View style = {{flexDirection: 'row'}}>
            <TextInput
                placeholder = "first name"
                style = {styles.nameBox}

            />
            <TextInput
                placeholder = "last name"
                style = {styles.nameBox}
            />
            </View>
            <TextInput
                placeholder = "email"
                style = {styles.loginBox}
            />
            <TextInput
                placeholder = "username"
                style = {styles.loginBox}
            />
            <TextInput
                placeholder = "passsword"
                style = {styles.loginBox}
            />
            <TextInput
                placeholder = " confirm passsword"
                style = {styles.loginBox}
            />
            <Text style = {styles.text}>Already registered? Click here to login</Text>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.text}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'deepskyblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nameBox: {
        height: 40,
        width: 138,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        color: 'white',
    },
    loginBox: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        color: 'white',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'deepskyblue',
        padding: 10,
    },
    logo: {
        fontSize: 32,
        color: 'white',
    },
    text: {
        color: 'white',
    },
    img: {
        height: 50,
        width: 50,
    },
  });