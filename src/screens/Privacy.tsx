import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface PrivacyProps {
    navigation: any
}

const Privacy = ({ navigation }: PrivacyProps) => {
    const goToScreen = () => {
        navigation.navigate('Account');
    };
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>Privicy Screen</Text>
            <Button
                title="Go to Account Screen"
                onPress={goToScreen}
            />
        </View>
    );
};

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
export default Privacy;
