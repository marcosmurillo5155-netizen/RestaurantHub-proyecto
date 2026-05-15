import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';
import { CartContext } from '../context/CartContext';

export const DetailScreen = ({ route, navigation }) => {
  const { plato } = route.params;
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleAgregarCarrito = () => {
    for (let i = 0; i < cantidad; i++) {
      agregarAlCarrito(plato);
    }
    Alert.alert(
      '✅ Agregado',
      `${cantidad} x ${plato.nombre}\nfue añadido al carrito`,
      [
        {
          text: 'Continuar',
          onPress: () => navigation.goBack(),
        },
        {
          text: 'Ir al carrito',
          onPress: () => navigation.navigate('Carrito'),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Imagen */}
      <Image 
        source={{ uri: plato.imagen }} 
        style={styles.imagen}
      />

      {/* Contenido */}
      <View style={styles.content}>
        {/* Nombre y categoría */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.nombre}>{plato.nombre}</Text>
            <Text style={styles.categoria}>{plato.categoria}</Text>
          </View>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>⭐ {plato.rating}</Text>
          </View>
        </View>

        {/* Información */}
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>💰 Precio</Text>
            <Text style={styles.infoValue}>${plato.precio.toFixed(2)}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>⏱️ Preparación</Text>
            <Text style={styles.infoValue}>{plato.preparacion}</Text>
          </View>
        </View>

        {/* Descripción */}
        <View style={styles.descripcionBox}>
          <Text style={styles.descripcionTitle}>Descripción</Text>
          <Text style={styles.descripcionText}>{plato.descripcion}</Text>
        </View>

        {/* Selector de cantidad */}
        <View style={styles.cantidadSection}>
          <Text style={styles.cantidadLabel}>Cantidad</Text>
          <View style={styles.cantidadControl}>
            <TouchableOpacity 
              style={styles.btnMenos}
              onPress={() => cantidad > 1 && setCantidad(cantidad - 1)}
            >
              <Text style={styles.btnMenosText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.cantidadText}>{cantidad}</Text>

            <TouchableOpacity 
              style={styles.btnMas}
              onPress={() => setCantidad(cantidad + 1)}
            >
              <Text style={styles.btnMasText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Precio total */}
        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>${(plato.precio * cantidad).toFixed(2)}</Text>
        </View>

        {/* Botón agregar */}
        <TouchableOpacity 
          style={styles.bottonAgregar}
          onPress={handleAgregarCarrito}
        >
          <Text style={styles.btnText}>🛒 Agregar al Carrito</Text>
        </TouchableOpacity>

        {/* Botón volver */}
        <TouchableOpacity 
          style={styles.btnVolver}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnVolverText}>← Volver al Menú</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  imagen: {
    width: '100%',
    height: 280,
    backgroundColor: COLORS.border,
  },
  content: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  titleContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 6,
  },
  categoria: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: COLORS.primary + '15',
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  ratingBadge: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    ...SHADOWS.small,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
  },
  infoSection: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 15,
  },
  infoItem: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    ...SHADOWS.small,
  },
  infoLabel: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 6,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  descripcionBox: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    ...SHADOWS.small,
  },
  descripcionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
  },
  descripcionText: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 22,
  },
  cantidadSection: {
    marginBottom: 20,
  },
  cantidadLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },
  cantidadControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    ...SHADOWS.small,
  },
  btnMenos: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMenosText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  cantidadText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    flex: 1,
    textAlign: 'center',
  },
  btnMas: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMasText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  totalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    ...SHADOWS.small,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textLight,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  bottonAgregar: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    ...SHADOWS.small,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnVolver: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  btnVolverText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 15,
  },
});
