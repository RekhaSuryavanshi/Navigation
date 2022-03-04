import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
export type DrawerParamList = {
    HomeDrawer: undefined;
    NotificationDrawer: undefined;
};
export type RootStackParamList = {
    Home: undefined;
    Detail: {
        randomColor: string
    };
    Profile: undefined;
    Tabs: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const NativeStackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeScreen' }} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};