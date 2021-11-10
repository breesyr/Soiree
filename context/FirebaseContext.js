import React, {createContext, useEffect, useState} from "react";

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import config from "../config/firebase";

const FirebaseContext = createContext();

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.firestore();
const auth = firebase.auth();

const Firebase = {

    getCurrentUser: () => {
        return firebase.auth().currentUser;
    },

    createUser: async (user) => {
        try{
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            const uid = Firebase.getCurrentUser().uid;

            await db.collection("users").doc(uid).set({
                firstName: user.firstName,
                lastName: user.lastName,
                displayName: user.username,
                username: user.username,
                email: user.email,
                password: user.password,
                profilePhotoUrl,
                photoUrl: user.profilePhoto
            });

            if (user.profilePhoto) {
                profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);
            }

            return { ...user, profilePhotoUrl, uid };
        }catch (error) {
            console.log("Error @createUser: ", error.message);
        }
    },

    uploadProfilePhoto: async (uri) => {
        const uid = Firebase.getCurrentUser().uid;

        try {
            const photo = await Firebase.getBlob(uri);

            const imageRef = firebase.storage().ref("profilePhotos").child(uid);
            await imageRef.put(photo);

            const url = await imageRef.getDownloadURL();

            await db.collection("users").doc(uid).update({
                profilePhotoUrl: url,
            });

            return url;
        } catch (error) {
            console.log("Error @uploadProfilePhoto: ", error);
        }
    },

    getBlob: async (uri) => {
        return await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.onload = () => {
                resolve(xhr.response);
            };

            xhr.onerror = () => {
                reject(new TypeError("Network request failed."));
            };

            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });
    },
    
    sendVerification: async () => {
        const user = Firebase.getCurrentUser();
        user.sendEmailVerification();
        alert('Email sent');
    },

    sendVerifcation: async (user) => {
        user.sendEmailVerification();
        alert('Email sent');
    },

    getUserInfo: async (uid) => {
        try {
            const user = await db.collection("users").doc(uid).get();
            if (user.exists) {
                return user.data();
            }
        } catch (error) {
            console.log("Error @getUserInfo: ", error);
        }
    },

    setUserInfo: async (user) => {
        try{
            const uid = Firebase.getCurrentUser().uid;

            await db.collection("users").doc(uid).set({
                firstName: user.fname,
                lastName: user.lname,
                displayName: user.username,
                username: user.username,
                email: user.email,
                password: user.password,
                //profilePhotoUrl,
                //photoUrl: user.profilePhoto
            });
            
            if (user.profilePhoto) {
                //profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);
            }

            return { ...user, profilePhotoUrl, uid };
        }
        catch(error) {
            console.log("Error @setUserInfo: ", error);
        }

    },

    signIn: async (email, password) => {
        //console.log("Login worked");
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },

    logOut: async () => {

        try{
            await firebase.auth().signOut(); 
            return true;

        }
        catch (err) {
            console.log(err);
        }
        return false; 
    }



};

const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
};

export { FirebaseContext, FirebaseProvider};


