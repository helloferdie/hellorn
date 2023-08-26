import { useRef } from "react";
import {
  Animated,
  Modal,
  Platform,
  Pressable,
  PressableProps,
  SafeAreaView,
  Text,
} from "react-native";
import { View } from "./view";
import XMarkIcon from "react-native-heroicons/outline/XMarkIcon";

export function ModalDrawer(props: {
  visible: boolean;
  title?: string;
  maxOpacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  overlayColor?: string;
  showTitle?: boolean;
  showClose?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}) {
  const { visible, title, showClose, overlayColor, children, onClose } = props;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: props.maxOpacity ? props.maxOpacity : 0.5,
      duration: Platform.OS === "ios" ? 150 : 250,
      delay: Platform.OS === "ios" ? 0 : 250,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  return (
    <Modal transparent visible={visible} animationType="slide" onShow={fadeIn}>
      <SafeAreaView className="flex-1 transparent">
        <Animated.View
          className={`flex flex-1 ${
            overlayColor ? overlayColor : "bg-gray-700"
          }`}
          style={{
            opacity: fadeAnim,
          }}
        >
          <Pressable className="flex-1" onPress={fadeOut} />
        </Animated.View>
        <View className="absolute bottom-0 left-0 right-0 pb-10 rounded-t-xl bg-white border border-gray-300">
          {title || showClose ? (
            <View padded className="pb-6 flex-row justify-end">
              {title && (
                <Text className="text-lg font-extrabold flex-1">
                  {title !== "" ? title : "Title"}
                </Text>
              )}

              {showClose && (
                <Pressable onPress={fadeOut}>
                  <XMarkIcon color={"black"} />
                </Pressable>
              )}
            </View>
          ) : (
            <View className="py-3" />
          )}

          {children}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export function ModelDrawerItem({ children, ...props }: PressableProps) {
  return (
    <Pressable className="px-4" {...props}>
      {children}
    </Pressable>
  );
}
