import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { INFOBOX } from '../utils/constants'

export default function ReviewBox() {
    return (
        <View style={styles.container}>
            <View style={{padding: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Write a Review</Text>
            </View>

            <View style={styles.box}>
                <View style={{marginTop: 5, padding: 20}}>
                <TextInput
                placeholder="Enter your review here"
                multiline
                />
                </View>

            </View>

            <View style={{marginTop: 30}}> 
                <TouchableOpacity style={styles.button} >
                    <Text style={{color: 'white'}}> Submit Review</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {

        // alignItems: 'center',
        // margin: 100,
        // flex: 3, 
        // position: 'relative',
        // // justifyContent: 'flex-start'
        position: 'absolute', 
        marginTop: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingLeft: 20,
        paddingTop: 20
        
    },
    box: {
        
        backgroundColor: '#E1D5E7',
        height: INFOBOX.HEIGHT,
        width: INFOBOX.WIDTH, 
        // flexDirection: 'row',
        borderRadius: INFOBOX.BORDER_RADIUS,
        // position: 'relative',
        borderWidth: 5,
        borderColor: "#7961c2"
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#7961c2',
        padding: 10,
        borderWidth: 2,
        borderRadius: 30,
        overlayColor: '#E1D5E7',
        borderColor: '#E1D5E7',
    
    }

})
