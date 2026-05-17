import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';

const ProfileScreen = ({ navigation }) => {
  const cerrarSesion = () => {
    Alert.alert('Cerrar sesión', '¿Deseas salir de tu cuenta?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Salir',
        style: 'destructive',
        onPress: () => navigation.replace('Login'),
      },
    ]);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.avatar}>👤</Text>
        <Text style={styles.title}>Usuario Demo</Text>
        <Text style={styles.email}>usuario@restauranthub.com</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Información del proyecto</Text>

        <Text style={styles.label}>Nombre del proyecto:</Text>
        <Text style={styles.text}>RestaurantHub</Text>

        <Text style={styles.label}>Materia:</Text>
        <Text style={styles.text}>
          Desarrollo de Aplicaciones Web en la Nube y Móviles
        </Text>

        <Text style={styles.label}>Profesor:</Text>
        <Text style={styles.text}>PHD.MCC. Ramiro Luperco Coronel</Text>

        <Text style={styles.label}>Funcionalidades:</Text>
        <Text style={styles.text}>
          Login, menú, detalle, carrito, pedidos, reservaciones, ubicación y perfil.
        </Text>

        <Text style={styles.label}>Uso de IA:</Text>
        <Text style={styles.text}>
          Se utilizó inteligencia artificial como apoyo para crear pantallas,
          corregir errores, organizar navegación, mejorar diseño y documentar el proyecto.
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={cerrarSesion}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

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
    marginBottom: 15,
    ...SHADOWS.small,
  },
  avatar: {
    fontSize: 55,
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.text,
  },
  email: {
    textAlign: 'center',
    color: COLORS.textLight,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: COLORS.text,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    color: COLORS.text,
  },
  text: {
    color: COLORS.textLight,
    marginTop: 4,
    lineHeight: 21,
  },
  logoutButton: {
    backgroundColor: COLORS.danger,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});