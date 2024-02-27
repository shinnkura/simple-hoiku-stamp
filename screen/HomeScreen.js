import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  // プレゼントまでの日数を計算するダミーのロジック
  const daysUntilPresent = 10; // 例として10日後とします

  return (
    <View style={styles.container}>
      <Calendar
        theme={{
          selectedDayBackgroundColor: "#FFB347",
          todayTextColor: "#FFB347",
          arrowColor: "#FFB347",
        }}
      />
      <Text style={styles.daysText}>プレゼントまであと{daysUntilPresent}日</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert("プレゼントを受け取りました！")}>
        <Text style={styles.buttonText}>プレゼントを受け取る</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
  daysText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFB347",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 50, // ボタンの幅を調整
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
