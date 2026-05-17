import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from './src/screens/CartScreen';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import MenuScreen from './src/screens/MenuScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ReservationScreen from './src/screens/ReservationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#E94B64' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'RestaurantHub' }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menú' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalle' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrito' }} />
        <Stack.Screen name="Orders" component={OrdersScreen} options={{ title: 'Pedidos' }} />
        <Stack.Screen name="Reservation" component={ReservationScreen} options={{ title: 'Reservación' }} />
        <Stack.Screen name="Location" component={LocationScreen} options={{ title: 'Ubicación' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Proyecto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}