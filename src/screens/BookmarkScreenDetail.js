import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from "react";
import {FontAwesome5} from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import Item from '../screens/BookmarkScreen';


export default BookmarkScreenDetail = ({navigation, route}) => {
    const {item} = route.params;
    return(

        <View style = {{flex: 1}}>
           <Text style={{height: '6.5%'}}></Text>
            <TouchableOpacity style={{alignSelf: 'flex-start', paddingLeft: 20}} onPress={() => navigation.navigate("Bookmarks")}> 
                <FontAwesome5 name="arrow-left" size={20} style={{color: '#7961c2'}}/>
            </TouchableOpacity>
            <View style = {[StyleSheet.absoluteFill, {backgroundColor: '#E1D5E7', borderRadius: 16, height: 300}]}/>
            <Image source = {{uri: item.logo}}
                   style = {{width: 850, height: 450, borderRadius: 30, bottom: 200, right: 10}}/> 
            

        </View>
    )

}