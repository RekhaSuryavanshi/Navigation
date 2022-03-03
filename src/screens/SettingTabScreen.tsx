import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Privacy from './Privacy';
import AccountInfo from './AccountInfo';
const SettingStack = createNativeStackNavigator();

export default function SettingTabScreen() {
    return (
        <SettingStack.Navigator screenOptions={{ headerShown: false }}>
            <SettingStack.Screen name="Privacy" component={Privacy} />
            <SettingStack.Screen name="Account" component={AccountInfo} />
        </SettingStack.Navigator>
    );
}
