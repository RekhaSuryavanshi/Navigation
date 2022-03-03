import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerParamList } from '../navigation/DrawerNavigations';

export default function HomeDrawerScreen({ navigation }: NativeStackScreenProps<DrawerParamList, 'HomeDrawer'>) {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>HomeDrawerScreen!!</Text>
            <Button
                title="Go to Notification"
                onPress={() => navigation.navigate('NotificationDrawer')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        marginLeft: 20,
        color: 'blue',
        fontWeight: 'bold',
    },
});