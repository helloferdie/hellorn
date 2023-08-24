import { Pressable, PressableProps, Text } from "react-native";
import styles from "../styles/theme";

interface ButtonProps extends PressableProps {
  label: string;
  variant: "primary" | "secondary" | "outlined";
}

export function Button({ label, variant, ...props }: ButtonProps) {
  return (
    <Pressable
      className={`py-2 px-6 mb-2 ${styles.button[variant]}`}
      {...props}
    >
      <Text
        className={`font-semibold text-center text-base ${styles.buttonText[variant]}`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
