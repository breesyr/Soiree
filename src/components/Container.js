import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


export default function Container({children}) {
    return (
        <LinearGradient colors={['#ad1deb','#6e72fc']}
        style={styles.gradient}>
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>

        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    },
    container:{
        flex: 1,
        marginHorizontal: 5
    }

})
