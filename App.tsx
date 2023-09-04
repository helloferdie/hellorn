import { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import Navigation from "./navigation/navigation";
import { navigate } from "./navigation/RootNavigation";
import { Alert } from "react-native";

export default function App() {
  // useEffect(() => {
  //   // Assume a message-notification contains a "type" property in the data payload of the screen to open
  //   messaging().onNotificationOpenedApp((remoteMessage) => {
  //     console.log(
  //       "Notification caused app to open from background state:",
  //       remoteMessage.notification
  //     );
  //     console.log(remoteMessage);
  //     // navigation.navigate(remoteMessage.data.type);
  //   });

  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then((remoteMessage) => {
  //       if (remoteMessage) {
  //         console.log(
  //           "Notification caused app to open from quit state:",
  //           remoteMessage.notification
  //         );
  //         // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
  //       }

  //       console.log(remoteMessage);
  //       // setLoading(false);
  //     });
  // }, []);

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

  return <Navigation />;
}
