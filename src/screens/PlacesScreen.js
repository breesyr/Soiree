import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default PlacesScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Places Screen</Text>
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