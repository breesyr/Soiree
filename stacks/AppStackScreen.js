import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainStackScreen from "./MainStackScreen";


export default AppStackScreen = () => {
    const AppStack = createStackNavigator();

    return (
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Main" component={MainStackScreen} />
        </AppStack.Navigator>
    );
};