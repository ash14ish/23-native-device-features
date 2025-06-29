import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { APP_SCREENS } from "./constants/screens-name";
import { Colors } from "./constants/colors";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import PlaceDetails from "./screens/PlaceDetails";
import IconButton from "./components/UI/IconButton";
import { Text } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

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
              title: "All Places",
              headerLeft: ({ tintColor }) => (
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
