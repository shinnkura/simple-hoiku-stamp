import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="位置情報をチェック" onPress={() => navigation.navigate("LocationTracking")} />
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
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SettingScreen;
