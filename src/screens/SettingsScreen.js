import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default BookmarkScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1D5E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
});