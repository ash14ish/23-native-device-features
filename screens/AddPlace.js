import PlaceForm from "../components/Places/PlaceForm";
import { APP_SCREENS } from "../constants/screens-name";

function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate(APP_SCREENS?.ALL_PLACES_SCREEN, {
      place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
