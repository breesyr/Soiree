import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Animated } from 'react-native';

const AVATAR_SIZE = 80;
const SPACING = 20;
const { height } = Dimensions.get("screen");



const fakeData =[
    {
        id: "1",
        name: "Phuc Long",
        location: "12932 Main St, Garden Grove, CA 92840",
        picture: "https://media.urbanistnetwork.com/saigoneer/article-images/2021/06/24/phuclongusa_SGNR1b.jpg",
        website: 'https://www.phuclongusa.com/shop/'
    },
    {
        id: "2",
        name: "Starbucks",
        location: "11162 Garden Grove Blvd, Garden Grove, CA 92843",
        picture: "https://cdn.mos.cms.futurecdn.net/8tEvBrHEeMTTBt26SiniHM.jpg",
        website: 'https://www.starbucks.com/'
    },
    {
        id: "3",
        name: "7 Leaves",
        location: "13481 Euclid St B, Garden Grove, CA 92843",
        picture: "https://7leavescafe.com/wp-content/uploads/drink-1.jpg",
        website: 'https://7leavescafe.com/'
    },
    {
        id: "4",
        name: "Mokkoji Shabu Shabu",
        location: "9240 Garden Grove Blvd, Garden Grove, CA 92844",
        picture: "https://www.wandercooks.com/wp-content/uploads/2020/06/shabu-shabu-recipe-ft-1-500x375.jpg",
    },
    {
        id: "5",
        name: "In-n-Out Burger",
        location: "1168 S State College Blvd, Anaheim, CA 92806",
        picture: "https://www.discoverlosangeles.com/sites/default/files/media/activities/in-n-out-double-double-animal-style_1.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp",

    },
    {
        id: "6",
        name: "Tai Tea ",
        location: "874 W Lincoln Ave, Anaheim, CA 92805",
        picture: "https://s3-media0.fl.yelpcdn.com/bphoto/pjJe2OKVgPC6h-HgjVBL0g/348s.jpg",
    },
    {
        id: "7",
        name: "Mokkoji Shabu Shabu",
        location: "9240 Garden Grove Blvd, Garden Grove, CA 92844",
        picture: "https://www.wandercooks.com/wp-content/uploads/2020/06/shabu-shabu-recipe-ft-1-500x375.jpg",
    },
    {
        id: "8",
        name: "In-n-Out Burger",
        location: "1168 S State College Blvd, Anaheim, CA 92806",
        picture: "https://www.discoverlosangeles.com/sites/default/files/media/activities/in-n-out-double-double-animal-style_1.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp",

    },
    {
        id: "9",
        name: "Tai Tea ",
        location: "874 W Lincoln Ave, Anaheim, CA 92805",
        picture: "https://s3-media0.fl.yelpcdn.com/bphoto/pjJe2OKVgPC6h-HgjVBL0g/348s.jpg",
    },
    {
        id: "10",
        name: "PhucLong",
        location: "12932 Main St, Garden Grove, CA 92840",
        picture: "https://www.littlesaigonnow.com/files/logo/13553.png",

    },
    {
        id: "11",
        name: "Starbucks",
        location: "11162 Garden Grove Blvd, Garden Grove, CA 92843",
        picture: "https://d1ralsognjng37.cloudfront.net/305df057-e65a-47e6-b62c-e5d024c918ca.jpeg",
    },
    {
        id: "12",
        name: "7 Leaves",
        location: "13481 Euclid St B, Garden Grove, CA 92843",
        picture: "https://7leavescafe.com/wp-content/uploads/drink-1.jpg",
    },
    {
        id: "13",
        name: "Mokkoji Shabu Shabu",
        location: "9240 Garden Grove Blvd, Garden Grove, CA 92844",
        picture: "https://www.wandercooks.com/wp-content/uploads/2020/06/shabu-shabu-recipe-ft-1-500x375.jpg",
    },
    {
        id: "14",
        name: "In-n-Out Burger",
        location: "1168 S State College Blvd, Anaheim, CA 92806",
        picture: "https://www.discoverlosangeles.com/sites/default/files/media/activities/in-n-out-double-double-animal-style_1.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp",

    },
    {
        id: "15",
        name: "Tai Tea ",
        location: "874 W Lincoln Ave, Anaheim, CA 92805",
        picture: "https://s3-media0.fl.yelpcdn.com/bphoto/pjJe2OKVgPC6h-HgjVBL0g/348s.jpg",
    },
    {
        id: "16",
        name: "Mokkoji Shabu Shabu",
        location: "9240 Garden Grove Blvd, Garden Grove, CA 92844",
        picture: "https://www.wandercooks.com/wp-content/uploads/2020/06/shabu-shabu-recipe-ft-1-500x375.jpg",
    },
    {
        id: "17",
        name: "In-n-Out Burger",
        location: "1168 S State College Blvd, Anaheim, CA 92806",
        picture: "https://www.discoverlosangeles.com/sites/default/files/media/activities/in-n-out-double-double-animal-style_1.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp",

    },
    {
        id: "18",
        name: "Tai Tea ",
        location: "874 W Lincoln Ave, Anaheim, CA 92805",
        picture: "https://s3-media0.fl.yelpcdn.com/bphoto/pjJe2OKVgPC6h-HgjVBL0g/348s.jpg",
    }
];

const Item = ({title, picture,address, logo}) => (

            <View style = {styles.item}>
                    <Image
                        source = {{uri: picture}}
                        style = {{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE}}
                    >
                    </Image>
                    <View>
                            <Text style = {{fontSize: 22, fontWeight:'700'}}>{title} </Text>   
                            <Text style = {{fontSize: 18, opacity: .7, flexDirection: 'row', width: 280}}>{address} </Text>   
                    </View>
            </View>
        
);


export default BookmarkScreen = ({navigation}) => {
    const scrollY= React.useRef(new Animated.Value(0)).current;

    return(//renders whole screen
        
        <View style = {{flex: 1, backgroundColor: '#E1D5E7'}}> 
            <Animated.FlatList 
                data = {fakeData}
                onScroll = {Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}],
                    {useNativeDriver: true}
                )}
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currentHeight || 42
                }}
                keyExtractor = {(item) => item.id}
                renderItem = {({item, index}) => {
                    const inputRange = [
                        -1,
                        0,
                        (height * 0.1 + 15) * index,
                        (height * 0.1 + 15) * (index + 3),
                    ]
                    const scale = 1;
                    const opacity = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0],
                    });
                    const Offset = scrollY.interpolate({
                        inputRange,
                        outputRange: [0, 0, 0, 500],
                    });

                    return (//renders a single bookmark
                        <Animated.View style={{
                            transform: [{ scale: scale }, { translateX: Offset }],
                            opacity: opacity,
                          }}>
                                  
                            <TouchableOpacity onPress= {() => navigation.navigate("BookmarkDetail", {item})}>
                            
                            <Item title = {item.name} picture = {item.picture} address = {item.location}/>
                        </TouchableOpacity>

                        </Animated.View>
            

            
                   
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 100,
        

    },
    item: {
        flexDirection: 'row', 
        padding: SPACING, 
        marginBottom: SPACING, 
        backgroundColor: '#F7F7FF', 
        borderRadius: 12,
        shadowColor: "#E1D5E7",
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: .3, 
        shadowRadius: 20,
    },
    
    title:{
        fontSize: 20,
        paddingLeft: 0,
        fontWeight: 'bold'
        
    },
    address:{
        fontSize: 20,
        flex: 0.8, 
        flexShrink: 1
    },
});