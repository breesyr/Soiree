import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image} from 'react-native';
import { FirebaseContext } from '../../context/FirebaseContext';
import  {UserContext} from '../../context/UserContext';
import { useContext } from 'react';

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
            <Image source={{uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20120721171708%2Fspongebob%2Fimages%2Fc%2Fce%2FBoys_Who_Cray.PNG&f=1&nofb=1"}}
            style={styles.image}/>
            <TouchableOpacity><Text>Username</Text></TouchableOpacity>
            <TouchableOpacity><Text>Email</Text></TouchableOpacity>
            <TouchableOpacity><Text>Account</Text></TouchableOpacity>
            <TouchableOpacity><Text>Notifications</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={onPress}>
                <Text>Log out</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E1D5E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        top: 0,
        borderRadius: 50
    }
});
