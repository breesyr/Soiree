import React, {useCallback}from 'react'
import { View, Text, Image, StyleSheet, Animated } from 'react-native'
import { ACTION_OFFSET, FOODCARD } from '../utils/constants'
import { LinearGradient } from 'expo-linear-gradient'
import Choice from './Choice'

export default function FoodCard({foodId, title, photo_url, stars, isFirst, swipe, tiltSign, ...rest}) {

    
    const rotate= Animated.multiply(swipe.x, tiltSign).interpolate({
        inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
        outputRange: ['8deg', '0deg', '-8deg']
    });

    const likeOpacity = swipe.x.interpolate({
        inputRange: [25, ACTION_OFFSET],
        outputRange: [0, 1],
        extrapolate: 'clamp'

    });
    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-ACTION_OFFSET, -25],
        outputRange: [1, 0],
        extrapolate: 'clamp'

    });

    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), {rotate}]
    };

    const renderChoice = useCallback( () => {
        return (
        <>
        <Animated.View style={[styles.likeContainer, {opacity: likeOpacity}]}>
            <Choice type="like"/>
        </Animated.View>


        <Animated.View style={[styles.dislikeContainer, {opacity: nopeOpacity}]}>
            <Choice type="nope"/>
        </Animated.View>
        </>
        )

    }, [likeOpacity, nopeOpacity]);



    return (
        <Animated.View style={[styles.container, isFirst && animatedCardStyle]} {...rest}>
            <Image source={{uri: photo_url}} style={styles.image}/>
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.9)']} style={styles.gradient}/>
            <Text style={styles.title}>{title}</Text>

            {
                isFirst && renderChoice()
            }
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 85, 

    },
    image: {
        width: FOODCARD.WIDTH,
        height: FOODCARD.HEIGHT,
        borderRadius: FOODCARD.BORDER_RADIUS
    },
    title: {
        position: 'absolute',
        bottom: 22,
        left: 22,
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff'

    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        borderRadius: FOODCARD.BORDER_RADIUS

    },
    // choiceContainer:{
    //     position: 'absolute',
    //     top: 100
    // },
    likeContainer: {
        position: 'absolute',
        top: 100,
        left: 45,
        transform: [{rotate: '-30deg'}]
    },
    dislikeContainer: {
        position: 'absolute',
        top: 100,
        right: 45, 
        transform: [{rotate: '30deg'}]
    }
})
