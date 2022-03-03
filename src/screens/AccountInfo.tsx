import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
interface AccountProps {
    navigation: any;
}

const AccountInfo = ({ navigation }: AccountProps) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>AccountInfo Screen</Text>
            <Button
                title="Go to Account Screen"
                onPress={() => navigation.goBack()}
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
export default AccountInfo;
