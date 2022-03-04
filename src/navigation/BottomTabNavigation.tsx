import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from '../screens/HomeTabScreen';
import { NavigationContainer } from '@react-navigation/native';
import SettingTabScreen from '../screens/SettingTabScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
export type BottomTabParamList = {
    HomeTab: undefined;
    SettingTab: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = '';

                        if (route.name === 'HomeTab') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'SettingTab') {
                            iconName = focused ? 'ios-list-circle-outline' : 'ios-list';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen name='HomeTab' component={HomeTabScreen} options={{ title: 'Home' }} />
                <Tab.Screen name='SettingTab' component={SettingTabScreen} options={{ title: 'Setting' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}