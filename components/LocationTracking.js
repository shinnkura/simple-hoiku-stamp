import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Alert, Button } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";
import * as Notifications from "expo-notifications";
import { Ionicons } from "@expo/vector-icons";

const targetRegion = {
  latitude: 35.62784471732802,
  longitude: 139.72293269718367,
  radius: 100,
};

const LocationTracking = () => {
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 35.681236, // デフォルトの緯度 (東京駅周辺)
    longitude: 139.767125, // デフォルトの経度
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("位置情報へのアクセス許可", "位置情報のアクセスを許可してください。");
        return;
      }

      // 低精度の位置情報を先に取得
      let currentLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Lowest });
      setLocation(currentLocation.coords);
      setMapRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });

      // 位置情報の変更を監視
      const subscription = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 10 },
        (location) => {
          setLocation(location.coords);
          setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        }
      );

      return () => subscription.remove();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion} showsUserLocation={true}>
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="現在地"
          />
        )}
        <Circle
          center={targetRegion}
          radius={targetRegion.radius}
          strokeColor="rgba(158, 158, 255, 0.5)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
      </MapView>
      <TouchableOpacity style={styles.locationButton} onPress={() => {}}>
        <Ionicons name="locate" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#00bfff",
    borderRadius: 20,
    padding: 10,
  },
});

export default LocationTracking;
