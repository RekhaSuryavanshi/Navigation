import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import DetailScreen from '../screens/DetailScreen';
//import ProfileScreen from '../screens/ProfileScreen';
//import BottomTabNavigation from './BottomTabNavigation';
//import HomeScreen from '../screens/HomeScreen';
//import ProfileScreen from '../screens/ProfileScreen';
//import { DrawerNavigationExample } from './DrawerNavigationExample';

import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationsDrawerScreen from '../screens/NotificationsDrawerScreen';
import HomeDrawerScreen from '../screens/HomeDrawerScreen';
export type DrawerParamList = {
    HomeDrawer: undefined;
    NotificationDrawer: undefined;
};
const Drawer = createDrawerNavigator();
export type RootStackParamList = {
    Home: undefined;
    Detail: {
        randomColor: string
    };
    Profile: undefined;
    Tabs: undefined;
};
//const Stack = createNativeStackNavigator<RootStackParamList>();
export const NativeStackNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="HomeDrawer">
                <Drawer.Screen name="HomeDrawer" component={HomeDrawerScreen} />
                <Drawer.Screen name="NotificationDrawer" component={NotificationsDrawerScreen} />
            </Drawer.Navigator>
            {/* <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeScreen' }} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator> */}
        </NavigationContainer>
    );
};