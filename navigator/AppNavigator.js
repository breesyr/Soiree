import {createStackNavigator} from '@react-navigation/stack';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';

const {Navigator, Screen} = createStackNavigator();

export default AppNavigator = () => {
    return(
        <Navigator>
            <Screen name='Login' component={Login}></Screen>
            <Screen name='Register' component={Register}></Screen>
        </Navigator>
    );
};

