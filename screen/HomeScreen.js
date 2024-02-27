import React from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Calendar
        theme={{
          selectedDayBackgroundColor: "#FFB347",
          todayTextColor: "#FFB347",
          arrowColor: "#FFB347",
        }}
      />
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
});

export default HomeScreen;
