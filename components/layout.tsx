import { SafeAreaView, StatusBar } from "react-native";

export function LayoutDefault(props: { children: React.ReactNode }) {
  const backgroundStyle = "bg-white";

  return (
    <SafeAreaView className={`flex-1 ${backgroundStyle}`}>
      <StatusBar barStyle={"dark-content"} />
      {props.children}
    </SafeAreaView>
  );
}
