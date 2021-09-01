import {View, Text, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import BottomButtons from '../components/BottomButtons';
import Swipes from '../components/Swipes';
import Container from '../components/Container';

const FoodScreen = () => {

    const swipesRef = useRef()

    function handleLikePress(){
        swipesRef.current.openLeft()

    }

    function handlePassPress(){
        swipesRef.current.openRight()

    }

    return(
        <Container>
        <View style={styles.container}>
            <View style={styles.swipes}>
                <Swipes ref={swipesRef}/>
                <BottomButtons handleLikePress={handleLikePress} handlePassPress={handlePassPress}/>
            </View>
        </View>
        </Container>
        )

}

const styles = StyleSheet.create({

    container: {
        flex : 1,
        marginTop: 100,
        paddingLeft: 60,
        paddingRight: 60

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
