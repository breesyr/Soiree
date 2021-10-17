import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function InfoBox() {
    return (
        <View style={styles.container}>
            <View style={styles.box} >
                <View style={styles.titleBox}>
                <Text style={styles.title}>Info</Text>
                </View>

                <View style={{padding: 30, marginTop: 5}}>
                    <Text style={{fontStyle: 'italic'}}>
                    sushi, a staple rice dish of Japanese cuisine, 
                    consisting of cooked rice flavoured with vinegar 
                    and a variety of vegetable, egg, or raw seafood garnishes and served cold. 
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        margin: 100

    },
    box: {
        backgroundColor: 'white',
        height: 200,
        width: 350, 
        flexDirection: 'row',
        borderRadius: 250,
        position: 'absolute'
        
    },
    titleBox: { 
        position: 'absolute', 
        width: 300, 
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})
