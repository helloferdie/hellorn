import { Pressable, PressableProps, Text } from "react-native";
import styles from "../styles/theme";

interface ButtonVariant {
  variant: "primary" | "secondary" | "outlined";
}

interface ButtonProps extends PressableProps, ButtonVariant {
  label: string;
}

export function Button({ label, variant, ...props }: ButtonProps) {
  return (
    <Pressable
      className={`py-2 px-6 mb-2 rounded-lg ${styles.button[variant]}`}
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

export function ButtonCompact({ label, variant, ...props }: ButtonProps) {
  return (
    <Pressable
      className={`px-2 py-0 mt-2 mb-3 rounded-lg ${styles.button[variant]}`}
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

interface ButtonIconProps extends PressableProps, ButtonVariant {
  children?: React.ReactNode;
}

export function ButtonIcon({ variant, children, ...props }: ButtonIconProps) {
  return (
    <Pressable
      className={`py-2 px-2.5 mb-2 rounded-lg items-center ${styles.button[variant]}`}
      {...props}
    >
      {children}
    </Pressable>
  );
}
