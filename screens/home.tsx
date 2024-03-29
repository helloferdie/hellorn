import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Pressable, Text } from "react-native";
import { RootStackParamList } from "../navigation/navigation";
import { LayoutDefault } from "../components/layout";
import { useState } from "react";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "home">;

export default function HomeScreen(props: HomeScreenProps) {
  const [num, setNum] = useState(1);

  return (
    <LayoutDefault>
      <Text>Home</Text>
      {[...Array(10)].map((_, i) => (
        <Text key={i}>Hello</Text>
      ))}

      <Text className="font-bold">{num}</Text>

      <Button
        title="Click Me"
        onPress={() => {
          setNum((prev) => prev + 1);
        }}
      />

      <Button
        title="Reduce Me"
        onPress={() => {
          setNum((prev) => prev - 1);
        }}
      />

      <Button
        title="Details 2"
        onPress={() => {
          props.navigation.navigate("details", { itemId: 2 });
        }}
      />

      <Pressable
        onPress={() => {
          props.navigation.navigate("details", { itemId: 10 });
        }}
      >
        <Text>Details 10</Text>
      </Pressable>

      <Button
        title="Article"
        onPress={() => {
          props.navigation.navigate("article");
        }}
      />

      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate("login");
        }}
      />

      <Button
        title="Permission"
        onPress={() => {
          props.navigation.navigate("permission");
        }}
      />

      <Button
        title="Notification"
        onPress={() => {
          props.navigation.navigate("notification");
        }}
      />

      <Button
        title="Category"
        onPress={() => {
          props.navigation.navigate("category");
        }}
      />

      <Button
        title="Experiment"
        onPress={() => {
          props.navigation.navigate("experiment");
        }}
      />
    </LayoutDefault>
  );
}
