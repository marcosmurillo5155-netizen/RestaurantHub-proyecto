import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { COLORS, SHADOWS } from '../utils/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>🍔</Text>
        <Text style={styles.title}>{RESTAURANT_INFO.nombre}</Text>
        <Text style={styles.subtitle}>{RESTAURANT_INFO.slogan}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Descripción</Text>
        <Text style={styles.text}>{RESTAURANT_INFO.descripcion}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información</Text>
        <Text style={styles.text}>⭐ {RESTAURANT_INFO.calificacion} ({RESTAURANT_INFO.resenas} reseñas)</Text>
        <Text style={styles.text}>📍 {RESTAURANT_INFO.direccion}</Text>
        <Text style={styles.text}>📞 {RESTAURANT_INFO.telefono}</Text>
        <Text style={styles.text}>📧 {RESTAURANT_INFO.email}</Text>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.buttonText}>🍽️ Menú</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Reservation')}>
          <Text style={styles.buttonText}>📅 Reservar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.buttonText}>📦 Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Location')}>
          <Text style={styles.buttonText}>📍 Ubicación</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>👤 Proyecto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Materia: Desarrollo de Aplicaciones Web en la Nube y Móviles
        </Text>
        <Text style={styles.footerText}>Profesor: PHD.MCC. Ramiro Luperco Coronel</Text>
        <Text style={styles.footerText}>Equipo: RestaurantHub</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    padding: 35,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  emoji: {
    fontSize: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  subtitle: {
    color: COLORS.white,
    marginTop: 5,
  },
  card: {
    backgroundColor: COLORS.card,
    margin: 15,
    padding: 15,
    borderRadius: 12,
    ...SHADOWS.small,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.text,
  },
  text: {
    fontSize: 15,
    color: COLORS.textLight,
    marginBottom: 6,
  },
  grid: {
    padding: 15,
    gap: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    ...SHADOWS.small,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: COLORS.card,
    margin: 15,
    padding: 15,
    borderRadius: 12,
  },
  footerText: {
    textAlign: 'center',
    color: COLORS.textLight,
    marginBottom: 4,
  },
});