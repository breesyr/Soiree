import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Swipeable  from 'react-native-gesture-handler/Swipeable'
import SwipeableImage from './SwipeableImage'
import {RectButton} from 'react-native-gesture-handler'

function Swipes({swipesRef}) {

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
        ref={swipesRef}
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

export default React.forwardRef((props, ref) => <Swipes swipesRef={ref} {...props}></Swipes>)
