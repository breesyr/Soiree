import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Swipeable  from 'react-native-gesture-handler/Swipeable'
import SwipeableImage from './SwipeableImage'
import {RectButton} from 'react-native-gesture-handler'

export default function Swipes() {

    const renderLeftActions = () => {
        return (
            <RectButton style={styles.container}>
                <SwipeableImage/>
            </RectButton>
        )
    }
    const renderRightActions = () => {
        return (
            <RectButton style={styles.container}>
                <SwipeableImage/>
            </RectButton>

        )
    }
    return (
        <Swipeable
        friction={2}
        leftThreshold={40}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}>

            <SwipeableImage/>

        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
