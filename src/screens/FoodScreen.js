import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default FoodScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Food Screens</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});