
import { View, Text, StyleSheet , Dimensions, TouchableOpacity, ImageBackground} from "react-native";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


const FoodCard = () => {
    return (
        <View style={styles.cardContainer}>
            <ImageBackground
            style={styles.imageStyle} 
            source={require('../../assets/food.jpeg')}>
                <View style={styles.starContainer}>
                    <Ionicons name="star"  style={styles.star} size={40} color={'yellow'} > </Ionicons>
                    <Ionicons name="star" style={styles.star} size={40} color={'yellow'}> </Ionicons>
                    <Ionicons name="star" style={styles.star} size={40} color={'yellow'}> </Ionicons>
                    <Ionicons name="star" style={styles.star} size={40}color={'yellow'}> </Ionicons>
                    <Ionicons name="star" style={styles.star} size={40}color={'white'}> </Ionicons>
                </View>
                <View  style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text> Info</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );

};

const deviceWidth = Math.round(Dimensions.get('window').width) - 30;
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth,
        backgroundColor: 'blue',
        height: 400,
        borderRadius: 20,
        // alignContent: 'center',
        // textAlign: 'center', 
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
        

    },
    starContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop:  300,
        bottom: 0,
        marginLeft: 20
        
    },
    star: {
        
    },
    buttonContainer: {
        flex: 10
    },
    imageStyle: {
        height: 400,
        borderRadius: 30,
        width: deviceWidth,
        opacity: 0.85

    }, 
    button: {
        height: 50,
        backgroundColor: 'gray',
        marginTop: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        width: '50%',
        color: 'black',
        borderRadius: 20
       
    }

    }
);


export default FoodCard;