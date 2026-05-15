import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';

const CartScreen = ({ route, navigation }) => {
  const plato = route.params?.plato;

  const confirmarPedido = () => {
    Alert.alert('Pedido realizado', 'Tu pedido fue registrado correctamente.');
    navigation.navigate('Orders');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🛒 Carrito</Text>

        {plato ? (
          <>
            <Text style={styles.item}>{plato.nombre}</Text>
            <Text style={styles.price}>Total: ${plato.precio}</Text>

            <TouchableOpacity style={styles.button} onPress={confirmarPedido}>
              <Text style={styles.buttonText}>Confirmar pedido</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.empty}>Tu carrito está vacío.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
              <Text style={styles.buttonText}>Ir al menú</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 25,
    borderRadius: 12,
    ...SHADOWS.small,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.text,
  },
  item: {
    fontSize: 20,
    color: COLORS.text,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: 15,
  },
  empty: {
    fontSize: 18,
    color: COLORS.textLight,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});