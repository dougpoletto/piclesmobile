import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ShelterScreen from './src/pages/admin/ShelterScreen';
import HomeScreen from './src/pages/home/HomeScreen';
import PetsScreen from './src/pages/pets/PetsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen options={{drawerLabel: "Início"}} name="Home">
          {(props) => <HomeScreen {...props}/>}
        </Drawer.Screen>
        <Drawer.Screen name="Shelter" component={ShelterScreen} />
        <Drawer.Screen name="Pets" component={PetsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}