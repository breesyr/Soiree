import {View, Text, StyleSheet, Animated, PanResponder} from 'react-native';
import React, {useRef, useEffect, useState, useCallback} from 'react';
// import Container from '../components/Container';
import {place as placeArray} from '../../Data'
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import { ACTION_OFFSET, FOODCARD } from '../utils/constants';
import {API_BASE_URL, BEARER_TOKEN} from '../../yelp_api/config';

const PlacesScreen = ({location}) => {
    const [places, setPlaces] = useState([])
    const {latitude, longitude} = location;

    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current; 

    useEffect( () => {
        getBusiness();
        if (!places.length){
            setPlaces(placeArray)
        }
    }, [latitude, longitude]);

    const getBusiness = async () => {
        try{
            // Categories can be 'bars', 'restaurants', 'food'
            // Location can be 'NYC', 'CA'
            // Limit displays how many businesses you want to fetch
            const res = fetch(`${API_BASE_URL}` +
            'categories=arts' +
            '&latitude=' + (latitude) +
            '&longitude=' + (longitude) +
            '&radius=4000'+ 
            //'&location=CA' +
            '&limit=10',
                {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    Authorization: `Bearer ${BEARER_TOKEN}`,
                }
            })
            const data = (await res).json()
            data.then(jsonResponse => {
                //console.log('data: ', data);
                setPlaces(
                    jsonResponse.businesses.map(item => ({
                        id: item.id,
                        name: item.name,
                        image_url: item.image_url,
                        rating: item.rating,
                    }))
                )
            }).catch((err) => {
                console.log('error from jsonResponse: ', err);
            })
        } catch (err) {
            console.log('error: ' , err)
        }
    }

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
        setPlaces((prevState) => prevState.slice(1))
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
        {places.map( ({id, name, image_url, rating }, index) => {
            const isFirst = index === 0;
            const dragHandlers = isFirst ? panResponder.panHandlers : {}; 

            return <FoodCard 
                key={id} 
                title={name} 
                photo_url={image_url} 
                stars={rating} 
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

export default PlacesScreen;