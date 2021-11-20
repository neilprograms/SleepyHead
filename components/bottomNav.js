//React and UI Kitten Imports
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Layout, Text, Button, ButtonGroup } from '@ui-kitten/components';

import { useNavigation } from "@react-navigation/native";

export const BottomNav = () => {
    const [buttonSelected, setButtonSelected] = useState(0);
    const [cameraButtonState, setCameraButtonState] = useState("filled");
    const [settingsButtonState, setSettingsButtonState] = useState("ghost");

    const onBottomNavClickCamera = () => {
        if (cameraButtonState != "filled") {
            setCameraButtonState("filled")
            setSettingsButtonState("ghost")
        }
    }
    const onBottomNavClickSettings = () => {
        if (settingsButtonState != "filled") {
            setCameraButtonState("ghost")
            setSettingsButtonState("filled")
        }
    }

    return (
        <View style={styles.container}>
            <Button appearance={cameraButtonState} size="giant" onPress={() => { onBottomNavClickCamera() }}>Camera</Button>
            <Button appearance={settingsButtonState} size="giant" onPress={() => { onBottomNavClickSettings() }}>Settings</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
});
