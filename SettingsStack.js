import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "./screen/SettingScreen";
import LocationTracking from "./components/LocationTracking"; // LocationTrackingのパスを適宜調整してください

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsHome" component={SettingScreen} options={{ headerTitle: "設定" }} />
      <Stack.Screen name="LocationTracking" component={LocationTracking} options={{ headerTitle: "位置情報" }} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
