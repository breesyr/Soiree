import React, { useContext, useEffect } from "react";
import LottieView from "lottie-react-native";
import {StyleSheet, View} from 'react-native';

import { UserContext } from '../../context/UserContext'
import { FirebaseContext } from '../../context/FirebaseContext'

// import Text from "../components/Text";

export default LoadingScreen = () => {
    const [_, setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        setTimeout(async () => {
            const user = firebase.getCurrentUser();

            if (user) {
                const userInfo = await firebase.getUserInfo(user.uid);

                setUser({
                    isLoggedIn: true,
                    email: userInfo.email,
                    uid: user.uid,
                    username: userInfo.username,
                    profilePhotoUrl: userInfo.profilePhotoUrl,
                });
            } else {
                setUser((state) => ({ ...state, isLoggedIn: false }));
            }
        }, 500);
    }, []);

    return (
        <View style={styles.container}>

            <LottieView
                source={require("../../assets/loadingAnimation.json")}
                autoPlay
                loop
                style={{ width: "100%" }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222222',
    }
});
