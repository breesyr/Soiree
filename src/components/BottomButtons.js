import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';


export default function BottomButtons({handleLikePress, handlePassPress}) {
    return (
        <View style={styles.container}>
            <View/>
            <TouchableOpacity style={styles.button} onPress={handlePassPress}>
                <FontAwesome name="thumbs-down" size={30} color="#cc0000"> </FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <FontAwesome name="comment" size={30} color="#7f7f7f"> </FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLikePress}>
                <FontAwesome name="thumbs-up" size={30} color="#7fbf7f"> </FontAwesome>
            </TouchableOpacity>
            <View/>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        width: 55,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
