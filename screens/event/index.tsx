import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigation";
import {
  Dimensions,
  Text,
  Image,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { ScrollView, View } from "../../components/view";
import { Button, ButtonCompact, ButtonIcon } from "../../components/button";
import CheckCirlceIcon from "react-native-heroicons/solid/CheckCircleIcon";
import ChevronRightIcon from "react-native-heroicons/solid/ChevronRightIcon";
import QrCodeIcon from "react-native-heroicons/outline/QrCodeIcon";
import LinearGradient from "react-native-linear-gradient";

const palette = require("../../styles/palette.ts");

type EventScreenProps = NativeStackScreenProps<RootStackParamList, "event">;

const clsCurrency = "text-base font-bold text-primary-600";
const clsCurrencyDiscount =
  "text-xs line-through font-bold italic text-gray-500";

function RenderCurrency(n: number): string {
  if (n <= 0) {
    return "FREE";
  }
  return "Rp " + n.toLocaleString("en-ID");
}

function RenderDistance(n: number): string {
  if (Math.round(n) === n) {
    return n.toLocaleString("en-ID");
  }
  return n.toLocaleString("en-ID", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

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
  day: string;
  distance: number;
  price: number;
  discount: boolean;
  price_discount: number;
  display_price_start: boolean;
  display_social: boolean;
}

const wtf2023: Event = {
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
  day: "21 Jul 2023",
  distance: 1.2,
  price: 1500000,
  discount: true,
  price_discount: 1300000,
  display_price_start: true,
  display_social: true,
};

const victoriaRun: Event = {
  organizer: {
    name: "victoria.run.id",
    photo: require("../../assets/logo/victoriarun.jpeg"),
    verified: true,
  },
  banner: require("../../assets/event/victoriarun.jpeg"),
  title: "Victoria Run 2023",
  category: "Sport",
  landmark: "QBig BSD",
  city: "Kab. Tangerang",
  district: "Banten",
  date: "29 Okt 2023",
  day: "Minggu, 29 Okt 2023",
  distance: 4.2,
  price: 300000,
  discount: false,
  price_discount: 0,
  display_price_start: true,
  display_social: true,
};

const indonesiaUnited: Event = {
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
  day: "28 Okt 2023",
  distance: 4.2,
  price: 0,
  discount: false,
  price_discount: 0,
  display_price_start: false,
  display_social: false,
};

const marketerHangout: Event = {
  organizer: {
    name: "marketeers",
    photo: require("../../assets/logo/marketers.id.jpeg"),
    verified: false,
  },
  banner: require("../../assets/event/marketerhangout23.jpeg"),
  title: "MARKETEERS HANGOUT 2023",
  category: "Business",
  landmark: "Ciputra Artpreneur",
  city: "Jakarta Selatan",
  district: "Kuningan",
  date: "18 Sep 2023, 10:00",
  day: "18 Sep 2023",
  distance: 1.8,
  price: 1500000,
  discount: false,
  price_discount: 0,
  display_price_start: false,
  display_social: false,
};

const ultraBeach: Event = {
  organizer: {
    name: "ultrabali",
    photo: require("../../assets/logo/ultrabali.jpg"),
    verified: true,
  },
  banner: require("../../assets/event/ultrabali.jpeg"),
  title: "Ultra Beach Bali 2023",
  category: "Music",
  landmark: "Locca Sea House",
  city: "Bali",
  district: "Badung",
  date: "20 - 21 Sep",
  day: "20 Sep 2023",
  distance: 1146,
  price: 1000000,
  discount: false,
  price_discount: 0,
  display_price_start: true,
  display_social: false,
};

const atlasBeach: Event = {
  organizer: {
    name: "atlasbeachclub",
    photo: require("../../assets/logo/atlas.jpg"),
    verified: false,
  },
  banner: require("../../assets/event/atlas.jpeg"),
  title: "ATLAS NYE PARTY 2023",
  category: "Music",
  landmark: "ATLAS Beach Club",
  city: "Bali",
  district: "Badung",
  date: "31 Des",
  day: "Minggu, 31 Dec 2023",
  distance: 1050,
  price: 2000000,
  discount: false,
  price_discount: 0,
  display_price_start: true,
  display_social: false,
};

const architecture: Event = {
  organizer: {
    name: "iaijakarta",
    photo: require("../../assets/logo/jarchitecture.jpg"),
    verified: true,
  },
  banner: require("../../assets/event/jarchitecture.jpeg"),
  title: "Movie Screening",
  category: "Theater",
  landmark: "Goethe Institut Jakarta",
  city: "Jakarta Pusat",
  district: "Menteng",
  date: "19 Sep",
  day: "19 Sep",
  distance: 2.2,
  price: 35000,
  discount: false,
  price_discount: 0,
  display_price_start: false,
  display_social: false,
};

const hindia: Event = {
  organizer: {
    name: "antara. suara",
    photo: require("../../assets/logo/antarasuara.jpg"),
    verified: false,
  },
  banner: require("../../assets/event/hindia.jpeg"),
  title: "Hindia - Lagipula Hidup Akan Berakhir Album Concert",
  category: "Music",
  landmark: "Blue Valley House of Communion",
  city: "Jakarta Timur",
  district: "Pulo Gadung",
  date: "30 Sep",
  day: "Sabtu, 30 Sep 2023",
  distance: 5.8,
  price: 275000,
  discount: false,
  price_discount: 0,
  display_price_start: false,
  display_social: false,
};

const upcomingEvents: Event[] = [victoriaRun, atlasBeach];

const trendingEvents: Event[] = [wtf2023, victoriaRun, marketerHangout];

const nearbyEvents: Event[] = [architecture, indonesiaUnited];

const personalizeEvents: Event[] = [ultraBeach, hindia];

function UpcomingEvent({ data }: { data: Event }) {
  return (
    <View
      className="border border-gray-300  bg-white shadow-sm rounded-lg mr-0"
      shrink
      style={{
        width: Dimensions.get("screen").width - 50,
        height: 180,
      }}
    >
      <View padX className="pt-4 pb-2 flex-row ">
        <View className="flex-1">
          <View className="flex-row pb-1">
            <Image
              source={data.organizer.photo}
              className="rounded-full w-5 h-5"
            />
            <Text className="text-sm font-bold px-1 ">
              {data.organizer.name}
            </Text>
            {data.organizer.verified && (
              <CheckCirlceIcon color={"#0ea5e9"} size={15} />
            )}
          </View>

          <Text
            className="text-base font-bold"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {data.title}
          </Text>

          <Text className="text-sm font-bold text-gray-600">{data.day}</Text>
        </View>

        <View>
          <ButtonIcon
            variant="outlined"
            className="w-10 h-10"
            onPress={() => {}}
          >
            <QrCodeIcon color={palette.primary[600]} />
          </ButtonIcon>
        </View>
      </View>
      <View className="flex-row">
        <Image
          source={data.banner}
          resizeMode="center"
          style={{
            width: "30%",
            height: "100%",
            overflow: "hidden",
          }}
        />

        <View className="pl-2 flex-1">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-xs">{data.landmark}</Text>
              <Text className="text-xs">
                {data.district}, {data.city}
              </Text>
              <Text className="text-xs">
                {RenderDistance(data.distance)}
                km
              </Text>
            </View>
            <View></View>
          </View>
        </View>
      </View>

      {data.display_social && (
        <View padX className="flex-row pt-1">
          <View className="flex-row">
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
              <Text className="text-sm">
                <Text className="font-semibold">eric</Text>,{" "}
                <Text className="font-semibold">aldo</Text> and{" "}
                <Text className="font-semibold">32 others</Text> joined
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

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
                <CheckCirlceIcon color={"#f5f5f5"} size={15} />
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
          <View className="items-end">
            <Text className="text-xs">
              {RenderDistance(data.distance)}
              km
            </Text>
            {data.display_price_start && data.discount && (
              <Text className="text-xs">Mulai dari</Text>
            )}
          </View>
        </View>

        <View className="flex-row justify-between items-center h-10">
          <Text className="text-sm font-bold text-gray-600">{data.date}</Text>
          <View className="items-end">
            {data.display_price_start && !data.discount && (
              <Text className="text-xs">Mulai dari</Text>
            )}

            <Text className={data.discount ? clsCurrencyDiscount : clsCurrency}>
              {RenderCurrency(data.price)}
            </Text>

            {data.discount && (
              <Text className={clsCurrency}>
                {RenderCurrency(data.price_discount)}
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
            return <UpcomingEvent key={i} data={val} />;
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

      <View padX className="pt-2 pb-0 flex-row items-center">
        <Text className="text-xl font-bold flex-1">Nearby</Text>
        <ChevronRightIcon color="black" />
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
      <View padded className="bg-white flex-row flex-wrap justify-center">
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
        {exploreList.map((v, i) => (
          <Explore {...v} key={i} />
        ))}
      </View>
    </ScrollView>
  );
}
