import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { COLORS, SHADOWS } from '../utils/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' }}
          style={styles.bannerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>🍔 {RESTAURANT_INFO.nombre}</Text>
          <Text style={styles.subtitle}>{RESTAURANT_INFO.slogan}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bienvenido 👋</Text>
        <Text style={styles.description}>{RESTAURANT_INFO.descripcion}</Text>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.icon}>🍽️</Text>
          <Text style={styles.cardTitle}>Menú</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Reservation')}>
          <Text style={styles.icon}>📅</Text>
          <Text style={styles.cardTitle}>Reservar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.icon}>📦</Text>
          <Text style={styles.cardTitle}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Location')}>
          <Text style={styles.icon}>📍</Text>
          <Text style={styles.cardTitle}>Ubicación</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.cardTitle}>Proyecto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.promo}>
        <Text style={styles.promoTitle}>🔥 Promoción del día</Text>
        <Text style={styles.promoText}>
          Compra una hamburguesa y obtén 20% de descuento en bebidas.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Desarrollo de Aplicaciones Web en la Nube y Móviles</Text>
        <Text style={styles.footerText}>Profesor: PHD.MCC. Ramiro Luperco Coronel</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  banner: { height: 260 },
  bannerImage: { width: '100%', height: '100%' },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 25,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  title: { color: COLORS.white, fontSize: 30, fontWeight: 'bold' },
  subtitle: { color: COLORS.white, marginTop: 5, fontSize: 16 },
  section: { padding: 20 },
  sectionTitle: { fontSize: 26, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
  description: { color: COLORS.textLight, lineHeight: 24, fontSize: 15 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  card: {
    width: '48%',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 22,
    marginBottom: 15,
    alignItems: 'center',
    ...SHADOWS.small,
  },
  icon: { fontSize: 38, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  promo: { backgroundColor: COLORS.primary, margin: 15, borderRadius: 16, padding: 20 },
  promoTitle: { color: COLORS.white, fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  promoText: { color: COLORS.white, lineHeight: 22 },
  footer: { margin: 15, padding: 15, backgroundColor: COLORS.card, borderRadius: 12 },
  footerText: { textAlign: 'center', color: COLORS.textLight, marginBottom: 4 },
});