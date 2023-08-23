import {SafeAreaView, StatusBar, ScrollView, View} from "react-native";

export function LayoutDefault(props: {children: React.ReactNode}) {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
          {props.children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
