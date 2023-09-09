import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/details";
import ArticleScreen, { ArticleScreenOpts } from "../screens/article/index";
import ArticleNewScreen from "../screens/article/new";
import LoginScreen from "../screens/login";
import PermissionScreen from "../screens/permission";
import { navigationRef } from "./RootNavigation";
import NotificationScreen from "../screens/notification";
import CategoryScreen from "../screens/category";

export type RootStackParamList = {
  home: undefined;
  login: undefined;
  permission: undefined;
  details: { itemId: number };
  article: undefined;
  article_new: { mode: string };
  notification: undefined;
  category: undefined;
};

// export type RootStackScreenProps<T extends keyof RootStackParamList> =
//   StackScreenProps<RootStackParamList, T>;

export type RootStackScreenProps = NativeStackScreenProps<RootStackParamList>;

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
      <Stack.Screen
        name="permission"
        component={PermissionScreen}
        options={{ title: "Permission", headerShown: true }}
      />
      <Stack.Screen
        name="notification"
        component={NotificationScreen}
        options={{ title: "Notification", animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="category"
        component={CategoryScreen}
        options={{ title: "Category", animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <NavigationStack />
    </NavigationContainer>
  );
}
