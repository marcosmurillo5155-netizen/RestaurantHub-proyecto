import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';

const ReservationScreen = () => {
  const [nombre, setNombre] = useState('');
  const [personas, setPersonas] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const reservar = () => {
    if (!nombre || !personas || !fecha || !hora) {
      Alert.alert('Campos incompletos', 'Por favor llena todos los campos.');
      return;
    }

    Alert.alert(
      'Reservación confirmada',
      `Reservación para ${nombre}, ${personas} persona(s), el ${fecha} a las ${hora}.`
    );

    setNombre('');
    setPersonas('');
    setFecha('');
    setHora('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>📅 Reservar mesa</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Número de personas"
          value={personas}
          onChangeText={setPersonas}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Fecha ejemplo: 20/05/2026"
          value={fecha}
          onChangeText={setFecha}
        />

        <TextInput
          style={styles.input}
          placeholder="Hora ejemplo: 7:30 PM"
          value={hora}
          onChangeText={setHora}
        />

        <TouchableOpacity style={styles.button} onPress={reservar}>
          <Text style={styles.buttonText}>Confirmar reservación</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReservationScreen;

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
    marginBottom: 20,
    color: COLORS.text,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});