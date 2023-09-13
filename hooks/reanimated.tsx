import { useState } from "react";
import {
  SharedValue,
  runOnJS,
  useAnimatedReaction,
} from "react-native-reanimated";

export function useConvertAnimatedToValue<T>(animatedValue: SharedValue<T>) {
  const [value, setValue] = useState(animatedValue.value);

  useAnimatedReaction(
    () => {
      return animatedValue.value;
    },
    (animValue) => {
      if (animValue !== value) {
        runOnJS(setValue)(animValue);
      }
    },
    [value]
  );

  return value;
}
