import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'

export default AccountScreen = ({navigation}) => {

    const [fname, onChangeFname] = React.useState("first name");
    const [lname, onChangeLname] = React.useState("last name");
    const [username, onChangeUsername] = React.useState("username");
    const [email, onChangeEmail] = React.useState("email");
    const [password, onChangePassword] = React.useState();
    var verify = false;

    return(
        <View style={styles.container}>
            <Text style={{height: '6.5%'}}></Text>
            <TouchableOpacity style={{alignSelf: 'flex-start', paddingLeft: 20}} onPress={() => navigation.navigate("Settings")}> 
                <FontAwesome5 name="arrow-left" size={20} style={{color: '#7961c2'}}/>
            </TouchableOpacity>
            <Image 
                style = {styles.img}
                source = {require('../../assets/profile-picture-placeholder.png')}
            />
            <Text style={{paddingTop:30, color: '#7961c2',}}>------------------- EDIT ACOUNT ----------------------</Text>
            <View style = {{flexDirection: 'row', paddingTop: 30}}>
                <Text style = {styles.nameText}>First Name</Text>
                <Text style = {styles.nameText}>Last Name</Text>
            </View>
            <View style = {{flexDirection: 'row'}}>
                <TextInput
                    onChangeText={onChangeFname}
                    value = {fname}
                    style = {styles.nameBox}

                />
                <TextInput
                    onChangeText={onChangeLname}
                    value = {lname}
                    style = {styles.nameBox}
                />
            </View>
            <Text style = {styles.loginText}>Username</Text>
            <TextInput
                
                onChangeText={onChangeUsername}
                value = {username}
                style = {styles.loginBox}
            />
            <Text style = {styles.loginText}>
                Email&nbsp;
                <FontAwesome5 name="check" size={15} style={{color: verify ? '#1bde31':'grey'}}/>
            </Text>
            <TextInput
                onChangeText={onChangeEmail}
                value = {email}
                style = {styles.loginBox}
            />
            <Text style = {styles.loginText}>Password</Text>
            <TextInput
                secureTextEntry={true}
                value = {password}
                style = {styles.loginBox}
                onChangeText={onChangePassword}
            />
            <Text></Text>
            <TouchableOpacity style = {styles.button}>
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