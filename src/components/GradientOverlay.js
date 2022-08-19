import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions } from "react-native";
export function GradientOverlay({}) {
    return (
        <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9)"]}
            style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: Dimensions.get('window').height * 0.8,
                bottom: 0,
            }}
            pointerEvents="box-none"
        />
    );
}
