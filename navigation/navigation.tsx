import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/details";

export type RootStackParamList = {
  home: undefined;
  details: {itemId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{title: "Beranda", headerShown: false}}
      />
      <Stack.Screen
        name="details"
        component={DetailsScreen}
        options={{title: "Details", animation: "slide_from_right"}}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
