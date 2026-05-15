import { FlatList, StyleSheet, Text, View } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';

const PEDIDOS = [
  {
    id: 1,
    platillo: 'Hamburguesa Clásica',
    estado: 'Entregado',
    total: 120,
  },
  {
    id: 2,
    platillo: 'Pizza Pepperoni',
    estado: 'En preparación',
    total: 180,
  },
  {
    id: 3,
    platillo: 'Brownie con Helado',
    estado: 'Pendiente',
    total: 80,
  },
];

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Historial de pedidos</Text>

      <FlatList
        data={PEDIDOS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.platillo}</Text>
            <Text style={styles.text}>Estado: {item.estado}</Text>
            <Text style={styles.price}>Total: ${item.total}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: COLORS.text,
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    ...SHADOWS.small,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  text: {
    color: COLORS.textLight,
    marginTop: 6,
  },
  price: {
    color: COLORS.primary,
    fontWeight: 'bold',
    marginTop: 6,
  },
});