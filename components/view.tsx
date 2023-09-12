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
  padX?: boolean;
  padY?: boolean;
  shrink?: boolean;
}

function generateClassName<T extends BaseProps>(props: T): string {
  const cls: string[] = [];
  props.fullwidth ? cls.push("w-full") : null;
  props.shrink ? cls.push(styles.view.shrink) : null;

  if (props.padded) {
    cls.push(styles.view.padX);
    cls.push(styles.view.padY);
  } else {
    if (props.padX) {
      cls.push(styles.view.padX);
    }
    if (props.padY) {
      cls.push(styles.view.padY);
    }
  }
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
