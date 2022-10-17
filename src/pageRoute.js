import React from "react"
import { Provider } from "react-redux"
import App from "../App"
import { store } from "./Store"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Cart from "./Cart"

const Stack = createStackNavigator();
export function pageRoute() {

    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
               
                <Stack.Screen
                    name='Home'
                    component={App}
                    options={{headerShown:false}}
                />
              
                <Stack.Screen
                    name='Cart'
                    component={Cart}
                    options={{headerShown:false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}