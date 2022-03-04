import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationsDrawerScreen from '../screens/NotificationsDrawerScreen';
import HomeDrawerScreen from '../screens/HomeDrawerScreen';
export type DrawerParamList = {
    HomeDrawer: undefined;
    NotificationDrawer: undefined;
};
const Drawer = createDrawerNavigator();
export const DrawerNavigationExample = () => {
    return (
        // <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeDrawer">
            <Drawer.Screen name="HomeDrawer" component={HomeDrawerScreen} />
            <Drawer.Screen name="NotificationDrawer" component={NotificationsDrawerScreen} />
        </Drawer.Navigator>
        // </NavigationContainer>
    );
};