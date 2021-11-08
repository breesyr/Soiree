import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Star from 'react-native-star-view'

export default function Review() {
    return (
        <View style={styles.review}>
            <View style={styles.reviewWrapper}>
                <View style={styles.reviewTop}>
                    <View style={styles.reviewTopLeft}>
                        <Image 
                        source={{uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg'}}
                        style={styles.reviewImage}/>

                        <Text style={{fontSize: 15, marginLeft: 10, fontWeight: '500'}}>Jane Doe</Text>
                    </View>
                </View>
                <View style={styles.reviewCenter}>
                    <Star score={4} style={{width: 100, height: 20}}/>

                </View>

                <View style={styles.reviewBottom}>
                    <Text >Here is a sample review </Text>

                </View>



            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    review: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        borderColor: 'black',
        // margin: 50,
        paddingLeft: 35,
        paddingRight: 35,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        backgroundColor: '#f8f8ff',
        marginBottom: 30,

    },
    reviewWrapper: {
        padding: 10

    },
    reviewTop: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'space-between',

    },
    reviewTopLeft: {
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'row'


    },
    reviewImage : {
        width: 32,
        height: 32,
        borderRadius: 15,
    },

    reviewCenter: {
        marginTop: 10
    },
    reviewBottom: {
        marginTop: 20

    }


})

