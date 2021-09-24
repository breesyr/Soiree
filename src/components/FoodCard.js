import React, {useCallback}from 'react'
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import { ACTION_OFFSET, FOODCARD } from '../utils/constants'
import { LinearGradient } from 'expo-linear-gradient'
import Choice from './Choice'
import {Ionicons} from '@expo/vector-icons'

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

    // const renderStars = useCallback( () => {

    //     let StarArray = []
    //     for (let x = 1; x <= stars; x++){
    //         StarArray.push(
    //             <TouchableWithoutFeedback key={x}>
    //                 <FilledStar/>
    //             </TouchableWithoutFeedback>
    //         )
    //     };

    //     let remaining = 5 - stars
    //     for (let x = 1; x <= remaining; x++){
    //         StarArray.push(
    //         <TouchableWithoutFeedback key={x}> 
    //             <EmptyStar/>
    //         </TouchableWithoutFeedback>

    //         )
    //     };


    //     return(
    //         <View>
    //             <View style={styles.starRow}>{StarArray}</View>
    //         </View>
    //     )
    // })

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
            {/* <LinearGradient colors={['transparent', 'rgba(0,0,0,0.9)']} style={styles.gradient}/> */}
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={ () => console.log("pressed")} >
                <Text style={styles.buttonText}> Info</Text>
                <Ionicons name="information-circle-outline" color={'white'} size={20} style={{marginLeft: 15}}/>
            </TouchableOpacity>

            {/* {
                renderStars()

            } */}
            <View style={styles.starRow} >
                    <Ionicons name="star"   size={30} color={'yellow'} > </Ionicons>
                    <Ionicons name="star"  size={30} color={'yellow'}> </Ionicons>
                    <Ionicons name="star"  size={30} color={'yellow'}> </Ionicons>
                    <Ionicons name="star" size={30} color={'yellow'}> </Ionicons>
                    <Ionicons name="star" size={30} color={'white'}> </Ionicons>
            </View>
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} style={styles.gradient}/>

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
        bottom: 80,
        left: 20,
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'black',
        textShadowRadius: 20

    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        borderRadius: FOODCARD.BORDER_RADIUS

    },
    buttonContainer: {
        zIndex: 1,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 60,
        left: 20,
    },
    buttonText: {
         fontWeight: 'bold',
        color: '#fff',
        fontSize: 20

    }, 
    starRow: {
        position: 'absolute',
        bottom: 30,
        left: 20,

        flexDirection: 'row',
        alignItems: 'center',
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


class FilledStar extends React.Component {

    render(){
        return <Ionicons name="star"   size={30} color={'yellow'} > </Ionicons>
    }
}

class EmptyStar extends React.Component {
    render(){
        return <Ionicons name="star"   size={30} color={'white'} > </Ionicons>
    }
}
