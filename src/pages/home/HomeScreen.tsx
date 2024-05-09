import React from "react";
import { Button, Text, View } from "react-native";
import { HomeScreenProps } from "../../types/screens/home/HomeScreenList";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Tenho um abrigo"
        onPress={() => { navigation.navigate("Shelter") }} />
      <Button title="Quero adotar"
        onPress={() => { navigation.navigate("Pets") }} />
    </View>
  )
}