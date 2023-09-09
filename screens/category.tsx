import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";
import { LayoutDefault } from "../components/layout";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { ScrollView, View } from "../components/view";
import { useEffect, useState } from "react";
import { Button } from "../components/button";

type CategoryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "category"
>;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function CategoryScreen(_: CategoryScreenProps) {
  const [data, setData] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Function to fetch data from your API
    const fetchData = async () => {
      setLoading(true);
      await sleep(2000);
      setData((prevData) => [...prevData, ...Array(10).fill(page)]);
      if (page >= 3) {
        setHasMore(false);
      }
      setLoading(false);
    };

    if (hasMore) {
      fetchData();
    }
  }, [page]); // Run this effect when the page state changes

  // Function to load more data when the user reaches the end of the list
  const loadMoreData = () => {
    if (!loading && hasMore) {
      setPage(page + 1);
    }
  };

  return (
    <LayoutDefault>
      {/* <ScrollView
        stickyHeaderIndices={[1]}
        scrollEventThrottle={16}
        onScroll={(e) => {
          // console.log(e);
        }}
        onMomentumScrollEnd={() => {
          console.log("End of scroll");

          //data.push(...Array(5).fill(0));

          data = data.concat(Array(5).fill(0));

          console.log(data.length);
        }}
        // onEnd
      >
        <View>
          {[...Array(10)].map((_, i) => (
            <View className="bg-white" key={i} padded>
              <Text>Profile - {i}</Text>
            </View>
          ))}
        </View>
        <ScrollView horizontal>
          <Button label="Post" variant="primary" />
          <Button label="Video" variant="primary" />
          <Button label="Promo" variant="primary" />
        </ScrollView>

        {data.map((_, i) => (
          <View className="bg-white" key={i} padded>
            <Text>Post - {i}</Text>
          </View>
        ))}
      </ScrollView> */}

      <View padded>
        <Text className="text-lg font-bold">Account</Text>
        <Text>
          {`📸 Photographer & Adventurer 🌍
📍 Exploring the world, one shot at a time 🌄
📷 Capturing life's beautiful moments and landscapes 🌿
🎥 Check out my latest travel vlog below! ⬇️

✈️ Next Destination: [Your Next Adventure]
💌 For collaborations, DM or email me 📩
🔥 Let's inspire and be inspired together! ✨

#PhotographyLover #Wanderlust #NatureEnthusiast
`}
        </Text>
        <ScrollView horizontal className="space-x-2">
          <Button label="Post" variant="primary" />
          <Button label="Video" variant="primary" />
          <Button label="Promo" variant="primary" />
          <Button label="Tagged" variant="primary" />
        </ScrollView>
      </View>
      <FlatList
        data={data}
        renderItem={(item) => (
          <View padded>
            <Text>
              Item - {item.index} - {item.item}
            </Text>
          </View>
        )}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </LayoutDefault>
  );
}
