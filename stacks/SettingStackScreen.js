import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../src/screens/SettingsScreen";
import AccountScreen from "../src/screens/AccountScreen";

export default SettingStackScreen = () => {
    const SettingStack = createStackNavigator();

    return (
        <SettingStack.Navigator screenOptions={{ headerShown: false }}>
            <SettingStack.Screen name = "Settings" component = {SettingsScreen}/>
            <SettingStack.Screen name = "Account" component = {AccountScreen}/>
        </SettingStack.Navigator>
    ); 
};