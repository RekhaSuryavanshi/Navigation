import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

function NotificationsDrawerScreen({ navigation }: any) {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>Notification Screen!!</Text>
            <Button
                title="Go Back to HOME"
                onPress={() => navigation.navigate('HomeDrawer')}
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
export default NotificationsDrawerScreen;