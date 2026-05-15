import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>👤 Información del proyecto</Text>

        <Text style={styles.label}>Nombre del proyecto:</Text>
        <Text style={styles.text}>RestaurantHub</Text>

        <Text style={styles.label}>Materia:</Text>
        <Text style={styles.text}>Desarrollo de Aplicaciones Web en la Nube y Móviles</Text>

        <Text style={styles.label}>Profesor:</Text>
        <Text style={styles.text}>PHD.MCC. Ramiro Luperco Coronel</Text>

        <Text style={styles.label}>Integrantes:</Text>
        <Text style={styles.text}>Integrante 1 - Líder técnico</Text>
        <Text style={styles.text}>Integrante 2 - Frontend</Text>
        <Text style={styles.text}>Integrante 3 - Funcionalidad</Text>
        <Text style={styles.text}>Integrante 4 - Documentación</Text>

        <Text style={styles.label}>Uso de IA:</Text>
        <Text style={styles.text}>
          Se utilizó inteligencia artificial como apoyo para crear pantallas,
          corregir errores, organizar la navegación, mejorar el diseño y documentar
          el proyecto.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 15,
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 20,
    borderRadius: 12,
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
    marginTop: 12,
    color: COLORS.text,
  },
  text: {
    color: COLORS.textLight,
    marginTop: 4,
    lineHeight: 21,
  },
});