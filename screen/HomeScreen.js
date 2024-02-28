import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const daysUntilPresent = 10; // プレゼントまでの日数

  const renderCustomHeader = (dateString) => {
    // ISO 8601形式の日付文字列からDateオブジェクトを作成
    const dateObject = new Date(dateString);

    // Dateオブジェクトから年と月を取得
    const year = dateObject.getFullYear();
    const monthIndex = dateObject.getMonth(); // getMonthは0から始まるため、LocaleConfigでの月の名前を取得する際には+1する必要はありません
    const month = LocaleConfig.locales["jp"].monthNames[monthIndex];

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{`${year}年 ${month}`}</Text>
      </View>
    );
  };

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
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16,
        }}
        hideArrows={true}
        enableSwipeMonths={true}
        renderHeader={renderCustomHeader} // カスタムヘッダーを使用
      />
      <Text style={styles.daysText}>プレゼントまであと{daysUntilPresent}日</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert("プレゼントを受け取りました！")}>
        <Text style={styles.buttonText}>プレゼントを受け取る</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

LocaleConfig.locales.jp = {
  monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
  dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
};
LocaleConfig.defaultLocale = "jp";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  header: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFB347",
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
    marginHorizontal: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
