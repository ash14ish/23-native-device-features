import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { APP_SCREENS } from "./constants/screens-name";
import { Colors } from "./constants/colors";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import PlaceDetails from "./screens/PlaceDetails";
import IconButton from "./components/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import Map from "./screens/Map";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded, fontError] = useFonts({
    ...Ionicons.font,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name={APP_SCREENS?.ALL_PLACES_SCREEN}
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() =>
                    navigation.navigate(APP_SCREENS?.ADD_PLACE_SCREEN)
                  }
                />
              ),
            })}
          />

          <Stack.Screen
            name={APP_SCREENS?.ADD_PLACE_SCREEN}
            component={AddPlace}
            options={{
              title: "Add a new Place",
            }}
          />

          <Stack.Screen name={APP_SCREENS?.MAP_SCREEN} component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
