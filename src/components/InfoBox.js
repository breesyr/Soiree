import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { INFOBOX } from '../utils/constants'

export default function InfoBox() {
    return (
        <View style={styles.container}>
            <View style={styles.box} >
                <View style={styles.titleBox}>
                <Text style={styles.title}>I n f o</Text>
                </View>

                <View style={{padding: 30, marginTop: 5}}>
                    <Text style={{fontStyle: 'italic'}}>
                    This is just a sample description in the meantime.
                    
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        margin: 50,
        position: 'relative',

    },
    box: {
        backgroundColor: '#E1D5E7',
        height: INFOBOX.HEIGHT,
        width: INFOBOX.WIDTH, 
        flexDirection: 'row',
        borderRadius: INFOBOX.BORDER_RADIUS,
        position: 'absolute',
        borderWidth: 5,
        borderColor: "#7961c2"
        
    },
    titleBox: { 
        position: 'absolute', 
        width: 300, 
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})
