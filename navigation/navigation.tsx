import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/details";
import ArticleScreen, { ArticleScreenOpts } from "../screens/article/index";
import ArticleNewScreen from "../screens/article/new";
import LoginScreen from "../screens/login";

export type RootStackParamList = {
  home: undefined;
  login: undefined;
  details: { itemId: number };
  article: undefined;
  article_new: { mode: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Beranda", headerShown: false }}
      />
      <Stack.Screen
        name="details"
        component={DetailsScreen}
        options={{ title: "Details", animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="article"
        component={ArticleScreen}
        options={ArticleScreenOpts}
      />
      <Stack.Screen
        name="article_new"
        component={ArticleNewScreen}
        options={{
          title: "New Article",
          animation: "slide_from_right",
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: "Login", headerShown: false }}
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
