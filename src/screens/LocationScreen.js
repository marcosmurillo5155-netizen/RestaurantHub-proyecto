import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { COLORS, SHADOWS } from '../utils/colors';

const LocationScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.title}>📍 Ubicación y contacto</Text>

        <Text style={styles.label}>Dirección:</Text>
        <Text style={styles.text}>{RESTAURANT_INFO.direccion}</Text>

        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.text}>{RESTAURANT_INFO.telefono}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{RESTAURANT_INFO.email}</Text>

        <Text style={styles.label}>Horarios:</Text>
        <Text style={styles.text}>Lunes a Viernes: {RESTAURANT_INFO.horario.lunes_viernes}</Text>
        <Text style={styles.text}>Sábado: {RESTAURANT_INFO.horario.sabado}</Text>
        <Text style={styles.text}>Domingo: {RESTAURANT_INFO.horario.domingo}</Text>
      </View>

      <View style={styles.mapFake}>
        <Text style={styles.mapText}>🗺️ Mapa simulado</Text>
        <Text style={styles.mapSub}>Guadalajara, Jalisco</Text>
      </View>
    </ScrollView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 15,
    paddingBottom: 60,
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 20,
    borderRadius: 16,
    ...SHADOWS.small,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: COLORS.text,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    color: COLORS.text,
  },
  text: {
    color: COLORS.textLight,
    marginTop: 3,
  },
  mapFake: {
    backgroundColor: '#DDEEFF',
    height: 190,
    borderRadius: 16,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  mapSub: {
    color: COLORS.textLight,
    marginTop: 6,
  },
});