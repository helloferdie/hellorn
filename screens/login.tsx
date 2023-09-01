import { Button, Text } from "react-native";
import { LayoutDefault } from "../components/layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";
import { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { TextInputDefault } from "../components/input";
import { View } from "../components/view";

GoogleSignin.configure({
  webClientId:
    "967502148970-1vsh3op9rokmm3fobt7cgalt531r4fkp.apps.googleusercontent.com",
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "login">;

export default function LoginScreen(props: LoginScreenProps) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // If null, no SMS has been sent
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  // verification code (OTP - One-Time-Passcode)
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  // Handle the button press
  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(phone);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    if (confirm) {
      try {
        await confirm.confirm(code);
      } catch (error) {
        console.log("Invalid code.");
      }
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <LayoutDefault>
        <View padded>
          <Text>Login</Text>

          {confirm ? (
            <>
              <TextInputDefault
                label="OTP Code"
                keyboardType="phone-pad"
                value={code}
                onChangeText={setCode}
              />
              <Button title="Submit OTP" onPress={confirmCode} />
            </>
          ) : (
            <>
              <TextInputDefault
                label="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />

              <Button
                title="Login with phone"
                onPress={signInWithPhoneNumber}
              />
            </>
          )}

          <Button
            title="Google Sign-In"
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log("Signed in with Google!")
              )
            }
          />
        </View>
      </LayoutDefault>
    );
  }

  return (
    <LayoutDefault>
      <Text>Welcome {user.email ? user.email : user.phoneNumber}</Text>

      <Button
        title="Logout"
        onPress={() => {
          auth()
            .signOut()
            .then(() => props.navigation.navigate("home"));
        }}
      />
    </LayoutDefault>
  );
}
