import React, {useState, useContext} from 'react';
import {API_BASE_URL, BEARER_TOKEN} from './config';

export async function getData() {
    try{
        // Categories can be 'bars', 'restaurants', 'food'
        // Location can be 'NYC', 'CA'
        // Limit displays how many businesses you want to fetch
        const res = fetch(`${API_BASE_URL}` +
        'categories=restaurants' +
        '&location=NYC' +
        '&limit=5', {
            method: "GET",
            headers: {
                "accept": "application/json",
                Authorization: `Bearer ${BEARER_TOKEN}`,
            }
        })
        const data = (await res).json()
        const businesses = data.then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses;
            }
        });
        return businesses;
        //return data;
        /*.then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        name: business.name
                    }
                })
            }
        })
        */
    } catch (err) {
        console.log('error: ' , err)
    }
}




