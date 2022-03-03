import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootStackParamList } from '../navigation/NativeStackNavigation';

export type BottomTabParamList = {
    HomeTab: undefined;
    SettingTab: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
    const goToScreen = () => {
        navigation.navigate('Detail', { randomColor: 'orchid' });
    };
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                title="Go to Details"
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
export default HomeScreen;
