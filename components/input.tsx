import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
}

export function TextInputDefault({ label, ...props }: InputProps) {
  return (
    <View className="mb-4">
      <Text className="font-medium">{label}</Text>
      <TextInput
        className="mt-2 rounded-md py-2 px-3 border border-gray-400 bg-white focus:border-2 focus:border-primary-600"
        {...props}
      />
    </View>
  );
}
