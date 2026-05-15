import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.emoji}>🍔</Text>
        <Text style={styles.title}>RestaurantHub</Text>
        <Text style={styles.subtitle}>Tu Hub de Comida Favorita</Text>
      </View>

      {/* Info del Restaurante */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Información del Restaurante</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>⭐ Calificación:</Text>
          <Text style={styles.value}>{RESTAURANT_INFO.calificacion} ({RESTAURANT_INFO.resenas} reseñas)</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>📍 Ubicación:</Text>
          <Text style={styles.value}>{RESTAURANT_INFO.direccion}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>📞 Teléfono:</Text>
          <Text style={styles.value}>{RESTAURANT_INFO.telefono}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>📧 Email:</Text>
          <Text style={styles.value}>{RESTAURANT_INFO.email}</Text>
        </View>
      </View>

      {/* Horarios */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>⏰ Horarios de Atención</Text>
        
        <View style={styles.horarioRow}>
          <Text style={styles.horarioLabel}>Lunes - Viernes:</Text>
          <Text style={styles.horarioTime}>{RESTAURANT_INFO.horario.lunes_viernes}</Text>
        </View>

        <View style={styles.horarioRow}>
          <Text style={styles.horarioLabel}>Sábado:</Text>
          <Text style={styles.horarioTime}>{RESTAURANT_INFO.horario.sabado}</Text>
        </View>

        <View style={styles.horarioRow}>
          <Text style={styles.horarioLabel}>Domingo:</Text>
          <Text style={styles.horarioTime}>{RESTAURANT_INFO.horario.domingo}</Text>
        </View>
      </View>

      {/* Descripción */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sobre Nosotros</Text>
        <Text style={styles.description}>
          {RESTAURANT_INFO.descripcion}
        </Text>
      </View>

      {/* Botones rápidos */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.buttonIcon}>🍽️</Text>
          <Text style={styles.buttonText}>Ver Menú</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => navigation.navigate('Reservas')}
        >
          <Text style={styles.buttonIcon}>📅</Text>
          <Text style={styles.buttonText}>Reservar Mesa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate('Ubicacion')}
        >
          <Text style={styles.buttonIcon}>📍</Text>
          <Text style={styles.buttonText}>Nuestra Ubicación</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate('Pedidos')}
        >
          <Text style={styles.buttonIcon}>📦</Text>
          <Text style={styles.buttonText}>Mis Pedidos</Text>
        </TouchableOpacity>
      </View>

      {/* Footer spacing */}
      <View style={{ height: 30 }} />
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
    padding: 30,
    paddingTop: 50,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.white,
    marginTop: 5,
    opacity: 0.9,
  },
  infoCard: {
    backgroundColor: COLORS.card,
    margin: 15,
    padding: 15,
    borderRadius: 12,
    ...SHADOWS.small,
  },
  card: {
    backgroundColor: COLORS.card,
    margin: 15,
    padding: 15,
    borderRadius: 12,
    ...SHADOWS.small,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  infoRow: {
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textLight,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '500',
  },
  horarioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  horarioLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  horarioTime: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 10,
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.small,
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
  },
  buttonSecondary: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  buttonIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '700',
  },
});

// Exportar estilos secundarios
export const styles_secondary = StyleSheet.create({
  buttonSecondaryText: {
    color: COLORS.primary,
  }
});
