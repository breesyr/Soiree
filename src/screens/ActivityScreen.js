import {View, Text, StyleSheet, Animated, PanResponder} from 'react-native';
import React, {useRef, useEffect, useState, useCallback} from 'react';
// import Container from '../components/Container';
import {activities as activitiesArray} from '../../Data'
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import { ACTION_OFFSET, FOODCARD } from '../utils/constants';


const ActivityScreen = () => {
    const [activity, setActivity] = useState([])

    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current; 

    useEffect( () => {
        if (!activity.length){
            setActivity(activitiesArray)
        }
    }, [activity.length]);

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, {dx,dy, y0}) => {
            swipe.setValue({x: dx, y: dy});
            tiltSign.setValue(y0 > FOODCARD.HEIGHT/2 ? 1: -1)
        },
        onPanResponderRelease: (_,{dx,dy}) => {

            const direction = Math.sign(dx);
            const isActionActive = Math.abs(dx) > ACTION_OFFSET;

            if (isActionActive){
                Animated.timing(swipe, {
                    duration: 200,
                    toValue: {
                        x: direction * FOODCARD.OUT_OF_SCREEN,
                        y: dy,
                    },
                    useNativeDriver: true,
                }).start(removeTopCard);

            } else{

                Animated.spring(swipe, {
                    toValue: {
                        x: 0,
                        y: 0, 
                    },
                    useNativeDriver: true,
                    friction: 5,
                }).start();
            }
        },
    });

    const removeTopCard = useCallback( () => {
        setActivity((prevState) => prevState.slice(1))
        swipe.setValue({x: 0, y: 0})
    }, [swipe]);

    const handleChoice = useCallback((direction) => {
        Animated.timing(swipe.x, {
            toValue: direction * FOODCARD.OUT_OF_SCREEN,
            duration: 400,
            useNativeDriver: true,
        }).start(removeTopCard);

    }, [removeTopCard, swipe.x]);

 


    return(
        <View style={styles.container}>
        {activity.map( ({activityId, title, photo_url, stars }, index) => {
            const isFirst = index === 0;
            const dragHandlers = isFirst ? panResponder.panHandlers : {}; 

            return <FoodCard 
                key={activityId} 
                title={title} 
                photo_url={photo_url} 
                stars={stars} 
                isFirst={isFirst}
                swipe={swipe}
                tiltSign={tiltSign}
                 {...dragHandlers}/>

        }).reverse()}

        <Footer handleChoice={handleChoice}/>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E1D5E7',
        alignItems: 'center'
    },
})

export default ActivityScreen;