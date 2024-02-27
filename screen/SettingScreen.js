import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Text>地図</Text>
      <Text>ユーザー情報</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
});
