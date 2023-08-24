import { ScrollView as RNScrollView, View as RNView } from "react-native";
import styles from "../styles/theme";

interface ViewProps {
  style?: string;
  fullwidth?: boolean;
  padded?: boolean;
  shrink?: boolean;
  children: React.ReactNode;
}

function generateClassName(props: ViewProps): string {
  const cls: string[] = [];
  props.fullwidth ? cls.push("w-full") : null;
  props.padded ? cls.push(styles.view.padded) : null;
  props.shrink ? cls.push(styles.view.shrink) : null;
  props.style ? cls.push(props.style.trim()) : null;
  return cls.join(" ").trim();
}

export function View(props: ViewProps) {
  const cls = generateClassName(props);
  return <RNView className={cls}>{props.children}</RNView>;
}

export function ScrollView(props: ViewProps) {
  const cls = generateClassName(props);
  return (
    <RNScrollView className={cls}>
      {props.children}
      <RNView className="h-2" />
    </RNScrollView>
  );
}
