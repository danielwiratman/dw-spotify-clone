import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function ButtonsBelowGoodEvening({}) {
    return (
        <View
            style={{
                flexDirection: "row",
            }}
        >
            <TouchableOpacity 
            activeOpacity={0.5}
                style={{
                    paddingVertical: 6,
                    marginRight: 10,
                    paddingHorizontal: 15,
                    backgroundColor: "#333",
                    borderRadius: 999,
                }}
            >
                <Text
                    style={{
                        color: "white",
                    }}
                >
                    Music
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            activeOpacity={0.5}
                style={{
                    paddingVertical: 6,
                    marginRight: 10,
                    paddingHorizontal: 15,
                    backgroundColor: "#333",
                    borderRadius: 999,
                }}
            >
                <Text
                    style={{
                        color: "white",
                    }}
                >
                    Podcast & Shows
                </Text>
            </TouchableOpacity>
        </View>
    );
}
