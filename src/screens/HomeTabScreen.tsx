import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

function HomeTabScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>HomeTabScreen!!</Text>
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
export default HomeTabScreen;