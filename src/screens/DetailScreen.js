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

const DetailScreen = ({ route, navigation }) => {
  const plato = route.params?.plato;
  const { addToCart } = useContext(CartContext);

  if (!plato) {
    return (
      <View style={styles.center}>
        <Text>No se encontró información del platillo.</Text>
      </View>
    );
  }

  const agregarCarrito = () => {
    addToCart(plato);

    Alert.alert(
      'Producto agregado',
      `${plato.nombre} se agregó al carrito.`,
      [
        {
          text: 'Seguir comprando',
          onPress: () => navigation.navigate('Menu'),
        },
        {
          text: 'Ver carrito',
          onPress: () => navigation.navigate('Cart'),
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Image source={{ uri: plato.imagen }} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.category}>{plato.categoria}</Text>
        <Text style={styles.title}>{plato.nombre}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.meta}>⭐ {plato.rating}</Text>
          <Text style={styles.meta}>⏱️ {plato.preparacion}</Text>
        </View>

        <Text style={styles.description}>{plato.descripcion}</Text>

        <Text style={styles.subtitle}>Ingredientes principales</Text>

        <View style={styles.ingredients}>
          <Text style={styles.ingredient}>🥩 Proteína</Text>
          <Text style={styles.ingredient}>🧀 Queso</Text>
          <Text style={styles.ingredient}>🥬 Vegetales</Text>
          <Text style={styles.ingredient}>🍅 Salsa especial</Text>
        </View>

        <Text style={styles.price}>${plato.precio}</Text>

        <TouchableOpacity style={styles.button} onPress={agregarCarrito}>
          <Text style={styles.buttonText}>🛒 Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingBottom: 60,
  },
  image: {
    width: '100%',
    height: 310,
  },
  card: {
    backgroundColor: COLORS.card,
    margin: 15,
    marginTop: -25,
    padding: 22,
    borderRadius: 26,
    ...SHADOWS.medium,
  },
  category: {
    color: COLORS.primary,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 12,
  },
  meta: {
    color: COLORS.textLight,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: COLORS.textLight,
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 20,
    marginBottom: 10,
  },
  ingredients: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  ingredient: {
    backgroundColor: '#FFE5EC',
    color: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    borderRadius: 18,
    alignItems: 'center',
    ...SHADOWS.small,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});