import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';

export const ReservationScreen = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [personas, setPersonas] = useState('2');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleReservar = () => {
    if (!nombre || !telefono || !fecha || !hora) {
      Alert.alert('⚠️ Campos incompletos', 'Por favor completa todos los campos');
      return;
    }

    Alert.alert(
      '✅ Reservación Confirmada',
      `Nombre: ${nombre}\nPersonas: ${personas}\nFecha: ${fecha}\nHora: ${hora}\n\nTe enviaremos un SMS de confirmación`,
      [{ text: 'OK', onPress: () => {
        setNombre('');
        setTelefono('');
        setFecha('');
        setHora('');
      }}]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📅 Reservar Mesa</Text>
      </View>

      <View style={styles.content}>
        {/* Nombre */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Tu nombre completo"
            placeholderTextColor={COLORS.textLighter}
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        {/* Teléfono */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            style={styles.input}
            placeholder="Tu número de teléfono"
            placeholderTextColor={COLORS.textLighter}
            keyboardType="phone-pad"
            value={telefono}
            onChangeText={setTelefono}
          />
        </View>

        {/* Número de personas */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Número de Personas</Text>
          <View style={styles.personasControl}>
            {['2', '4', '6', '8'].map((num) => (
              <TouchableOpacity
                key={num}
                style={[
                  styles.personasBtn,
                  personas === num && styles.personasBtnActive
                ]}
                onPress={() => setPersonas(num)}
              >
                <Text style={[
                  styles.personasTxt,
                  personas === num && styles.personasTxtActive
                ]}>
                  {num}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Fecha */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Fecha</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            placeholderTextColor={COLORS.textLighter}
            value={fecha}
            onChangeText={setFecha}
          />
        </View>

        {/* Hora */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Hora</Text>
          <TextInput
            style={styles.input}
            placeholder="HH:MM (Ej: 19:30)"
            placeholderTextColor={COLORS.textLighter}
            value={hora}
            onChangeText={setHora}
          />
        </View>

        {/* Info horarios */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>⏰ Horarios de atención</Text>
          <Text style={styles.infoText}>Lunes-Viernes: 11:00 - 23:00</Text>
          <Text style={styles.infoText}>Sábado: 11:00 - 00:00</Text>
          <Text style={styles.infoText}>Domingo: 12:00 - 22:00</Text>
        </View>

        {/* Botón reservar */}
        <TouchableOpacity 
          style={styles.btnReservar}
          onPress={handleReservar}
        >
          <Text style={styles.btnReservarTxt}>🎫 Confirmar Reservación</Text>
        </TouchableOpacity>

        {/* Info adicional */}
        <View style={styles.noteBox}>
          <Text style={styles.noteTitle}>📌 Información importante</Text>
          <Text style={styles.noteText}>
            • La reservación es válida por 15 minutos después de la hora
          </Text>
          <Text style={styles.noteText}>
            • Te contactaremos para confirmar
          </Text>
          <Text style={styles.noteText}>
            • Mínimo 2 personas por reservación
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  content: {
    padding: 15,
    paddingBottom: 30,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 14,
    color: COLORS.text,
    ...SHADOWS.small,
  },
  personasControl: {
    flexDirection: 'row',
    gap: 10,
  },
  personasBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    alignItems: 'center',
    ...SHADOWS.small,
  },
  personasBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  personasTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  personasTxtActive: {
    color: COLORS.white,
  },
  infoBox: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    ...SHADOWS.small,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 6,
  },
  btnReservar: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    ...SHADOWS.small,
  },
  btnReservarTxt: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  noteBox: {
    backgroundColor: '#FFF3E0',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.warning,
  },
  noteTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },
  noteText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 4,
  },
});
