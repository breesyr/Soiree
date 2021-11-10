import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookmarkScreenDetail from "../src/screens/BookmarkScreenDetail"
import BookmarkScreen from "../src/screens/BookmarkScreen";

export default BookmarkStackScreen = () => {
    const BookmarkStack = createStackNavigator();

    return (
        <BookmarkStack.Navigator screenOptions={{ headerShown: false }} >
            <BookmarkStack.Screen name = "Bookmarks" component = {BookmarkScreen}/>
            <BookmarkStack.Screen name = "BookmarkDetail" component ={BookmarkScreenDetail}/>
        </BookmarkStack.Navigator>
    ); 
};