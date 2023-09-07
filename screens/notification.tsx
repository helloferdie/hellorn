import { NativeStackScreenProps } from "@react-navigation/native-stack";
import notifee from "@notifee/react-native";
import { Button } from "../components/button";
import { LayoutDefault } from "../components/layout";
import { View } from "../components/view";
import { RootStackParamList } from "../navigation/navigation";

type NotificationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "notification"
>;

export default function NotificationScreen(_: NotificationScreenProps) {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: "default",
      name: "Default Channel",
    });

    // Display a notification
    await notifee.displayNotification({
      title: "Notification Title",
      body: "Main body content of the notification",
      android: {
        channelId,
        //  smallIcon: "name-of-a-small-icon", // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: "default",
        },
      },
    });
  }

  return (
    <LayoutDefault>
      <View padded>
        <Button
          label="Show notification"
          variant="primary"
          onPress={() => {
            onDisplayNotification();
          }}
        />
      </View>
    </LayoutDefault>
  );
}
