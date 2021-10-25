import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { UserContext } from "../context/UserContext";
import AuthStackScreen from "./AuthStackScreen";
import MainStackScreen from "./MainStackScreen";
import LoadingScreen from "../src/screens/LoadingScreen";

export default AppStackScreens = () => {
    const AppStack = createStackNavigator();
    const [user] = useContext(UserContext);

    return (
        <AppStack.Navigator headerMode="none">
            {user.isLoggedIn === null ? (
                <AppStack.Screen name="Loading" component={LoadingScreen} />
            ) : user.isLoggedIn ? ( //If user is logged in
                <AppStack.Screen name="Main" component={MainStackScreen} />
            ) : (// Else direct them to login/register pages
                <AppStack.Screen name="Auth" component={AuthStackScreen} />
            )}
        </AppStack.Navigator>
    );
};
