import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import LocationTracking from "../components/LocationTracking";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>地図</Text>
      <LocationTracking />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFB347",
    alignSelf: "center",
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SettingScreen;
