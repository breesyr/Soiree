import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function SwipeableImage() {
    return (
        <View>
            <Image source={require("../../assets/food.jpeg")} style={styles.photo}/>
            <View style={styles.textContainer}>
                <View style={styles.textRow}> 
                    <Text style={styles.textPrimary}>Sushi</Text>
                </View>

                <View style={styles.textRow}>
                <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}> Info</Text>
                        <Ionicons name="information-circle-outline" />
                    </TouchableOpacity>
                </View>
                <View style={styles.textRow}>
                    <Ionicons name="star"  style={styles.star} size={40} color={'yellow'} > </Ionicons>
                    <Ionicons name="star" style={styles.star} size={40} color={'yellow'}> </Ionicons>
                    <Ionicons name="star" style={styles.star} size={40} color={'yellow'}> </Ionicons>
                    <Ionicons name="star" style={styles.star} size={40}color={'yellow'}> </Ionicons>
                    <Ionicons name="star" style={styles.star} size={40}color={'white'}> </Ionicons>
                </View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: 500,
        width: 300,
        // height: '90%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    textContainer: {
        position: 'absolute',
        bottom: 60,
        left: 50
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 0,
        right: 40,
        

    },
    textPrimary: {
        color: 'black',
        fontSize: 25,
        marginLeft: 10,
        fontWeight: '700'
        
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10

    },
    buttonText: {
        right: -5,
        marginRight: 15,
        fontSize: 15
    }

})
