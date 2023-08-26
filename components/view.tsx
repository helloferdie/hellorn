import {
  ScrollView as RNScrollView,
  View as RNView,
  ViewProps as RNViewProps,
} from "react-native";
import styles from "../styles/theme";

interface ViewProps extends RNViewProps {
  fullwidth?: boolean;
  padded?: boolean;
  shrink?: boolean;
}

function generateClassName(props: ViewProps): string {
  const cls: string[] = [];
  props.fullwidth ? cls.push("w-full") : null;
  props.padded ? cls.push(styles.view.padded) : null;
  props.shrink ? cls.push(styles.view.shrink) : null;
  return cls.join(" ").trim();
}

export function View({ children, className, ...props }: ViewProps) {
  const cls = generateClassName(props);
  return (
    <RNView className={cls} {...props}>
      {children}
    </RNView>
  );
}

export function ScrollView({ children, ...props }: ViewProps) {
  const cls = generateClassName(props);
  return (
    <RNScrollView className={cls} {...props}>
      {children}
      <RNView className="h-2" />
    </RNScrollView>
  );
}
