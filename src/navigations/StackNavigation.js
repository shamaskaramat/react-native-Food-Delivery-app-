
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Hotels from '../screens/Hotels';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Cart from '../screens/Cart';
import Map from '../screens/Map';



const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="Hotel" component={Hotels} options={{ headerShown: false }} />
                    <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                    <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default StackNavigation;