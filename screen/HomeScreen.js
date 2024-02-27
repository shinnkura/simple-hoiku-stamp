import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const daysUntilPresent = 10; // プレゼントまでの日数

  return (
    <View style={styles.container}>
      <Calendar
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#FFB347",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#FFB347",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#FFB347",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#FFB347",
          indicatorColor: "#FFB347",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16,
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
    justifyContent: "flex-start", // カレンダーを上部に配置
    paddingTop: 30, // 上部の余白を追加
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
