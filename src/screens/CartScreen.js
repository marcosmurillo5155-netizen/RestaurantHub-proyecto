import { useContext } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { CartContext } from '../context/CartContext';
import { COLORS, SHADOWS } from '../utils/colors';

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  const confirmarPedido = () => {
    if (cart.length === 0) {
      Alert.alert('Carrito vacío', 'Agrega productos antes de confirmar.');
      return;
    }

    Alert.alert('Pedido realizado', 'Tu pedido fue registrado correctamente.');
    clearCart();
    navigation.navigate('Orders');
  };

  const envio = cart.length > 0 ? 25 : 0;
  const totalFinal = total + envio;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>🛒 Mi carrito</Text>

      {cart.length === 0 ? (
        <View style={styles.card}>
          <Text style={styles.empty}>Tu carrito está vacío.</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Menu')}
          >
            <Text style={styles.buttonText}>Ir al menú</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {cart.map((item, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={{ uri: item.imagen }} style={styles.image} />

              <View style={styles.info}>
                <Text style={styles.itemName}>{item.nombre}</Text>
                <Text style={styles.itemCategory}>{item.categoria}</Text>
                <Text style={styles.itemPrice}>${item.precio}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeFromCart(index)}
              >
                <Text style={styles.deleteText}>×</Text>
              </TouchableOpacity>
            </View>
          ))}

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Menu')}
          >
            <Text style={styles.secondaryText}>+ Agregar más productos</Text>
          </TouchableOpacity>

          <View style={styles.summary}>
            <View style={styles.row}>
              <Text style={styles.summaryText}>Productos</Text>
              <Text style={styles.summaryValue}>{cart.length}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.summaryText}>Subtotal</Text>
              <Text style={styles.summaryValue}>${total}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.summaryText}>Entrega</Text>
              <Text style={styles.summaryValue}>${envio}</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.row}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalValue}>${totalFinal}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={confirmarPedido}>
            <Text style={styles.buttonText}>Pagar pedido</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={styles.clearText}>Vaciar carrito</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 15,
    paddingBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 25,
    borderRadius: 24,
    ...SHADOWS.medium,
  },
  empty: {
    fontSize: 18,
    color: COLORS.textLight,
    marginBottom: 20,
    textAlign: 'center',
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 22,
    marginBottom: 12,
    alignItems: 'center',
    ...SHADOWS.small,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 18,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  itemCategory: {
    color: COLORS.textLight,
    marginTop: 4,
  },
  itemPrice: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 4,
  },
  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFE5EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: COLORS.primary,
    fontSize: 26,
    marginTop: -3,
  },
  secondaryButton: {
    backgroundColor: '#FFE5EC',
    padding: 15,
    borderRadius: 18,
    alignItems: 'center',
    marginVertical: 10,
  },
  secondaryText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  summary: {
    backgroundColor: COLORS.card,
    padding: 18,
    borderRadius: 22,
    marginTop: 10,
    ...SHADOWS.small,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryText: {
    color: COLORS.textLight,
  },
  summaryValue: {
    fontWeight: 'bold',
    color: COLORS.text,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 8,
  },
  totalText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  totalValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearButton: {
    padding: 15,
    alignItems: 'center',
  },
  clearText: {
    color: COLORS.danger,
    fontWeight: 'bold',
  },
});