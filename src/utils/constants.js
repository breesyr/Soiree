const {Dimensions} = require('react-native')

const {width, height} = Dimensions.get('screen')


export const FOODCARD = {
    WIDTH: width * 0.9,
    HEIGHT: height * 0.7,
    BORDER_RADIUS: 20,
    OUT_OF_SCREEN: width + 0.5 * width,
}; 

export const INFOBOX = {
    WIDTH: width * 0.9,
    HEIGHT: height * 0.4,
    BORDER_RADIUS: 15
}


export const COLORS = {
    like: '#00eda6',
    nope: '#ff006f', 
    comment: "#7f7f7f"
};

export const ACTION_OFFSET = 100; 
