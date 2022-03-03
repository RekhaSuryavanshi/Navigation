import React from 'react';
import BottomTabNavigation from './BottomTabNavigation';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Tabs"
                component={BottomTabNavigation}
            />
        </>
    );
}