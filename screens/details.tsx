import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Pressable, Text} from "react-native";
import {RootStackParamList} from "../navigation/navigation";
import {LayoutDefault} from "../components/layout";
import {useEffect} from "react";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "details">;

export default function DetailsScreen(props: DetailsScreenProps) {
  useEffect(() => {
    props.navigation.setOptions({
      title: "Details - " + props.route.params.itemId,
    });
  }, [props.navigation, props.route.params.itemId]);

  return (
    <LayoutDefault>
      {[...Array(10)].map((_, i) => (
        <Text key={i}>Hello</Text>
      ))}

      <Pressable
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Text>Go to home</Text>
      </Pressable>
    </LayoutDefault>
  );
}
