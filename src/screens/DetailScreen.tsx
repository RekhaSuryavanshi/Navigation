import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootStackParamList } from '../navigation/NativeStackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;
const DetailScreen = ({ route, navigation }: Props) => {
    const { randomColor } = route.params;
    React.useEffect(() => {
        navigation.setOptions({
            headerTintColor: 'black',
            headerStyle: {
                backgroundColor: randomColor,
            },
        });

    });
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>Detail Screen</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go To ProfileScreen"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Go Back to First Screen in Stack"
                onPress={() => navigation.popToTop()}
            />
            <Text>color received: {randomColor}</Text>
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
export default DetailScreen;
