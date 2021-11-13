import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import InfoBox from '../components/InfoBox'
import {FontAwesome5} from '@expo/vector-icons' 
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {pictures} from '../../Data.js'
const {Dimensions} = require('react-native')
import Review from '../components/Review';
import {reviews} from '../../Data.js'


export default function InfoScreen({navigation}) {
    const { width } = Dimensions.get('window');
    const [indexSelected, setIndexSelected] = useState(0);

    const onSelect = indexSelected => {
        setIndexSelected(indexSelected);
    }

    return (
        <View style={{backgroundColor: '#E1D5E7', flex: 2}} >
        <View style={{marginTop: 50, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Food")}>

            <FontAwesome5 name="minus-square" 
            size={34} 
            color="#7961c2"/>

            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
                <Text style={{fontStyle: 'italic', fontSize: 20}}>close</Text>
            </View>
        </View>
            <View style={{ height: 250,  marginTop: 20 }}>
                <Carousel
                    layout='default'
                    data={pictures}
                    sliderWidth={width}
                    itemWidth={width}
                    onSnapToItem={index => onSelect(index)}
                    renderItem={({ item, index }) => (
                    <Image
                        key={index}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='contain'
                        source={{uri : item.url}}
                    />
                    )}
                />
                  <Pagination
                    inactiveDotColor='gray'
                    dotColor={'orange'}
                    activeDotIndex={indexSelected}
                    dotsLength={pictures.length}
                    animatedDuration={150}
                    inactiveDotScale={1}
                />
            </View>
        <View style={{flex: 1}}>
            <ScrollView scrollEnabled={true}>

                <InfoBox/>
                <View style={{marginTop: 350}}>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                        }}
                        />
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 5 }}>Reviews</Text>
                        </View>
                </View>
                <View style={{marginTop: 40}}>
                    {reviews.map(r =>(
                        <Review key={r.id} review={r}/>

                    ))}
                    
                </View>

            </ScrollView>

        </View>
        

    </View>
    )
}
