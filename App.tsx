import { Provider } from 'react-redux'
import MainScreen from './screens/MainScreen'
import { store } from './redux/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from './screens/SignInScreen'

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignInScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="Main" component={MainScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
