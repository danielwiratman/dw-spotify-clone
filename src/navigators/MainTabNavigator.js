import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LibraryScreen from "../screens/LibraryScreen";
import SearchScreen from "../screens/SearchScreen";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "transparent",
                    position: "absolute",
                    elevation: 0,
                    bottom: 5,
                    alignItems: "center",
                    borderTopWidth: 0,
                    paddingHorizontal: 45,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "md-home" : "md-home-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarInactiveTintColor: "#fffa",
                    tabBarActiveTintColor: "#fff",
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="search" size={24} color={color} />
                    ),
                    tabBarInactiveTintColor: "#fffa",
                    tabBarActiveTintColor: "#fff",
                }}
            />
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "library" : "library-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarInactiveTintColor: "#fffa",
                    tabBarActiveTintColor: "#fff",
                }}
            />
        </Tab.Navigator>
    );
};

function WrappedHomeScreen() {
    return (
      <View>

      </View>
    );
}

export default MainTabNavigator;

const styles = StyleSheet.create({});
