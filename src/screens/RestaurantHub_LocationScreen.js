import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationScreen = () => {
  const handleAbrirMaps = () => {
    const url = `https://www.google.com/maps/search/${RESTAURANT_INFO.ubicacion.latitud},${RESTAURANT_INFO.ubicacion.longitud}`;
    Linking.openURL(url).catch(() => {
      alert('No se pudo abrir Google Maps');
    });
  };

  const handleLlamar = () => {
    Linking.openURL(`tel:${RESTAURANT_INFO.telefono}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${RESTAURANT_INFO.email}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📍 Ubicación</Text>
      </View>

      <View style={styles.content}>
        {/* Mapa simulado */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>🗺️</Text>
          <Text style={styles.mapSubtext}>Google Maps</Text>
        </View>

        {/* Dirección */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📍 Dirección</Text>
          <Text style={styles.direccion}>{RESTAURANT_INFO.direccion}</Text>
          
          <TouchableOpacity 
            style={styles.btnAbrir}
            onPress={handleAbrirMaps}
          >
            <Text style={styles.btnAbrirTxt}>🗺️ Abrir en Google Maps</Text>
          </TouchableOpacity>
        </View>

        {/* Contacto */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📞 Contacto</Text>
          
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={handleLlamar}
          >
            <Text style={styles.contactIcon}>☎️</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Teléfono</Text>
              <Text style={styles.contactValue}>{RESTAURANT_INFO.telefono}</Text>
            </View>
            <Text style={styles.contactArrow}>→</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={handleEmail}
          >
            <Text style={styles.contactIcon}>✉️</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>{RESTAURANT_INFO.email}</Text>
            </View>
            <Text style={styles.contactArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Horarios */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>⏰ Horarios</Text>
          
          <View style={styles.horarioItem}>
            <Text style={styles.horarioLabel}>Lunes - Viernes</Text>
            <Text style={styles.horarioValue}>{RESTAURANT_INFO.horario.lunes_viernes}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.horarioItem}>
            <Text style={styles.horarioLabel}>Sábado</Text>
            <Text style={styles.horarioValue}>{RESTAURANT_INFO.horario.sabado}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.horarioItem}>
            <Text style={styles.horarioLabel}>Domingo</Text>
            <Text style={styles.horarioValue}>{RESTAURANT_INFO.horario.domingo}</Text>
          </View>
        </View>

        {/* Información adicional */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>ℹ️ Información</Text>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>⭐</Text>
            <Text style={styles.infoText}>Calificación: {RESTAURANT_INFO.calificacion} ({RESTAURANT_INFO.resenas} reseñas)</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>🍽️</Text>
            <Text style={styles.infoText}>Restaurante de comida variada</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>🚗</Text>
            <Text style={styles.infoText}>Estacionamiento disponible</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoIcon}>💳</Text>
            <Text style={styles.infoText}>Aceptamos efectivo y tarjeta</Text>
          </View>
        </View>

        {/* Coordenadas */}
        <View style={styles.coordsBox}>
          <Text style={styles.coordsTitle}>Coordenadas GPS</Text>
          <Text style={styles.coordsText}>
            Lat: {RESTAURANT_INFO.ubicacion.latitud}
          </Text>
          <Text style={styles.coordsText}>
            Lng: {RESTAURANT_INFO.ubicacion.longitud}
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
    padding: 12,
    paddingBottom: 30,
  },
  mapPlaceholder: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 15,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.small,
  },
  mapText: {
    fontSize: 60,
    marginBottom: 10,
  },
  mapSubtext: {
    fontSize: 14,
    color: COLORS.textLight,
    fontWeight: '600',
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    ...SHADOWS.small,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },
  direccion: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 22,
    marginBottom: 12,
  },
  btnAbrir: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnAbrirTxt: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: COLORS.textLight,
    fontWeight: '600',
  },
  contactValue: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '600',
    marginTop: 2,
  },
  contactArrow: {
    fontSize: 18,
    color: COLORS.primary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
  },
  horarioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  horarioLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
  },
  horarioValue: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '700',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  infoText: {
    fontSize: 13,
    color: COLORS.textLight,
    flex: 1,
  },
  coordsBox: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    ...SHADOWS.small,
  },
  coordsTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
  },
  coordsText: {
    fontSize: 12,
    color: COLORS.textLight,
    fontFamily: 'monospace',
    marginBottom: 4,
  },
});
