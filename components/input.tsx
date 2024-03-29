import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
}

export function TextInputDefault({ label, ...props }: InputProps) {
  return (
    <View className="mb-4">
      <Text className="font-medium">{label}</Text>
      <TextInput
        textAlignVertical={props.multiline ? "top" : undefined}
        className={`mt-2 rounded-md ${
          props.multiline ? "py-3" : "py-2"
        } px-3 border border-gray-400 bg-white focus:border-2 focus:border-primary-600`}
        {...props}
      />
    </View>
  );
}

// Check max lines usage in onChangeText
export function CheckMaxLines(text: string, maxLines: number): boolean {
  if (text.split("\n").length <= maxLines) {
    return true;
  }
  return false;
}

// Calculate height when max lines is available on iOS
export function CalculateMaxLinesHeight(maxLines: number): number {
  return 22.5 * maxLines;
}
