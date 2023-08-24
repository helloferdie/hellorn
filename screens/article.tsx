import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LayoutDefault } from "../components/layout";
import { RootStackParamList } from "../navigation/navigation";
import { Text } from "react-native";
import { ScrollView, View } from "../components/view";
import Divider from "../components/divider";

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
      "Python’s simplicity lets you become productive quickly, but this often means you aren’t using everything it has to offer. With this hands-on guide, you’ll learn how to write effective, idiomatic Python code by leveraging its best—and possibly most neglected—features. Author Luciano Ramalho takes you through Python’s core language features and libraries, and shows you how to make your code shorter, faster, and more readable at the same time.",
  },
  {
    date: "24 May 2008",
    title: "JavaScript: The Good Part",
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

type ArticleScreenProps = NativeStackScreenProps<RootStackParamList, "article">;

export default function ArticleScreen(props: ArticleScreenProps) {
  return (
    <LayoutDefault>
      <ScrollView>
        {articles.map((article, i) => (
          <View
            key={i}
            style="border border-gray-300 bg-white shadow-sm rounded-lg"
            padded
            shrink
          >
            <Text className="text-xl">{article.title}</Text>
            <Text className="text-xs italic text-gray-600">
              By {article.author}
            </Text>
            <Divider />
            <Text numberOfLines={2}>{article.content}</Text>
            <Text className="pt-2 text-xs italic text-right text-gray-600">
              {article.date}
            </Text>
          </View>
        ))}
      </ScrollView>
    </LayoutDefault>
  );
}
