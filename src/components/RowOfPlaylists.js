import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
export function RowOfPlaylists({ title }) {
    return (
        <View>
            <Text
                style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 26,
                }}
            >
                {title}
            </Text>
            <View
                style={{
                    height: 15,
                }}
            />
            <ScrollView horizontal>
                <PlaylistModule />
                <PlaylistModule />
                <PlaylistModule />
                <PlaylistModule />
                <PlaylistModule />
            </ScrollView>
        </View>
    );
}

function PlaylistModule({}) {
    return (
        <TouchableOpacity
            style={{
                width: 140,
                marginRight: 10,
            }}
            activeOpacity={0.5}
        >
            <Image
                source={{
                    uri: `https://unsplash.it/150?random=${Math.random()}`,
                }}
                style={{
                    aspectRatio: 1,
                }}
            />
            <Text
                style={{
                    color: "white",
                    marginTop: 5,
                }}
            >
                Random Image
            </Text>
        </TouchableOpacity>
    );
}
