import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FoodCard from '../components/FoodCard';
import SwipeableImage from '../components/SwipeableImage';
import BottomButtons from '../components/BottomButtons';
import Swipes from '../components/Swipes';

const FoodScreen = () => {

    return(
        <View style={styles.container}>
            <View style={styles.swipes}>
                <Swipes/>
                <BottomButtons/>
            </View>
            {/* <FoodCard/> */}

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex : 1,
        marginTop: 80,
        paddingLeft: 70,
        paddingRight: 70

    },

    swipes: {
        flex: 1,
        padding: 10,
        paddingTop: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    }
})

export default FoodScreen;
