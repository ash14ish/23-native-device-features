import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";
import { APP_SCREENS } from "../constants/screens-name";

export default function Map({ navigation }) {
  const defaultLocation = { lat: 28.72, lng: 77.05 };
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

  const region = {
    latitude: defaultLocation.lat,
    longitude: defaultLocation.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const coordinate = event?.nativeEvent?.coordinate;
    setSelectedLocation({
      lat: coordinate.latitude,
      lng: coordinate.longitude,
    });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map) first!"
      );
      return;
    }

    navigation.navigate(APP_SCREENS?.ADD_PLACE_SCREEN, {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation, APP_SCREENS?.ADD_PLACE_SCREEN]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      <Marker
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng,
        }}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
