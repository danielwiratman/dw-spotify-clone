import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import GlobalColors from "./src/utils/GlobalColors";
import { FloatingMusicPlayer } from "./src/components/FloatingMusicPlayer";
import MainTabNavigator from "./src/navigators/MainTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <ExpoStatusBar style="light" />
                <MainTabNavigator />
                <FloatingMusicPlayer />
            </View>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({});
