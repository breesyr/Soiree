import React, {useRef, useCallback} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'

export default function Buttons({name, size, color, onPress}) {

    const scale= useRef(new Animated.Value(1)).current;

    const animateScale= useCallback((newValue) => {
        Animated.spring(scale, {
            toValue: newValue,
            friction: 4,
            useNativeDriver: true,
        }).start()
    }, [scale])


    return (
       <TouchableOpacity 
       onPressIn={ () => animateScale(0.8)} 
       delayPressIn={0}
       onPressOut={ () => {
           animateScale(1)
            onPress();
        }}
       delayPressOut={110}>
           <Animated.View style={[styles.container, {transform: [{scale}]}]}>
               <FontAwesome5 name={name} size={size}  color={color}/>
           </Animated.View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 70,
        height: 70,
        backgroundColor: '#8A2BE2',
        elevation: 5,
        borderRadius: 40,
        justifyContent: 'center',
        // alignItems: 'center'

    }

})