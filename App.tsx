import { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import Navigation from "./navigation/navigation";
import { navigate } from "./navigation/RootNavigation";
import { Alert } from "react-native";
import { RealmProvider } from "./models/config";

export default function App() {
  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
      if (remoteMessage.data && remoteMessage.data.navigate) {
        navigate(remoteMessage.data.navigate);
        Alert.alert("Notification open", JSON.stringify(remoteMessage));
      }
      // navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );

          if (remoteMessage.data && remoteMessage.data.navigate) {
            navigate(remoteMessage.data.navigate);
            Alert.alert(
              "Notification open from quit state",
              JSON.stringify(remoteMessage)
            );
          } else {
          }

          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }

        //console.log(remoteMessage);
        // setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Foreground notification
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(
        "A new FCM message arrived! " + JSON.stringify(remoteMessage)
      );

      if (remoteMessage.data && remoteMessage.data.navigate) {
        navigate(remoteMessage.data.navigate);
      } else {
        Alert.alert(
          "A new FCM message arrived!",
          JSON.stringify(remoteMessage)
        );
      }
    });

    return unsubscribe;
  }, []);

  return (
    <RealmProvider>
      <Navigation />
    </RealmProvider>
  );
}
