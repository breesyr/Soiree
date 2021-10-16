import React, {useState, useEffect} from "react"
import { Platform, Dimensions, StyleSheet, Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import * as Location from 'expo-location';

export default Maps = () => {

	const [location, setLocation] = useState();
	const [errorMsg, setErrorMsg] = useState();
	const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
	const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
		'Wait, we are fetching you location...')

    const [ pin, setPin ] = useState({
		latitude: 37.78825,
		longitude: -122.4324
	})
    const [ region, setRegion ] = useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})

	useEffect(() => {
		CheckIfLocationEnabled();
		GetCurrentLocation();

		console.log(displayCurrentAddress)
	  }, []);

	const CheckIfLocationEnabled = async () => {
	let enabled = await Location.hasServicesEnabledAsync();

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

	const GetCurrentLocation = async () => {
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

		if (coords) {
		  const { latitude, longitude } = coords;
		  let response = await Location.reverseGeocodeAsync({
			latitude,
			longitude
		  });
	  
		  for (let item of response) {
			let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
			console.log(address)
			setDisplayCurrentAddress(address);
		  }
		}

	}

	



	// useEffect(() => {
	// 	(async () => {
	// 	  let { status } = await Location.requestForegroundPermissionsAsync();
	// 	  if (status !== 'granted') {
	// 		setErrorMsg('Permission to access location was denied');
	// 		return;
	// 	  }
	
	// 	  let location = await Location.getCurrentPositionAsync({});
	// 	  setLocation(location);
	// 	  console.log("where my location:", location)
	// 	  console.log("permissions:",errorMsg)
	// 	})();
	//   }, []);
	
	//   let text = 'Waiting..';
	//   if (errorMsg) {
	// 	text = errorMsg;
	//   } else if (location) {
	// 	text = JSON.stringify(location);
	//   }


    return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>{displayCurrentAddress}</Text>
		</View>
        // <View style={{marginTop: 50, flex:1 }}>
            /* <GooglePlacesAutocomplete
				placeholder="Search"
				fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance"
                }}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(data, details)
                    setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					})
				}}
				query={{
					key: "AIzaSyAHec3-RoyIUIsAIXENQHEZF51--Vu5fUk",
					language: "en",
					components: "country:us",
                    types: "establishment",
                    radius: 30000,
                    location: `${region.latitude}, ${region.longitude}`
				
				}}
				styles={{
					container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
					listView: { backgroundColor: "white" }
				}}
			/>
           <MapView 
                style={styles.map}
                initialRegion={
                    // latitude: 37.78825,
                    // longitude: -122.4324,
                    // latitudeDelta: 0.0922,
                    // longitudeDelta: 0.0421
					location
                }
                //provider="google"
            >
                {/* <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} /> */
                /* <Marker
                    coordinate={pin}
                    pinColor="black"
                    draggable={true}
                    onDragStart={(e) => {
						console.log("Drag start", e.nativeEvent.coordinates)
					}}
					onDragEnd={(e) => {
						setPin({
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude
						})
					}}
                >
                    <Callout>
                        <Text>I'm here!</Text>
                    </Callout>
                </Marker> */

                /* <Circle center={pin}
                radius={1000}
                />

            </MapView> */
        /* </View> */
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 20
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	paragraph: {
		fontSize: 18,
		textAlign: 'center'
	}
})