import React from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Tenho um abrigo"
        onPress={() => { navigation.navigate("Admin") }} />
      <Button title="Quero adotar"
        onPress={() => { navigation.navigate("Pet") }} />
    </View>
  )
}