import {
  CommonActions,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { RootStackParamList } from "./navigation";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (name: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
};
