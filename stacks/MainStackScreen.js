import React ,{useState, useEffect}from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import FoodScreen from '../src/screens/FoodScreen';
import FoodStackScreen from './FoodStackScreen';
import ActivityScreen from '../src/screens/ActivityScreen';
import PlacesScreen from '../src/screens/PlacesScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import SettingStackScreen from './SettingStackScreen';
import BookmarkStackScreen from './BookmarkStackScreen';
import { Alert } from "react-native";
import * as Location from 'expo-location';


export default MainStackScreen = () => {
    const MainStack = createBottomTabNavigator();
    const tabBarOptions = {
        showLabel: true,

    };

    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [location, setLocation] = useState({});

    const checkIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        console.log('enabled: ', enabled);
    
        if (!enabled) {
          Alert.alert(
            'Location Service not enabled',
            'Please enable your location services to continue',
            [{ text: 'OK' }],
            { cancelable: false }
          );
        } else {
          setLocationServiceEnabled(enabled);
        }
    }

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
	  
		if (status !== 'granted') {
		  Alert.alert(
			'Permission not granted',
			'Allow the app to use location service.',
			[{ text: 'OK' }],
			{ cancelable: false }
		  );
		}
        let { coords } = await Location.getCurrentPositionAsync();
        setLocation(coords);
    }

    useEffect(() => {
        checkIfLocationEnabled();
        getCurrentLocation();
    }, [])

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
            <MainStack.Screen name="Foods" children={()=><FoodScreen location={location}/>} ></MainStack.Screen>
            <MainStack.Screen name="Activities" children={()=><ActivityScreen location={location}/>} ></MainStack.Screen>
            <MainStack.Screen name="Places" children={()=><PlacesScreen location={location}/>} ></MainStack.Screen>
            <MainStack.Screen name="Bookmark" component={BookmarkStackScreen} ></MainStack.Screen>
            <MainStack.Screen name="Settings" component={SettingStackScreen} ></MainStack.Screen>
        </MainStack.Navigator>
    );
}
