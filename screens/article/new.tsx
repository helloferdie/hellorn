import { Text } from "react-native";
import { LayoutDefault } from "../../components/layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigation";

type ArticleNewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "article_new"
>;

export default function ArticleNewScreen({ route }: ArticleNewScreenProps) {
  return (
    <LayoutDefault>
      <Text>New Article</Text>
      <Text>Mode : {route.params.mode}</Text>
    </LayoutDefault>
  );
}
