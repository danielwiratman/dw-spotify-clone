import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

export function SixRecentPlaylists() {
    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 10,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        marginRight: 10,
                        borderRadius: 5,
                        backgroundColor: "#333",
                        flexDirection: "row",
                        alignItems: "center",
                        width: (Dimensions.get("window").width - 40) / 2,
                    }}
                >
                    <Image
                        source={{
                            uri: `https://unsplash.it/150?random=${Math.random()}`,
                        }}
                        style={{
                            width: 50,
                            aspectRatio: 1,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                        }}
                    >
                        Lofi study beats
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#333",
                        flexDirection: "row",
                        alignItems: "center",
                        width: (Dimensions.get("window").width - 40) / 2,
                    }}
                >
                    <Image
                        source={{
                            uri: `https://unsplash.it/150?random=${Math.random()}`,
                        }}
                        style={{
                            width: 50,
                            aspectRatio: 1,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                        }}
                    >
                        Classical Violin
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 10,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        marginRight: 10,
                        borderRadius: 5,
                        backgroundColor: "#333",
                        flexDirection: "row",
                        alignItems: "center",
                        width: (Dimensions.get("window").width - 40) / 2,
                    }}
                >
                    <Image
                        source={{
                            uri: `https://unsplash.it/150?random=${Math.random()}`,
                        }}
                        style={{
                            width: 50,
                            aspectRatio: 1,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                        }}
                    >
                        Billboard Top 100
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#333",
                        flexDirection: "row",
                        alignItems: "center",
                        width: (Dimensions.get("window").width - 40) / 2,
                    }}
                >
                    <Image
                        source={{
                            uri: `https://unsplash.it/150?random=${Math.random()}`,
                        }}
                        style={{
                            width: 50,
                            aspectRatio: 1,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                        }}
                    >
                        Acoustic Hits
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 10,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        marginRight: 10,
                        borderRadius: 5,
                        backgroundColor: "#333",
                        flexDirection: "row",
                        alignItems: "center",
                        width: (Dimensions.get("window").width - 40) / 2,
                    }}
                >
                    <Image
                        source={{
                            uri: `https://unsplash.it/150?random=${Math.random()}`,
                        }}
                        style={{
                            width: 50,
                            aspectRatio: 1,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                        }}
                    >
                        Liked Songs
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#333",
                        flexDirection: "row",
                        alignItems: "center",
                        width: (Dimensions.get("window").width - 40) / 2,
                    }}
                >
                    <Image
                        source={{
                            uri: `https://unsplash.it/150?random=${Math.random()}`,
                        }}
                        style={{
                            width: 50,
                            aspectRatio: 1,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "white",
                            paddingHorizontal: 10,
                        }}
                    >
                        Good Vibes
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
