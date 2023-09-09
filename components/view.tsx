import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
  View as RNView,
  ViewProps as RNViewProps,
} from "react-native";
import styles from "../styles/theme";
import {
  KeyboardAwareScrollView as RNKeyboardAwareScrollView,
  KeyboardAwareScrollViewProps as RNKeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";

interface BaseProps {
  fullwidth?: boolean;
  padded?: boolean;
  shrink?: boolean;
}

function generateClassName<T extends BaseProps>(props: T): string {
  const cls: string[] = [];
  props.fullwidth ? cls.push("w-full") : null;
  props.padded ? cls.push(styles.view.padded) : null;
  props.shrink ? cls.push(styles.view.shrink) : null;
  return cls.join(" ").trim();
}

interface ViewProps extends RNViewProps, BaseProps {}

export function View({ children, ...props }: ViewProps) {
  const cls = generateClassName(props);
  return (
    <RNView className={cls} {...props}>
      {children}
    </RNView>
  );
}

interface ScrollViewProps extends RNScrollViewProps, BaseProps {}

export function ScrollView({ children, ...props }: ScrollViewProps) {
  const cls = generateClassName(props);
  return (
    <RNScrollView className={cls} {...props}>
      {children}
    </RNScrollView>
  );
}

interface KeyboardAwareScrollViewProps
  extends RNKeyboardAwareScrollViewProps,
    BaseProps {}

export function KeyboardAwareScrollView({
  children,
  ...props
}: KeyboardAwareScrollViewProps) {
  const cls = generateClassName(props);
  return (
    <RNKeyboardAwareScrollView className={cls} {...props}>
      {children}
    </RNKeyboardAwareScrollView>
  );
}
