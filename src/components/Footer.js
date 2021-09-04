import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Buttons from './Buttons'
import { COLORS } from '../utils/constants'


export default function Footer({handleChoice}) {
    return (
        <View style={styles.container}>
            <Buttons name="thumbs-down" size={30} color={COLORS.nope} onPress={() => handleChoice(-1)} />
            <Buttons name="comment" size={30}  color={COLORS.comment} />
            <Buttons name="thumbs-up" size={30} color={COLORS.like} onPress={() => handleChoice(1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 25,
        width: 170,
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -1

    }
})
