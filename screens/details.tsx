import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";
import { LayoutDefault } from "../components/layout";
import { useEffect } from "react";
import { TextInputDefault } from "../components/input";
import { Button } from "../components/button";
import { ScrollView, View } from "../components/view";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "details">;

export default function DetailsScreen(props: DetailsScreenProps) {
  useEffect(() => {
    props.navigation.setOptions({
      title: "Details - " + props.route.params.itemId,
    });
  }, [props.navigation, props.route.params.itemId]);

  return (
    <LayoutDefault>
      <ScrollView padded>
        {[...Array(15)].map((_, i) => (
          <TextInputDefault key={i} label="My first name" value="" />
        ))}
      </ScrollView>
      <View padded>
        <Button label="Save" variant="primary" />
        <Button label="Copy" variant="secondary" />
        <Button
          label="Go to home"
          variant="outlined"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
    </LayoutDefault>
  );
}
