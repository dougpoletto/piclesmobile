import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeScreenList = {
  Home: any
  Shelter: any;
  Pets: any;
}

export type HomeScreenProps = NativeStackScreenProps<HomeScreenList, "Home" | "Shelter" | "Pets">;