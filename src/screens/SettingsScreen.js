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
            <View style={styles.innerContainer}>
            <Image source={{uri: "https://pbs.twimg.com/media/EfJCviuVAAANPh0.jpg"}}
            style={styles.image}/>
            <View>
                <Text style={styles.username}>Username</Text>
                <TouchableOpacity>
                    <Text>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ marginLeft: 'auto'}}> 
            <FontAwesome5 name="arrow-right" size={20} />
            </TouchableOpacity>

            </View>


            {/* <View style={styles.button}>
                <FontAwesome5 name="user" size={30}/> 
                <Text style={styles.buttonText}>Username</Text>
                </View>
            <View style={styles.button}>
                <FontAwesome5 name="envelope" size={30}/>
                <Text style={styles.buttonText}>Email</Text></View> */}

            <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="user-circle" size={30} style={{marginRight: 10}}/> 
                <Text style={styles.buttonText}>Edit Account</Text>
                <View style={{ marginLeft: 'auto'}}> 
                <FontAwesome5 name="arrow-right" size={30} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="bell" size={30}/>
                <Text style={styles.buttonText}>Notifications</Text>
                <View style={{ marginLeft: 'auto'}}> 
                <FontAwesome5 name="arrow-right" size={30} />
                </View>
                </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="user-shield" size={30}/>
                <Text style={styles.buttonText}>Security</Text>
                <View style={{ marginLeft: 'auto'}}> 
                <FontAwesome5 name="arrow-right" size={30} />
                </View>
                </TouchableOpacity>

            <TouchableOpacity
                onPress={onPress}
                style={styles.button}>
                <FontAwesome5 name="door-open" size={30}/>
                <Text style={styles.buttonText}>Log out</Text>
                <View style={{ marginLeft: 'auto'}}> 
                <FontAwesome5 name="arrow-right" size={30} />
                </View>
            </TouchableOpacity>
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
    innerContainer: {
        top: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    image: {
        top: 25,
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: 50,
        marginRight: 15
    },
    username:{
        fontWeight: "500",
        fontSize: 15,
        color: '#808080'
    },
    arrow: {
        position: 'absolute',

    },
    button: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        // borderBottomColor: 'black',
        marginBottom: 25
    },
    buttonText: {
        fontSize: 30
    }
});
