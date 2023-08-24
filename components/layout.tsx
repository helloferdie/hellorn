import { SafeAreaView } from "react-native";

export function LayoutDefault(props: { children: React.ReactNode }) {
  const backgroundStyle = "bg-white";

  return (
    <SafeAreaView className={`flex-1 ${backgroundStyle}`}>
      {props.children}
    </SafeAreaView>
  );
}
