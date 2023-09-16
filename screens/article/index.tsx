import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { LayoutDefault } from "../../components/layout";
import { RootStackParamList } from "../../navigation/navigation";
import { Pressable, Text, VirtualizedList } from "react-native";
import { View } from "../../components/view";
import Divider from "../../components/divider";
import { memo, useState } from "react";
import PlusCircleIcon from "react-native-heroicons/solid/PlusCircleIcon";
import EllipsisHorizontalIcon from "react-native-heroicons/outline/EllipsisHorizontalIcon";
import { Button, ButtonIcon } from "../../components/button";
import { ModalDrawer, ModelDrawerItem } from "../../components/modal";
import { TextInputDefault } from "../../components/input";
import { useQuery, useRealm } from "../../models/config";
import { Article } from "../../models/article";

const palette = require("../../styles/palette.ts");
const articles = [
  {
    date: "24 August 2023",
    title: "The Lorem Ipsum",
    author: "John Doe",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    date: "30 July 2015",
    title: "Fluent Python",
    author: "Luciano Ramalho",
    content:
      "Python's simplicity lets you become productive quickly, but this often means you aren't using everything it has to offer. With this hands-on guide, you’ll learn how to write effective, idiomatic Python code by leveraging its best—and possibly most neglected—features. Author Luciano Ramalho takes you through Python’s core language features and libraries, and shows you how to make your code shorter, faster, and more readable at the same time.",
  },
  {
    date: "24 May 2008",
    title: "Javascript The Good Part",
    author: "Douglas Crockford",
    content:
      "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.",
  },
  {
    date: "2001",
    title: "Introduction To Programming",
    author:
      "Thomas H Cormen, Charles E Leiserson, Ronald L Rivest, Clifford Stein",
    content:
      "This title covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and can be used as a unit of study. The algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming. The explanations have been kept elementary without sacrificing depth of coverage or mathematical rigor.",
  },
];

const largeArticles: typeof articles = [];
for (let i = 0; i <= 100; i++) {
  largeArticles.push(...articles);
}

function VirtualizedListArticles({ list }: { list: typeof articles }) {
  const getItemCount = () => list.length;
  const getItem = (data: typeof articles, index: number) => data[index];

  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof articles)[0];
    index: number;
  }) => (
    <View
      className="border border-gray-300 bg-white shadow-sm rounded-lg"
      padded
      shrink
    >
      <Text className="text-xl">
        {index} - {item.title}
      </Text>
      <Text className="text-xs italic text-gray-600">By {item.author}</Text>
      <Divider />
      <Text numberOfLines={2} className="text-sm">
        {item.content}
      </Text>
      <Text className="pt-2 text-xs italic text-right text-gray-600">
        {item.date}
      </Text>
    </View>
  );

  return (
    <VirtualizedList
      initialNumToRender={8}
      data={largeArticles}
      getItemCount={getItemCount}
      getItem={getItem}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}

const MemoizedVirtualizedListArticles = memo(VirtualizedListArticles);

type ArticleScreenProps = NativeStackScreenProps<RootStackParamList, "article">;

export function ArticleScreenOpts({
  navigation,
}: ArticleScreenProps): NativeStackNavigationOptions {
  return {
    title: "Artikel",
    headerShown: true,
    headerRight: () => (
      <Pressable
        onPress={() => {
          navigation.navigate("article_new", { mode: "hehe" });
        }}
      >
        <PlusCircleIcon fill={palette.primary[600]} size={32} />
      </Pressable>
    ),
  };
}

export default function ArticleScreen({ navigation }: ArticleScreenProps) {
  const [visible, setVisible] = useState(false);

  const items = useQuery(Article);

  //const realm = useRealm();
  //const items = realm.objects<Article>("Article");

  //items[0].
  // console.log(item);

  return (
    <LayoutDefault>
      {items.map((v, i) => {
        return <Text key={i}>{v.author}</Text>;
      })}
      <MemoizedVirtualizedListArticles list={largeArticles} />
      <View padded>
        <View className="flex-row space-x-2">
          <ButtonIcon
            variant="outlined"
            onPress={() => {
              setVisible(true);
            }}
          >
            <EllipsisHorizontalIcon color={palette.primary[600]} size={24} />
          </ButtonIcon>

          <Button
            className="flex-1"
            label="Add"
            variant="primary"
            onPress={() => {
              navigation.navigate("article_new", { mode: "132" });
            }}
          />
        </View>
      </View>

      <ModalDrawer
        visible={visible}
        title="Opsi tambahan"
        showClose
        onClose={() => {
          setVisible(false);
        }}
      >
        <ModelDrawerItem>
          <Text>Download excel</Text>
        </ModelDrawerItem>
        <Divider />
        <ModelDrawerItem>
          <Text>Kirim email</Text>
          <TextInputDefault />
        </ModelDrawerItem>
      </ModalDrawer>
    </LayoutDefault>
  );
}
