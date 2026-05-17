import { Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CartProvider } from './src/context/CartContext';

import CartScreen from './src/screens/CartScreen';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import LoginScreen from './src/screens/LoginScreen';
import MenuScreen from './src/screens/MenuScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ReservationScreen from './src/screens/ReservationScreen';

const Stack = createStackNavigator();

function HeaderButtons({ navigation }) {
  return (
    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{ marginRight: 16 }}
      >
        <Text style={{ fontSize: 22 }}>🛒</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={{ fontSize: 22 }}>👤</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: '#FF5C8A' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerRight: () => <HeaderButtons navigation={navigation} />,
          })}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'RestaurantHub' }}
          />

          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{ title: 'Menú' }}
          />

          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: 'Detalle' }}
          />

          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: 'Carrito' }}
          />

          <Stack.Screen
            name="Orders"
            component={OrdersScreen}
            options={{ title: 'Pedidos' }}
          />

          <Stack.Screen
            name="Reservation"
            component={ReservationScreen}
            options={{ title: 'Reservación' }}
          />

          <Stack.Screen
            name="Location"
            component={LocationScreen}
            options={{ title: 'Ubicación' }}
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'Perfil' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}