import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootStackParamList } from '../navigation/NativeStackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;
const ProfileScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>Profile Screen</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go To HomeScreen"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go Back to First Screen in Stack"
                onPress={() => navigation.popToTop()}
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
export default ProfileScreen;
