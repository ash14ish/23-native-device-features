import { FlatList } from "react-native";

export default function AllPlaces({ places }) {
  return <FlatList data={places} keyExtractor={(item) => item.id} />;
}
