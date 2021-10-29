import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FoodScreen from "../src/screens/FoodScreen";
import InfoScreen from "../src/screens/InfoScreen";



export default FoodStackScreen = () => {
    const FoodStack = createStackNavigator();

    return (
        <FoodStack.Navigator screenOptions={{ headerShown: false }}>
            <FoodStack.Screen name = "Food" component = {FoodScreen}/>
            <FoodStack.Screen name = "Info" component = {InfoScreen}/>
        </FoodStack.Navigator>
    ); 
};