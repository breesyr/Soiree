import React from 'react'
import { View, Text } from 'react-native'
import InfoBox from '../components/InfoBox'

export default function InfoScreen() {
    return (
        <View style={{backgroundColor: '#E1D5E7', flex: 2}} >
        <View style={{marginTop: 50, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setInfoModalOpen(false)}>

            <FontAwesome5 name="minus-square" 
            size={34} 
            color="#7961c2"/>

            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
                <Text style={{fontStyle: 'italic', fontSize: 20}}>close</Text>
            </View>
        </View>
        <InfoBox/>
    </View>
    )
}
