import { View as RNView } from "react-native";

interface DividerProps {
  borderColor?: string;
  children?: React.ReactNode;
}

export default function Divider(props: DividerProps) {
  return (
    <RNView className="py-4">
      <RNView className="flex items-center">
        <RNView
          className={`w-full border-t ${
            props.borderColor ? props.borderColor : "border-gray-300"
          }`}
        />
      </RNView>
      {props.children && (
        <RNView className="relative -top-3 -mb-3 flex items-center justify-center">
          <RNView className="bg-white px-2">{props.children}</RNView>
        </RNView>
      )}
    </RNView>
  );
}
