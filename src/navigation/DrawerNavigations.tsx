import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import NotificationsDrawerScreen from '../screens/NotificationsDrawerScreen';
export type DrawerParamList = {
    HomeDrawer: undefined;
    NotificationDrawer: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();
export const DrawerNavigations = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="HomeDrawer">
                <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
                <Drawer.Screen name="NotificationDrawer" component={NotificationsDrawerScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};