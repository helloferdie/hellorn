import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";
import { LayoutDefault } from "../components/layout";
import { Text } from "react-native";
import {
  PermissionStatus,
  checkNotifications,
  openSettings,
  requestNotifications,
} from "react-native-permissions";
import { useState } from "react";
import messaging from "@react-native-firebase/messaging";
import { Button } from "../components/button";
import { View } from "../components/view";

type PermissionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "permission"
>;

export default function PermissionScreen(_: PermissionScreenProps) {
  const [notificationStatus, setNotificationStatus] =
    useState<PermissionStatus | null>(null);
  const [deviceToken, setDeviceToken] = useState("");

  return (
    <LayoutDefault>
      <View padded>
        <Text>Request permission: {notificationStatus}</Text>
        <Text>Device Token: {deviceToken}</Text>
        <Button
          label="Check notification"
          variant="primary"
          onPress={() => {
            checkNotifications().then(({ status, settings }) => {
              setNotificationStatus(status);
              console.log(settings);
            });
          }}
        />
        <Button
          label="Request notification"
          variant="primary"
          onPress={() => {
            if (notificationStatus === "blocked") {
              openSettings();
            } else if (notificationStatus === "denied") {
              requestNotifications([
                "alert",
                "badge",
                "sound",
                "criticalAlert",
              ]).then(({ status, settings }) => {
                setNotificationStatus(status);
                console.log(settings);
              });
            }
          }}
        />
        <Button
          label="Request device token"
          variant="primary"
          onPress={async () => {
            const token = await messaging().getToken();
            console.log(token);
            setDeviceToken(token);
          }}
        />
      </View>
    </LayoutDefault>
  );
}
