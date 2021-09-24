import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Buttons from './Buttons'
import { COLORS } from '../utils/constants'


export default function Footer({handleChoice}) {
    return (
        <View style={styles.container}>
            <View style={styles.thumbsDown}>
                <Buttons name="thumbs-down" size={30} color={COLORS.nope} onPress={() => handleChoice(-1)} />
            </View>
            <View style={styles.comment}>
                <Buttons name="comment" size={30}  color={COLORS.comment} />
            </View>
            <View style={styles.nope}>
                <Buttons name="thumbs-up" size={30} color={COLORS.like} onPress={() => handleChoice(1)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 25,
        width: 250,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    thumbsDown: {
        width: 60,
        height: 60,
        borderRadius: 40,
        borderColor: '#ff006f',
        borderWidth: 3,
    },
    comment: {
        width: 60,
        height: 60,
        borderRadius: 40,
        borderColor: '#7f7f7f',
        borderWidth: 3,
    },
    nope: {
        width: 60,
        height: 60,
        borderRadius: 40,
        borderColor: '#00eda6',
        borderWidth: 3,
    }
})
