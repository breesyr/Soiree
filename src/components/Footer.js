import React, {useState} from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import Buttons from './Buttons'
import { COLORS } from '../utils/constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {FontAwesome5} from '@expo/vector-icons'


export default function Footer({handleChoice}) {

    const [ReviewModalOpen, setReviewModalOpen] = useState(false); 

    return (
        <View style={styles.container}>
            <View style={styles.thumbsDown}>
                <Buttons name="thumbs-down" size={30} color={COLORS.nope} onPress={() => handleChoice(-1)} />
            </View>

            <Modal visible={ReviewModalOpen} animationType="slide">
                <View style={{backgroundColor: '#E1D5E7', flex: 1}} >
                    <View style={{marginTop: 50, flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => setReviewModalOpen(false)}>

                            <FontAwesome5 name="minus-square" 
                            size={34} 
                            color="#7961c2"/>

                            </TouchableOpacity>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontStyle: 'italic', fontSize: 20}}>close</Text>
                            </View>
                    </View>

                    <View style={{padding: 15, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 30}}>Write a Review</Text>
                    </View>



                </View> 


            </Modal>

            <TouchableOpacity onPress={() => setReviewModalOpen(true)}>
                <View style={styles.comment}>
                    <View style={styles.buttonContainer}>
                        <FontAwesome5 name="comment" size={30} color={COLORS.comment}/>
                    </View>
                </View>
            </TouchableOpacity>
            {/* <View style={styles.comment}>
                <Buttons name="comment" size={30}  color={COLORS.comment} />
            </View> */}
            <View style={styles.like}>
                <Buttons name="thumbs-up" size={30} color={'#66CD00'} onPress={() => handleChoice(1)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 25,
        width: 250,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    thumbsDown: {
        width: 60,
        height: 60,
        borderRadius: 40,
        borderColor: '#ff006f',
        borderWidth: 3,
    },
    comment: {
        width: 60,
        height: 60,
        borderRadius: 40,
        borderColor: '#7f7f7f',
        borderWidth: 3,
    },
    like: {
        width: 60,
        height: 60,
        borderRadius: 40,
        borderColor: '#66CD00',
        borderWidth: 3,
    },
    buttonContainer:{
        //width: 50,
        height: 50,
        //backgroundColor: '#E1D5E7',
        elevation: 5,
        //borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
