import { RowOfPlaylists } from "../components/RowOfPlaylists";
import { ButtonsBelowGoodEvening } from "../components/ButtonsBelowGoodEvening";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import GlobalColors from "../utils/GlobalColors";
import { SixRecentPlaylists } from "../components/SixRecentPlaylists";
import { GradientOverlay } from "../components/GradientOverlay";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: GlobalColors.bgColor,
                paddingHorizontal: 15,
            }}
        >
            <ScrollView>
                <View style={{ height: 50 }} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "700",
                            fontSize: 26,
                        }}
                    >
                        Good evening
                    </Text>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity activeOpacity={0.5}>
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                        <View style={{ width: 20 }} />
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign
                            name="clockcircleo"
                            size={22}
                            color="white"
                        />
                    </TouchableOpacity>
                        <View style={{ width: 20 }} />
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign
                            name="setting"
                            size={22}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 20 }} />
                <ButtonsBelowGoodEvening />
                <View style={{ height: 10 }} />
                <SixRecentPlaylists />
                <View style={{ height: 30 }} />
                <RowOfPlaylists title="Jump back in" />
                <View style={{ height: 30 }} />
                <RowOfPlaylists title="Your shows" />
                <View style={{ height: 30 }} />
                <RowOfPlaylists title="Recently Played" />
                <View style={{ height: 30 }} />
                <RowOfPlaylists title="Pop" />
                <View style={{ height: 180 }} />
            </ScrollView>
            <GradientOverlay />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});

function RecentRow({}) {
    return (
        <View
            style={{
                flexDirection: "row",
            }}
        >
            <TouchableOpacity
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
                        uri: "https://unsplash.it/150",
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
                    Lofi{" "}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
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
                        uri: "https://unsplash.it/150",
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
                    Lofi chill beats
                </Text>
            </TouchableOpacity>
        </View>
    );
}
