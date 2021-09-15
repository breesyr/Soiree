import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';

import { FirebaseContext } from '../../context/FirebaseContext';
import {UserContext} from '../../context/UserContext';

export default Register = ({navigation}) => {
    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const firebase = useContext(FirebaseContext);
    const [_, setUser] = useContext(UserContext);

    const signUp = async () => {
        const user = { firstName, lastName, username, email, password};

        try{
            const createUser = await firebase.createUser(user);
            setUser({...createUser, isLoggedIn: true})

        }catch(error){
            console.log("Error @signUp: ", error);
        }
    };

    return(
        <View style = {styles.container}>
            <Text style = {styles.logo}>
                {/* <Image 
                    style = {styles.img}
                    source = {require('./turtle.png')}
                /> */}
                Soiree
            </Text>
            <View style = {{flexDirection: 'row'}}>
            <TextInput
                placeholder = "first name"
                style = {styles.nameBox}
                onChangeText={(firstName) => setFirstName(firstName.trim())}

            />
            <TextInput
                placeholder = "last name"
                style = {styles.nameBox}
                onChangeText={(lastName) => setLastName(lastName.trim())}
            />
            </View>
            <TextInput
                placeholder = "username"
                style = {styles.loginBox}
                onChangeText={(username) => setUsername(username.trim())}
            />
            <TextInput
                placeholder = "email"
                style = {styles.loginBox}
                onChangeText={(email) => setEmail(email.trim())}
            />
            <TextInput
                placeholder = "passsword"
                style = {styles.loginBox}
                onChangeText={(password) => setPassword(password.trim())}
            />
            {/* <TextInput
                placeholder = " confirm passsword"
                style = {styles.loginBox}
            /> */}
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style = {styles.text}>Already registered? Click here to login</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button} onPress={signUp}>
                <Text style = {styles.text}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1D5E7'
    },
    nameBox: {
        height: 40,
        width: 138,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        color: 'black',
    },
    loginBox: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        color: 'black',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#E1D5E7',
        padding: 10,
    },
    logo: {
        fontSize: 32,
        color: 'black',
    },
    text: {
        color: 'black',
    },
    img: {
        height: 50,
        width: 50,
    },
});