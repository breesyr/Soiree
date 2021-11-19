import React , {useState}from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons';



export default PreferenceScreen = ({navigation}) => {
    //this is for food
    const [GridListItems, SetGridListItems] = useState([
        {key: "category1"},
        {key: "category2"},
        {key: "category3"},
        {key: "category4"},
        {key: "category5"},
        {key: "category6"},
        {key: "category7"},
    ])

    // GetGridViewItem(item){
    //     Alert.alert(item);
    // }
    return (
        <View style={{flex: 1}}>
            <Text style={{height: '6.5%'}}></Text>
            <TouchableOpacity style={{alignSelf: 'flex-start', paddingLeft: 20}} onPress={() => navigation.navigate("Settings")}> 
                <FontAwesome5 name="arrow-left" size={20} style={{color: '#7961c2'}}/>
            </TouchableOpacity>

        
            <FlatList
            data={GridListItems}
            renderItem={ ({item}) => 
            <View style={styles.GridViewContainer}>
               <Text style={styles.GridViewTextLayout} onPress={alert("item chosen")} > {item.key} </Text>
              </View> }
            numColumns={2}
             />



        </View>
    );
}

const styles = new StyleSheet.create({
    GridViewContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#7B1FA2'
     },
     GridViewTextLayout: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff',
        padding: 10,
      }
})
