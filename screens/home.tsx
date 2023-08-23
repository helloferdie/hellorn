import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Pressable, Text} from "react-native";
import {RootStackParamList} from "../navigation/navigation";
import {LayoutDefault} from "../components/layout";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "home">;

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <LayoutDefault>
      <Text>Home</Text>
      {[...Array(10)].map((_, i) => (
        <Text key={i}>Hello</Text>
      ))}

      <Pressable
        onPress={() => {
          props.navigation.navigate("details", {itemId: 2});
        }}>
        <Text>Details 2</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          props.navigation.navigate("details", {itemId: 10});
        }}>
        <Text>Details 10</Text>
      </Pressable>
    </LayoutDefault>
  );
}
