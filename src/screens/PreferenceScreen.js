import React , {useState}from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



export default PreferenceScreen = ({navigation}) => {
    //this is for food
    // const [selectedButton, setSelectedButton] = useState('')
    const [buttonPressed, setButtonPressed] = useState(false); 
    const [selectedId, setSelectedId] = useState(null);

    const data = [        
    {id: 1, key: "Acai Bowls"},
    {id: 2, key: "Bagels"},
    {id: 3, key: "Bubble Tea"},
    {id: 4, key: "Churros"},
    {id: 5, key: "Coffee & Tea"},
    {id: 6, key: "Cupcakes"},
    {id: 7, key: "Desserts"},
    {id: 8, key: "Donuts"},
    {id: 9, key: "Gelato"},
    {id: 10, key: "Juice Bars & Smoothies"},]
   
    // const numColumns = 2;
    // GetGridViewItem(item){
    //     Alert.alert(item);
    // }


    
    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
      
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        // while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        //   data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        //   numberOfElementsLastRow++;
        // }
      
        return data;
      };
        


    const renderItem = ({ item}) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        const backgroundColor = item.id === selectedId ? '#301934' : '#7961c2';
        const textColor = item.id === selectedId ? 'white' : 'black';
        return (
          <TouchableOpacity 
          style={{backgroundColor: backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          margin: 1,
          height: Dimensions.get('window').width / 2 }}
           onPress={() => {setSelectedId(item.id)}}>
            <Text style={{color: textColor}}>{item.key}</Text>
          </TouchableOpacity>
        );
      };

       
    return (
        <View style={{flex: 1}}>
            <Text style={{height: '6.5%'}}></Text>
            <TouchableOpacity style={{alignSelf: 'flex-start', paddingLeft: 20}} onPress={() => navigation.navigate("Settings")}> 
                <FontAwesome5 name="arrow-left" size={20} style={{color: '#7961c2'}}/>
            </TouchableOpacity>

            <FlatList
                data={formatData(data, 2)}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                styles={styles.container}
                />
        
            {/* <FlatList
            data={GridListItems}
            renderItem={ ({item}) => 
            <View style={styles.GridViewContainer}>
               <Text style={styles.GridViewTextLayout} onPress={alert("item chosen")} > {item.key} </Text>
              </View> }
            numColumns={2}
             /> */}



        </View>
    );
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
      },
      item: {
        backgroundColor: '#7961c2',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / 2, // approximate a square
      },
      itemInvisible: {
        backgroundColor: 'transparent',
      },

    // GridViewContainer: {
    //     flex:1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: 100,
    //     margin: 5,
    //     backgroundColor: '#7B1FA2'
    //  },
    //  GridViewTextLayout: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     justifyContent: 'center',
    //     color: '#fff',
    //     padding: 10,
    //   }
})
