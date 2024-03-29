import Realm from "realm";
import { Alert, Pressable, Text } from "react-native";
import { LayoutDefault } from "../../components/layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigation";
import { ScrollView, View } from "../../components/view";
import {
  CalculateMaxLinesHeight,
  CheckMaxLines,
  TextInputDefault,
} from "../../components/input";
import { useState } from "react";
import { Button } from "../../components/button";
import { useRealm } from "../../models/config";
import Clipboard from "@react-native-clipboard/clipboard";

type ArticleNewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "article_new"
>;

const initForm = {
  author: "",
  title: "",
  content: "",
};

export default function ArticleNewScreen({ route }: ArticleNewScreenProps) {
  const realm = useRealm();
  const [form, setForm] = useState(initForm);

  const handleSaveForm = () => {
    realm.write(() => {
      realm.create("Article", {
        _id: new Realm.BSON.ObjectId(),
        ...form,
      });
    });
  };

  //console.log(realm.path);

  return (
    <LayoutDefault>
      <ScrollView padded>
        <TextInputDefault
          label="Author"
          value={form.author}
          onChangeText={(text) => {
            setForm((prev) => ({
              ...prev,
              author: text,
            }));
          }}
        />
        <TextInputDefault
          label="Title"
          value={form.title}
          onChangeText={(text) => {
            setForm((prev) => ({
              ...prev,
              title: text,
            }));
          }}
        />
        <TextInputDefault
          label="Content"
          value={form.content}
          multiline
          numberOfLines={5}
          onChangeText={(text) => {
            if (!CheckMaxLines(text, 5)) {
              return;
            }

            setForm((prev) => ({
              ...prev,
              content: text,
            }));
          }}
          style={{
            height: CalculateMaxLinesHeight(5),
          }}
        />
        <Pressable
          onPress={() => {
            Clipboard.setString(realm.path);
          }}
        >
          <Text>{realm.path}</Text>
        </Pressable>
      </ScrollView>
      <View padded>
        <Button
          label="Add"
          variant="primary"
          onPress={() => {
            Alert.alert("Submit", JSON.stringify(form));
            handleSaveForm();
            // navigation.navigate("article_new", { mode: "132" });
          }}
        />
        <Button
          label="Reset"
          variant="outlined"
          onPress={() => {
            setForm(initForm);
          }}
        />
      </View>
    </LayoutDefault>
  );
}
