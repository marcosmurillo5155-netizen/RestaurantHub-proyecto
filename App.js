import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { CartProvider } from './src/context/CartContext';
import { COLORS } from './src/utils/colors';

// Importar pantallas
import { HomeScreen } from './src/screens/HomeScreen';
import { MenuScreen } from './src/screens/MenuScreen';
import { DetailScreen } from './src/screens/DetailScreen';
import { CartScreen } from './src/screens/CartScreen';
import { OrdersScreen } from './src/screens/OrdersScreen';
import { ReservationScreen } from './src/screens/ReservationScreen';
import { LocationScreen } from './src/screens/LocationScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navigator de Menú (Stack: Menú → Detalle)
const MenuNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: COLORS.white,
      headerTitleStyle: { fontWeight: 'bold' },
      headerBackTitle: 'Atrás',
    }}
  >
    <Stack.Screen 
      name="MenuList" 
      component={MenuScreen} 
      options={{ title: '🍽️ Menú', headerShown: false }} 
    />
    <Stack.Screen 
      name="Detalle" 
      component={DetailScreen} 
      options={{ title: 'Detalle del Plato' }} 
    />
  </Stack.Navigator>
);

// Navigator de Carrito
const CartNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="CartList" component={CartScreen} />
  </Stack.Navigator>
);

// Navigator de Pedidos
const OrdersNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="OrdersList" component={OrdersScreen} />
  </Stack.Navigator>
);

// Navigator de Reservas
const ReservationNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="ReservationList" component={ReservationScreen} />
  </Stack.Navigator>
);

// Navigator de Ubicación
const LocationNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="LocationList" component={LocationScreen} />
  </Stack.Navigator>
);

// Navigator de Perfil
const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="ProfileList" component={ProfileScreen} />
  </Stack.Navigator>
);

// Navigator de Home
const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="HomeList" component={HomeScreen} />
  </Stack.Navigator>
);

// Navegación principal con Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLighter,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: COLORS.border,
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
        headerShown: false,
        tabBarLabel: ({ focused }) => {
          // Renderizar el emoji y nombre de la pestaña
          const labels = {
            Home: { emoji: '🏠', label: 'Inicio' },
            Menu: { emoji: '🍽️', label: 'Menú' },
            Carrito: { emoji: '🛒', label: 'Carrito' },
            Pedidos: { emoji: '📦', label: 'Pedidos' },
            Reservas: { emoji: '📅', label: 'Reservas' },
            Ubicacion: { emoji: '📍', label: 'Ubicación' },
            Perfil: { emoji: '👤', label: 'Perfil' },
          };
          const { emoji, label } = labels[route.name] || { emoji: '?', label: 'Tab' };
          return (
            <Text style={{ fontSize: 10, fontWeight: '700', color: focused ? COLORS.primary : COLORS.textLighter, marginTop: 4 }}>
              {emoji}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeNavigator}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen 
        name="Menu" 
        component={MenuNavigator}
        options={{ title: 'Menú' }}
      />
      <Tab.Screen 
        name="Carrito" 
        component={CartNavigator}
        options={{ title: 'Carrito' }}
      />
      <Tab.Screen 
        name="Pedidos" 
        component={OrdersNavigator}
        options={{ title: 'Pedidos' }}
      />
      <Tab.Screen 
        name="Reservas" 
        component={ReservationNavigator}
        options={{ title: 'Reservas' }}
      />
      <Tab.Screen 
        name="Ubicacion" 
        component={LocationNavigator}
        options={{ title: 'Ubicación' }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileNavigator}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
};

// Componente principal
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}
