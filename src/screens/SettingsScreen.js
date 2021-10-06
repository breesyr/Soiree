import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image} from 'react-native';
import { FirebaseContext } from '../../context/FirebaseContext';
import  {UserContext} from '../../context/UserContext';
import { useContext } from 'react';
import {FontAwesome5} from '@expo/vector-icons'


export default SettingsScreen = () => {

    const [user, setUser] = useContext(UserContext); 
    const firebase = useContext(FirebaseContext);

    const onPress = async () => {
            const logOut = await firebase.logOut();

            if (logOut){
                setUser((state) => ({...state, isLoggedIn : false})); 

            }
    };
    return(
        <View style={styles.container}>
            <Image source={{uri: "https://pbs.twimg.com/media/EfJCviuVAAANPh0.jpg"}}
            style={styles.image}/>
            <View style={styles.button}>
                <FontAwesome5 name="user" size={30}/> 
                <Text style={styles.buttonText}>Username</Text>
                </View>
            <View style={styles.button}>
                <FontAwesome5 name="envelope" size={30}/>
                <Text style={styles.buttonText}>Email</Text></View>

            <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="user-circle" size={30}/> 
                <Text style={styles.buttonText}>Account</Text></TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="bell" size={30}/>
                <Text style={styles.buttonText}>Notifications</Text></TouchableOpacity>

            <TouchableOpacity
                onPress={onPress}
                style={styles.button}>
                <FontAwesome5 name="door-open" size={30}/>
                <Text style={styles.buttonText}>Log out</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E1D5E7',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        top: 25,
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 50
    },
    button: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor: 'black',
        marginBottom: 5
    },
    buttonText: {
        fontSize: 30
    }
});
