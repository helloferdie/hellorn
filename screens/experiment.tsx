import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LayoutDefault } from "../components/layout";
import { RootStackParamList } from "../navigation/navigation";
import {
  Tabs,
  MaterialTabBar,
  MaterialTabItem,
  TabBarProps,
} from "react-native-collapsible-tab-view";
import { Text } from "react-native";
import { View } from "../components/view";
import { useState } from "react";
import { Button } from "../components/button";
import { runOnJS, useAnimatedReaction } from "react-native-reanimated";

type ExperimentScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "experiment"
>;

const Header = () => {
  return (
    <View padded>
      <Text className="text-lg font-bold">Account</Text>
      <Text className="text-sm">
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
    </View>
  );
};

const TabBar = (props: TabBarProps<string>) => {
  const [activeIndex, setActiveIndex] = useState(props.index.value);
  useAnimatedReaction(
    () => {
      return props.index.value;
    },
    (animValue) => {
      if (animValue !== activeIndex) {
        runOnJS(setActiveIndex)(animValue);
      }
    },
    [activeIndex]
  );

  return (
    <MaterialTabBar
      {...props}
      contentContainerStyle={{
        paddingTop: 6,
        paddingHorizontal: 16,
      }}
      indicatorStyle={{
        backgroundColor: "transparent",
      }}
      scrollEnabled
      TabItemComponent={(itemProps) => {
        return (
          <MaterialTabItem
            {...itemProps}
            label={(labelProps) => {
              return (
                <Button
                  label={labelProps.name}
                  variant={
                    activeIndex === itemProps.index ? "primary" : "outlined"
                  }
                  onPress={() => itemProps.onPress(labelProps.name)}
                />
              );
            }}
            style={{
              paddingHorizontal: 0,
              marginRight:
                itemProps.index === props.tabNames.length - 1 ? 0 : 8,
            }}
          />
        );
      }}
    />
  );
};

export default function ExperimentScreen(_: ExperimentScreenProps) {
  return (
    <LayoutDefault>
      <Tabs.Container renderHeader={Header} renderTabBar={TabBar}>
        <Tabs.Tab name="Post">
          <Tabs.ScrollView>
            <Text>Content A</Text>
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Video">
          <Tabs.ScrollView>
            <Text>Content B</Text>
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Tagged">
          <Tabs.ScrollView>
            <Text>Content C</Text>
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Album">
          <Tabs.ScrollView>
            <Text>Content D</Text>
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Deals">
          <Tabs.ScrollView>
            <Text>Content E</Text>
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Shop">
          <Tabs.ScrollView>
            <Text>Content F</Text>
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </LayoutDefault>
  );
}
