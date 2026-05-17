import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';

const DetailScreen = ({ route, navigation }) => {
  const plato = route.params?.plato;

  if (!plato) {
    return (
      <View style={styles.center}>
        <Text>No se encontró información del platillo.</Text>
      </View>
    );
  }

  const agregarCarrito = () => {
    Alert.alert('Carrito', `${plato.nombre} agregado al carrito.`);
    navigation.navigate('Cart', { plato });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: plato.imagen }} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.category}>{plato.categoria}</Text>
        <Text style={styles.title}>{plato.nombre}</Text>
        <Text style={styles.rating}>⭐ {plato.rating} | ⏱️ {plato.preparacion}</Text>
        <Text style={styles.description}>{plato.descripcion}</Text>
        <Text style={styles.price}>${plato.precio}</Text>

        <TouchableOpacity style={styles.button} onPress={agregarCarrito}>
          <Text style={styles.buttonText}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  image: { width: '100%', height: 300 },
  card: {
    backgroundColor: COLORS.card,
    margin: 15,
    padding: 20,
    borderRadius: 16,
    ...SHADOWS.small,
  },
  category: { color: COLORS.primary, fontWeight: 'bold', marginBottom: 5 },
  title: { fontSize: 30, fontWeight: 'bold', color: COLORS.text },
  rating: { marginVertical: 10, color: COLORS.textLight },
  description: { fontSize: 16, color: COLORS.textLight, lineHeight: 24 },
  price: { fontSize: 30, fontWeight: 'bold', color: COLORS.primary, marginVertical: 15 },
  button: { backgroundColor: COLORS.primary, padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});