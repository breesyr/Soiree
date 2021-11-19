import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Switch, ScrollView} from 'react-native';
import { FirebaseContext } from '../../context/FirebaseContext';
import  {UserContext} from '../../context/UserContext';
import { useContext } from 'react';
import {FontAwesome5} from '@expo/vector-icons'



export default SettingsScreen = ({navigation}) => {

    const [user, setUser] = useState([]); 
    const firebase = useContext(FirebaseContext);

    const [loggedUser, setLoggedUser] = useContext(UserContext);
    
    const [isEnabled, setIsEnabled] = useState(false);
    const [isPushed, setIsPushed] = useState(false);
    const[isLocated, setIsLocated] = useState(false); 
    
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsPushed(previousState => !previousState);
    const toggleSwitch2 = () => setIsLocated(previousState => !previousState);


    useEffect(() =>{

        const getUserASAP = async () => {
            try{
    
                const uid = firebase.getCurrentUser().uid;
                const userInfo = await firebase.getUserInfo(uid);    
                setUser(userInfo);

                console.log(user)
            }
    
            catch(err){
                console.log('no worky', err.message)
            }
    
        }
        getUserASAP()
    },[]);


    const onPress = async () => {
            const logOut = await firebase.logOut();

            if (logOut){
                setLoggedUser((state) => ({...state, isLoggedIn : false})); 

            }
    };

    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={{uri: "https://pbs.twimg.com/media/EfJCviuVAAANPh0.jpg"}}
                style={styles.image}/>
                <View>
                    {/* <Text style={styles.username}>Patrick's Settings</Text> */}
                    <Text style={styles.username}>{user?.username}'s Settings</Text>
                    {/* <Text style={styles.username, {fontSize: 12}}>Email</Text>
                    <Text style={styles.email}>{user?.email}</Text>
                    <TouchableOpacity>
                        <Text>View Profile</Text>
                    </TouchableOpacity> */}
                </View>
            </View>

            
            {/* <View style={styles.button}>
                <FontAwesome5 name="user" size={30}/> 
                <Text style={styles.buttonText}>Username</Text>
                </View>
            <View style={styles.button}>
                <FontAwesome5 name="envelope" size={30}/>
                <Text style={styles.buttonText}>Email</Text></View> */}
            <View style={{flex: 1}}>
                <ScrollView scrollEnabled={true}> 

                    <View style={{marginBottom: 10}}>
                        <Text style={{color: '#808080'}}>ACCOUNT</Text>
                    </View>


                    <View style={styles.accountDisplay} >

                        <View style={styles.accountTextField}>
                            <View >
                                <Text style={{fontWeight: 'bold'}}>First Name: </Text>
                            </View>

                            <View >
                                <Text style={{fontStyle: 'italic'}}>{user?.firstName}</Text>
                            </View>
                        </View>

                        <View style={styles.accountTextField}>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>Last Name: </Text>
                            </View>

                            <View>
                                <Text style={{fontStyle: 'italic'}}>{user?.lastName} </Text>
                            </View>
                        </View>

                        <View style={styles.accountTextField}>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>Email: </Text>
                            </View>

                            <View>
                                <Text style={{fontStyle: 'italic'}}>{user?.email}</Text>
                            </View>
                        </View>

                    </View> 

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Account")}>
                        <FontAwesome5 name="user-circle" size={20} style={{marginRight: 10}} color="#7961c2"/> 
                        <Text style={styles.buttonText}>Edit Account</Text>
                        <View style={{ marginLeft: 'auto'}}> 
                            <FontAwesome5 name="arrow-right" size={20} />
                        </View>
                    </TouchableOpacity>

                    <View style={{marginBottom: 10}}>
                        <Text style={{color: '#808080'}}>PREFERENCES</Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Preference")}>
                        <FontAwesome5 name="utensils" size={20} style={{marginRight: 10}} color="#7961c2"/> 
                        <Text style={styles.buttonText}>Food preferences</Text>
                        <View style={{ marginLeft: 'auto'}}> 
                            <FontAwesome5 name="arrow-right" size={20} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Preference")}>
                        <FontAwesome5 name="walking" size={20} style={{marginRight: 10}} color="#7961c2"/> 
                        <Text style={styles.buttonText}>Activities preferences</Text>
                        <View style={{ marginLeft: 'auto'}}> 
                            <FontAwesome5 name="arrow-right" size={20} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Preference")}>
                        <FontAwesome5 name="map-marked" size={20} style={{marginRight: 10}} color="#7961c2"/> 
                        <Text style={styles.buttonText}>Places preferences</Text>
                        <View style={{ marginLeft: 'auto'}}> 
                            <FontAwesome5 name="arrow-right" size={20} />
                        </View>
                    </TouchableOpacity>


                    <View style={{marginBottom: 10}}>
                        <Text style={{color: '#808080'}}>NOTIFICATIONS</Text>
                    </View>
                    
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Push notifications</Text>
                        <View style={{marginLeft: 'auto'}}>
                            <Switch 
                            onValueChange={toggleSwitch1}
                            value={isPushed} /> 
                        </View>

                    </View>

                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Email notifications</Text>
                        <View style={{marginLeft: 'auto'}}>
                            <Switch
                            onValueChange={toggleSwitch}
                            value={isEnabled}  /> 
                        </View>

                    </View>

                    <View style={{marginBottom: 10}}>
                        <Text style={{color: '#808080'}}>LOCATION SERVICES</Text>
                    </View>

                    <View style={styles.button}>
                        <FontAwesome5 name="location-arrow" size={18} style={{marginRight: 10}}  color="#7961c2"/>
                        <Text style={styles.buttonText}>Turn on location</Text>
                        <View style={{ marginLeft: 'auto'}}> 
                            <Switch
                            onValueChange={toggleSwitch2}
                            value={isLocated} />
                            {/* <FontAwesome5 name="arrow-right" size={30} /> */}
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <FontAwesome5 name="user-shield" size={20} style={{marginRight: 10}}  color="#7961c2"/>
                        <Text style={styles.buttonText}>Security</Text>
                        <View style={{ marginLeft: 'auto'}}> 
                            <FontAwesome5 name="arrow-right" size={20} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.button}>
                        <FontAwesome5 name="door-open" size={20} style={{marginRight: 10}}  color="#7961c2"/>
                        <Text style={styles.buttonText}>Log out</Text>
                        <View style={{ marginLeft: 'auto'}}> 
                            <FontAwesome5 name="arrow-right" size={20} />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>


        </View>


    
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E1D5E7',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    innerContainer: {     
        paddingTop: 15, 
        display: 'flex',
        // flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    image: {
        top: 25,
        height: 150,
        width: 150,
        borderRadius: 50,
        marginBottom: 50,
        marginRight: 15
    },
    username:{
        fontWeight: "500",
        fontSize: 25,
        color: '#808080',
        marginBottom: 5
    },
    email: {
        fontWeight: "500",
        fontSize: 12,
        color: '#808080',

    },
    arrow: {
        position: 'absolute',

    },
    accountDisplay: {
        backgroundColor: 'white',
        height: 100,
        // width: 200, 
        borderRadius: 50,
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 30,
    },
    accountTextField: {
        display: 'flex',
        flexDirection: 'row',
        left: 15,
        marginBottom: 5
    },
    accountText: {
        marginBottom: 10,
        left: 20, 
        fontWeight: "200",
        fontSize: 15,
        flexDirection: 'row'
    },
    button: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#808080',
        marginBottom: 25
    },
    buttonText: {
        fontSize: 20,
        color: "#7961c2"
    }
});
