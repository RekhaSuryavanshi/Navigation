import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CImage from '../components/atoms/image/CImage';
import CText from '../components/atoms/label/CText';

function HomeTabScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>HomeTabScreen!!</Text>
            <CImage.member />
            <CText.headerTitle>Trial Text</CText.headerTitle>
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