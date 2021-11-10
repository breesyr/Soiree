import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import FoodScreen from '../src/screens/FoodScreen';
import ActivityScreen from '../src/screens/ActivityScreen';
import PlacesScreen from '../src/screens/PlacesScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import SettingStackScreen from './SettingStackScreen';
import BookmarkStackScreen from './BookmarkStackScreen';


export default MainStackScreen = () => {
    const MainStack = createBottomTabNavigator();
    const tabBarOptions = {
        showLabel: true,

    };

    const screenOptions = ({route}) => ({
        headerTransparent: true,
        headerShown: false,
        tabBarIcon: ({focused}) => {
            let iconName = 'home';

            switch(route.name){
                case 'Foods': 
                iconName = "hamburger"
                break;
    
                case 'Activities': 
                iconName = 'running'
                break;
    
                case 'Places': 
                iconName = 'map-marked'
                break;
    
                case 'Bookmark': 
                iconName = 'bookmark'
                break;

                case 'Settings': 
                iconName = 'cog'
                break;
    
                default: iconName = 'utensils'
            }
            return <FontAwesome5 name={iconName} size={24} />
        }
    });

    return(
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <MainStack.Screen name="Foods" component={FoodScreen} ></MainStack.Screen>
            <MainStack.Screen name="Activities" component={ActivityScreen} ></MainStack.Screen>
            <MainStack.Screen name="Places" component={PlacesScreen} ></MainStack.Screen>
            <MainStack.Screen name="Bookmark" component={BookmarkStackScreen} ></MainStack.Screen>
            <MainStack.Screen name="Settings" component={SettingStackScreen} ></MainStack.Screen>
        </MainStack.Navigator>
    );
}
