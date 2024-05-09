import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShelterScreen from './src/pages/admin/ShelterScreen';
import HomeScreen from './src/pages/home/HomeScreen';
import PetsScreen from './src/pages/pets/PetsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shelter" component={ShelterScreen} />
        <Stack.Screen name="Pets" component={PetsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}