import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigation";
import {
  Dimensions,
  Text,
  Image,
  ImageBackground,
  ImageSourcePropType,
  ViewProps,
  FlatList,
} from "react-native";
import { ScrollView, View } from "../../components/view";
import { Button, ButtonCompact } from "../../components/button";
import CheckCirlceIcon from "react-native-heroicons/solid/CheckCircleIcon";
import LinearGradient from "react-native-linear-gradient";

type EventScreenProps = NativeStackScreenProps<RootStackParamList, "event">;

interface Event {
  organizer: {
    name: string;
    photo: ImageSourcePropType;
    verified: boolean;
  };
  banner: ImageSourcePropType;
  title: string;
  category: string;
  landmark: string;
  city: string;
  district: string;
  date: string;
  distance: number;
  price: number;
  discount: boolean;
  price_discount: number;
  display_social: boolean;
}

const trendingEvents: Event[] = [
  {
    organizer: {
      name: "ISMAYA Live",
      photo: require("../../assets/logo/ismayalive.png"),
      verified: true,
    },
    banner: require("../../assets/event/wtf2023.png"),
    title: "WE THE FEST 2023",
    category: "Music",
    landmark: "Gelora Bung Karno",
    city: "Jakarta Pusat",
    district: "Tanah Abang",
    date: "21 - 23 Jul 2023",
    distance: 1.2,
    price: 1500000,
    discount: true,
    price_discount: 1300000,
    display_social: true,
  },
  {
    organizer: {
      name: "victoria.run.id",
      photo: require("../../assets/logo/victoriarun.jpeg"),
      verified: false,
    },
    banner: require("../../assets/event/victoriarun.jpeg"),
    title: "Victoria Run 2023",
    category: "Sport",
    landmark: "QBig BSD",
    city: "Kab. Tangerang",
    district: "Banten",
    date: "29 Okt 2023",
    distance: 4.2,
    price: 300000,
    discount: false,
    price_discount: 0,
    display_social: true,
  },
  {
    organizer: {
      name: "prestigepromotions.id",
      photo: require("../../assets/logo/prestigepromotion.jpeg"),
      verified: false,
    },
    banner: require("../../assets/event/worship.jpeg"),
    title: "INDONESIA UNITED IN WORSHIP INDONESIA UNITED IN WORSHIP",
    category: "Religion",
    landmark: "Community Park PIK 2",
    city: "Kab. Tangerang",
    district: "Banten",
    date: "28 Okt 2023, 15:00",
    distance: 4.2,
    price: 0,
    discount: false,
    price_discount: 0,
    display_social: false,
  },
];

const upcomingEvents = trendingEvents;
const nearbyEvents = trendingEvents;

const personalizeEvents = trendingEvents;

function Event({ data }: { data: Event }) {
  return (
    <View
      className="border border-gray-300 bg-white shadow-sm rounded-lg mr-0"
      shrink
      style={{
        width: Dimensions.get("screen").width - 50,
        height: (Dimensions.get("screen").width - 50) / 1.25,
      }}
    >
      <ImageBackground
        source={data.banner}
        resizeMode="cover"
        className="flex-1 rounded-t-lg overflow-hidden"
      >
        <LinearGradient
          className="pt-3 pb-6 px-4"
          colors={["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"]}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Image
                source={data.organizer.photo}
                className="rounded-full w-5 h-5"
              />
              <Text className="text-sm font-bold px-1 text-white">
                {data.organizer.name}
              </Text>
              {data.organizer.verified && (
                <CheckCirlceIcon color={"#0ea5e9"} size={15} />
              )}
            </View>
            <View className="px-3 py-1 rounded-full text-xs font-medium bg-primary-600">
              <Text className="text-xs font-medium text-white">
                {data.category}
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View className="flex-1" />
        {data.display_social && (
          <LinearGradient
            className="pt-5 pb-2 px-4 flex-row"
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
          >
            <Image
              source={require("../../assets/user/aldo.png")}
              className="rounded-full w-5 h-5"
            />
            <Image
              source={require("../../assets/user/pham.png")}
              className="rounded-full w-5 h-5 -left-1.5 -mr-1.5"
            />
            <Image
              source={require("../../assets/user/eric.png")}
              className="rounded-full w-5 h-5 -left-1.5 -mr-1.5"
            />
            <View className="px-1">
              <Text className="text-white text-sm">
                <Text className="font-semibold">eric</Text>,{" "}
                <Text className="font-semibold">aldo</Text> and{" "}
                <Text className="font-semibold">32 others</Text> joined
              </Text>
            </View>
          </LinearGradient>
        )}
      </ImageBackground>

      <View padX className="h-25 py-2">
        <Text
          className="text-base font-bold"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {data.title}
        </Text>

        <View className="flex-row justify-between items-start">
          <View>
            <Text className="text-xs">{data.landmark}</Text>
            <Text className="text-xs">
              {data.district}, {data.city}
            </Text>
          </View>
          <Text className="text-xs">{data.distance.toFixed(1)}km</Text>
        </View>

        <View className="flex-row justify-between items-center h-10">
          <Text className="text-sm font-bold text-gray-600">{data.date}</Text>
          <View className="items-end">
            {data.discount ? (
              <>
                <Text className="text-base font-bold text-primary-600">
                  Free
                </Text>
                <Text className="text-xs italic font-bold text-gray-400 line-through">
                  Rp 100.000
                </Text>
              </>
            ) : data.price === 0 ? (
              <Text className="text-base font-bold text-primary-600">Free</Text>
            ) : (
              <Text className="text-base font-bold text-primary-600">
                Rp. {data.price.toLocaleString("en-ID")}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

interface Explore {
  text: string;
  photo: ImageSourcePropType;
}

const exploreList: Explore[] = [
  {
    text: "SCBD",
    photo: require("../../assets/venue/scbd.jpg"),
  },
  {
    text: "Senayan",
    photo: require("../../assets/venue/senayan.jpg"),
  },
  {
    text: "Senopati",
    photo: require("../../assets/venue/senopati.jpg"),
  },
  {
    text: "BSD",
    photo: require("../../assets/venue/bsd.jpg"),
  },
  {
    text: "PIK",
    photo: require("../../assets/venue/pik.jpg"),
  },
  {
    text: "Pondok Indah",
    photo: require("../../assets/venue/pim.jpg"),
  },
];

function Explore({ text, photo }: Explore) {
  return (
    <ImageBackground
      source={photo}
      className="rounded-lg mr-4 mb-4 overflow-hidden"
      style={{
        width: (Dimensions.get("screen").width - 65) / 3,
        height: (Dimensions.get("screen").width - 65) / 3,
      }}
    >
      <View className="flex-1 justify-end p-2 bg-black/50">
        <Text className="text-base font-bold text-right text-white">
          {text}
        </Text>
      </View>
    </ImageBackground>
  );
}

export default function EventScreen(_: EventScreenProps) {
  return (
    <ScrollView>
      <View padded className="pb-0">
        <Text className="text-xl font-bold">Your upcoming events</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.2}
        snapToInterval={Dimensions.get("screen").width - 50 + 12}
        className="pb-4"
      >
        <View className="flex-row pr-5">
          {upcomingEvents.map((val, i) => {
            return <Event key={i} data={val} />;
          })}
        </View>
      </ScrollView>

      <View padX className="pt-2 pb-0 bg-white">
        <Text className="text-xl font-bold">Trending</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.2}
        snapToInterval={Dimensions.get("screen").width - 50 + 12}
        className="pb-4 bg-white"
      >
        <View className="flex-row pr-5">
          {trendingEvents.map((val, i) => {
            return <Event key={i} data={val} />;
          })}
        </View>
      </ScrollView>

      <View padX className="pt-2 pb-0">
        <Text className="text-xl font-bold">Nearby</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.2}
        snapToInterval={Dimensions.get("screen").width - 50 + 12}
        className="pb-4"
      >
        <View className="flex-row pr-5">
          {nearbyEvents.map((val, i) => {
            return <Event key={i} data={val} />;
          })}
        </View>
      </ScrollView>

      <View padX className="pt-2 pb-0 bg-white">
        <Text className="text-xl font-bold">Browse by Category</Text>
      </View>
      <View padded className="bg-white pb-0 flex-row flex-wrap">
        <ButtonCompact label="Sports" variant="primary" className="mr-2 " />
        <ButtonCompact label="Music" variant="primary" className="mr-2 " />
        <ButtonCompact label="Business" variant="primary" className="mr-2" />
        <ButtonCompact label="Charity" variant="primary" className="mr-2" />
        <ButtonCompact label="Hobbies" variant="primary" className="mr-2" />
        <ButtonCompact label="Theater" variant="primary" className="mr-2" />
        <ButtonCompact label="Arts" variant="primary" className="mr-2" />
        <ButtonCompact label="Religion" variant="primary" className="mr-2" />
      </View>

      <View padX className="pt-2 pb-0">
        <Text className="text-xl font-bold">For you</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.2}
        snapToInterval={Dimensions.get("screen").width - 50 + 12}
        className="pb-4"
      >
        <View className="flex-row pr-5">
          {personalizeEvents.map((val, i) => {
            return <Event key={i} data={val} />;
          })}
        </View>
      </ScrollView>

      <View padX className="pt-2 pb-0 bg-white">
        <Text className="text-xl font-bold">Explore more</Text>
      </View>

      <View padY className="flex-row pl-4 flex-wrap bg-white">
        {/* <Explore text="SCBD" />
        <Explore text="Senopati" />
        <Explore text="Pondok Indah" />
        <Explore text="BSD" />
        <Explore text="PIK" />
        <Explore text="Senayan" /> */}

        {exploreList.map((v, i) => (
          <Explore {...v} key={i} />
        ))}
      </View>
    </ScrollView>
  );
}
