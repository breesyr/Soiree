import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Platform} from 'react-native';
import { FirebaseContext } from '../../context/FirebaseContext';
import  {UserContext} from '../../context/UserContext';
import { useContext } from 'react';
import {FontAwesome5} from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default AccountScreen = ({navigation}) => {

    const firebase = useContext(FirebaseContext);

    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [profilePhoto, setProfilePhoto] = useState();
    var verify = false;
    const [hidepass, setHidepass] = useState();

    useEffect(() =>{

        const getUser = async () => {
            try{
    
                const uid = firebase.getCurrentUser().uid;
                const userInfo = await firebase.getUserInfo(uid);    
                setFname(userInfo.firstName);
                setLname(userInfo.lastName);
                setUsername(userInfo.username);
                setEmail(userInfo.email);
                setPassword(userInfo.password);
                setProfilePhoto(userInfo.profilePhotoUrl);

                setHidepass(true);

                console.log('Account\n', userInfo)
            }
    
            catch(err){
                console.log('error getting user', err.message)
            }
    
        }
        getUser()
    },[]);  

    const updateUser = async () => {
        const user = { fname, lname, username, email, password};

        try{
            const update = firebase.setUserInfo(user);

        }catch(error){
            console.log("Error @setUserInfo: ", error);
        }
    };
    const showpass = async () => {
        if(hidepass)
        {
            setHidepass(false);
        }
        else
        {
            setHidepass(true);
        }
        
    };
    const getPermission = async () =>{
        if(Platform.OS != "web")
        {
            const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
            return status;
        }
    };
    const pickImage = async () => {
        try 
        {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            });

            if (!result.cancelled) 
            {
                setProfilePhoto(result.uri);
            }
        } catch (error) {
            console.log("Error @pickImage: ", error);
        }
    };
    const addProfilePhoto = async () => {
        const status = await getPermission();

        if (status !== "granted") 
        {
            alert("We need permission to access your camera roll.");
            return;
        }
        pickImage();
    };

    return(
        <View style={styles.container}>
            <Text style={{height: '6.5%'}}></Text>
            <TouchableOpacity style={{alignSelf: 'flex-start', paddingLeft: 20}} onPress={() => navigation.navigate("Settings")}> 
                <FontAwesome5 name="arrow-left" size={20} style={{color: '#7961c2'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={(addProfilePhoto)}>
                <Image 
                    style = {styles.img}
                    source = {{uri: profilePhoto}}
                />
            </TouchableOpacity>
            <Text style={{paddingTop:30, color: '#7961c2',}}>------------------- EDIT ACOUNT ----------------------</Text>
            <View style = {{flexDirection: 'row', paddingTop: 30}}>
                <Text style = {styles.nameText}>First Name</Text>
                <Text style = {styles.nameText}>Last Name</Text>
            </View>
            <View style = {{flexDirection: 'row'}}>
                <TextInput
                    onChangeText={setFname}
                    value = {fname}
                    style = {styles.nameBox}

                />
                <TextInput
                    onChangeText={setLname}
                    value = {lname}
                    style = {styles.nameBox}
                />
            </View>
            <Text style = {styles.loginText}>Username</Text>
            <TextInput
                
                onChangeText={setUsername}
                value = {username}
                style = {styles.loginBox}
            />
            <Text style = {styles.loginText}>
                Email&nbsp;
                <FontAwesome5 name="check" size={15} style={{color: verify ? '#1bde31':'grey'}}/>
            </Text>
            <TextInput
                onChangeText={setEmail}
                value = {email}
                style = {styles.loginBox}
            />
            <View style = {{flexDirection: 'row'}}>
            <Text style = {styles.passtext}>Password</Text>
            <TouchableOpacity style = {styles.pass} onPress={showpass}>
                    <FontAwesome5 name= {hidepass ? "eye":"eye-slash"} size={15} style={{color: "black"}}/>
                </TouchableOpacity>
            </View>
            <TextInput
                secureTextEntry={hidepass}
                value = {password}
                style = {styles.loginBox}
                onChangeText={setPassword}
            />
            <Text></Text>
            <TouchableOpacity style = {styles.button} onPress={updateUser}>
                <Text style = {{color: '#E1D5E7'}}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1D5E7',
        alignItems: 'center',
    },
    img: {
        height: 125,
        width: 125,
        borderWidth:5,
        borderColor: '#7961c2',
        borderRadius: 60,
    },
    nameBox: {
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#7961c2',
        color: '#7961c2',
    },
    nameText: {
        width: 150,
        marginLeft: 12,
        marginRight: 12,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7961c2',
        fontWeight: 'bold',
    },
    loginBox: {
        height: 40,
        width: 324,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#7961c2',
        color: '#7961c2',
    },
    loginText: {
        paddingTop: 15,
        width: 324,
        marginLeft: 12,
        marginRight: 12,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7961c2',
        fontWeight: 'bold',
    },
    passtext: {
        paddingTop: 15,
        width: 71,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7961c2',
        fontWeight: 'bold'
    },
    pass: {
        paddingTop: 15,
        width: 30,
        marginRight: 220,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#7961c2',
        padding: 10,
        borderWidth: 2,
        borderRadius: 30,
        overlayColor: '#E1D5E7',
        borderColor: '#E1D5E7',
    },
});