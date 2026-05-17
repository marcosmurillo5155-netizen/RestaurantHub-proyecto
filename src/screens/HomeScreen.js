import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { COLORS, SHADOWS } from '../utils/colors';

const HomeScreen = ({ navigation }) => {
  const opciones = [
    {
      titulo: 'Menú',
      icono: '🍽️',
      desc: 'Explora nuestros platillos',
      screen: 'Menu',
    },
    {
      titulo: 'Reservar',
      icono: '📅',
      desc: 'Haz tu reservación',
      screen: 'Reservation',
    },
    {
      titulo: 'Pedidos',
      icono: '🛍️',
      desc: 'Consulta tus pedidos',
      screen: 'Orders',
    },
    {
      titulo: 'Ubicación',
      icono: '📍',
      desc: 'Encuentra el restaurante',
      screen: 'Location',
    },
    {
      titulo: 'Proyecto',
      icono: '👤',
      desc: 'Información del proyecto',
      screen: 'Profile',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
          }}
          style={styles.bannerImage}
        />

        <View style={styles.overlay}>
          <Text style={styles.logo}>🍔 RestaurantHub</Text>
          <Text style={styles.subtitle}>
            Tu Hub de Comida Favorita
          </Text>
        </View>
      </View>

      {/* Bienvenida */}
      <View style={styles.section}>
        <Text style={styles.welcome}>Bienvenido 👋</Text>

        <Text style={styles.description}>
          Aplicación móvil para consultar menú,
          revisar platillos, realizar pedidos,
          reservar mesas y conocer la ubicación
          del restaurante.
        </Text>
      </View>

      {/* Cards */}
      <View style={styles.grid}>
        {opciones.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.9}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{item.icono}</Text>
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>
                {item.titulo}
              </Text>

              <Text style={styles.cardDesc}>
                {item.desc}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Promo */}
      <View style={styles.promo}>
        <View>
          <Text style={styles.promoTitle}>
            🔥 Promoción del día
          </Text>

          <Text style={styles.promoText}>
            Compra una hamburguesa y obtén
            20% de descuento en bebidas.
          </Text>
        </View>

        <TouchableOpacity style={styles.promoBtn}>
          <Text style={styles.promoBtnText}>
            Ver promo
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Desarrollo de Aplicaciones Web en la Nube y Móviles
        </Text>

        <Text style={styles.footerText}>
          Profesor: PHD.MCC. Ramiro Luperco Coronel
        </Text>
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

  content: {
    paddingBottom: 40,
  },

  banner: {
    height: 260,
    margin: 14,
    borderRadius: 28,
    overflow: 'hidden',
  },

  bannerImage: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.30)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    color: COLORS.white,
    fontSize: 38,
    fontWeight: 'bold',
  },

  subtitle: {
    color: COLORS.white,
    marginTop: 10,
    fontSize: 18,
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 8,
  },

  welcome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
  },

  description: {
    marginTop: 10,
    color: COLORS.textLight,
    lineHeight: 24,
    fontSize: 15,
  },

  grid: {
    padding: 15,
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,

    flexDirection: 'row',
    alignItems: 'center',

    ...SHADOWS.medium,
  },

  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#FFE5EC',

    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 34,
  },

  cardText: {
    flex: 1,
    marginLeft: 18,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  cardDesc: {
    marginTop: 5,
    color: COLORS.textLight,
    fontSize: 14,
  },

  arrow: {
    fontSize: 34,
    color: COLORS.primary,
  },

  promo: {
    marginHorizontal: 15,
    marginTop: 10,

    backgroundColor: COLORS.primary,

    borderRadius: 24,
    padding: 24,

    ...SHADOWS.medium,
  },

  promoTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
  },

  promoText: {
    color: COLORS.white,
    marginTop: 10,
    lineHeight: 22,
  },

  promoBtn: {
    marginTop: 18,
    backgroundColor: 'rgba(255,255,255,0.20)',
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
  },

  promoBtnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

  footer: {
    marginHorizontal: 15,
    marginTop: 20,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 20,

    ...SHADOWS.small,
  },

  footerText: {
    textAlign: 'center',
    color: COLORS.textLight,
    marginBottom: 5,
  },
});