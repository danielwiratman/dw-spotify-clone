import {
    Easing,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalColors from "../utils/GlobalColors";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import TextTicker from "react-native-text-ticker";

export function FloatingMusicPlayer() {
    const [liked, setLiked] = useState(false);
    const [songTitle, setSongTitle] = useState("");
    const [artist, setArtist] = useState("");

    useEffect(() => {
        setSongTitle("Left and Right (Feat. Jung Kook of BTS)");
        setArtist("Charlie Puth, Jung Kook, BTS");
    }, []);

    return (
        <View style={styles.mainContainer}>
            <Image
                source={{ uri: `https://unsplash.it/150?random=${Math.random()}` }}
                style={{ width: 40, aspectRatio: 1, borderRadius: 5 }}
            />
            <View style={{ flex: 1, marginHorizontal: 10, paddingBottom: 2 }}>
                <TextTicker
                    style={{ color: "white", fontWeight: "700" }}
                    duration={10000}
                    easing={Easing.linear}
                    repeatSpacer={80}
                    marqueeDelay={1000}
                    loop
                >
                    {songTitle}
                </TextTicker>
                <TextTicker
                    style={{
                        color: "white",
                        fontWeight: "400",
                        lineHeight: 16,
                    }}
                    repeatSpacer={80}
                    marqueeDelay={1000}
                    loop
                    duration={10000}
                    easing={Easing.linear}
                >
                    {artist}
                </TextTicker>
            </View>
            {/* <View style={{ width: 4 }} /> */}
            <TouchableOpacity onPress={() => setLiked(!liked)}>
                {liked ? (
                    <AntDesign name="heart" size={24} color="#1ed760" />
                ) : (
                    <AntDesign name="hearto" size={24} color="white" />
                )}
            </TouchableOpacity>
            <View style={{ width: 16 }} />
            <TouchableOpacity>
                <FontAwesome5 name="play" size={20} color="white" />
            </TouchableOpacity>
            <View style={{ width: 8 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        right: 20,
        left: 20,
        bottom: 65,
        padding: 10,
        borderRadius: 10,
        backgroundColor: GlobalColors.floatingPlayerBg,
    },
});
