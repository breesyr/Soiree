import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar, Image, ScrollView, Touchable} from 'react-native';

const fakeData =[
    {
        id: "1",
        name: "PhucLong",
        location: "12932 Main St, Garden Grove, CA 92840",
        picture: "https://www.littlesaigonnow.com/files/logo/13553.png",

    },
    {
        id: "2",
        name: "Starbucks",
        location: "11162 Garden Grove Blvd, Garden Grove, CA 92843",
        picture: "https://d1ralsognjng37.cloudfront.net/305df057-e65a-47e6-b62c-e5d024c918ca.jpeg",
    },
    {
        id: "3",
        name: "7 Leaves",
        location: "13481 Euclid St B, Garden Grove, CA 92843",
        picture: "https://7leavescafe.com/wp-content/uploads/drink-1.jpg",
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
    }
];

const Item = ({title, picture,address}) => (
    <View style = {styles.item}>
            <Image
                source = {{uri: picture}}
                style = {{width: 100, height: 100, margin: 5}}
            >
            </Image>
            <View style = {{flexDirection: 'column', flexShrink: 1,}}>
                <View style = {{flex: 1, marginBottom: 1}}>
                    <Text style = {styles.title}>{title} </Text>
                </View>    

                <View style = {{ flex: 1}}>
                    <Text style = {styles.address}>{address} </Text>   
                </View>
            </View>
 
        
    </View>
);

export default BookmarkScreen = () => {

    const renderItem = ({item}) => (//renders a single bookmark
        <Item title = {item.name} picture = {item.picture} address = {item.location}/>
    );


    return(//renders whole screen
        <View style = {styles.container}> 
                <ScrollView>
                    {
                    <FlatList 
                    data = {fakeData}
                    renderItem = {renderItem}
                    keyExtractor = {(item) => item.id}
                    />
                    }
                </ScrollView>
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
        backgroundColor: "#CDCDCD",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        textShadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        flexShrink: 1,
        borderRadius: 20,
       
    },
    title:{
        fontSize: 20,
        paddingLeft: 0,
        fontWeight: 'bold',
    
        
    },
    address:{
        fontSize: 20,
    }
});