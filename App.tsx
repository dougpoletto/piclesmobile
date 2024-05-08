import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminScreen from './src/pages/admin/AdminScreen';
import HomeScreen from './src/pages/home/HomeScreen';
import PetScreen from './src/pages/pets/PetScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Pet" component={PetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}