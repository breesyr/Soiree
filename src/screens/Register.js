import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default Register = () => {
    return(
        <View style={styles.container}>
            <Text>Register Screen</Text>
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