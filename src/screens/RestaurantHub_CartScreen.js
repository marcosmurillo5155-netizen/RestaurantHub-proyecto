import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';
import { CartContext } from '../context/CartContext';

export const CartScreen = ({ navigation }) => {
  const { carrito, total, removerDelCarrito, actualizarCantidad, confirmarPedido, cantidadItems } = useContext(CartContext);

  const handleConfirmarPedido = () => {
    if (carrito.length === 0) {
      Alert.alert('⚠️ Carrito vacío', 'Añade productos antes de hacer el pedido');
      return;
    }

    const pedido = confirmarPedido();
    
    Alert.alert(
      '✅ Pedido Confirmado',
      `Pedido #${pedido.id}\nTotal: $${pedido.total.toFixed(2)}\n\nTiempo estimado: ${pedido.tiempoEstimado}`,
      [
        {
          text: 'Ver Pedido',
          onPress: () => navigation.navigate('Pedidos'),
        },
        {
          text: 'Continuar Comprando',
          onPress: () => navigation.navigate('Menu'),
        }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemNombre}>{item.nombre}</Text>
        <Text style={styles.itemPrecio}>${(item.precio).toFixed(2)}</Text>
      </View>

      <View style={styles.cantidadControl}>
        <TouchableOpacity 
          onPress={() => actualizarCantidad(item.id, item.cantidad - 1)}
          style={styles.btnCantidad}
        >
          <Text style={styles.btnCantidadTxt}>−</Text>
        </TouchableOpacity>

        <Text style={styles.cantidad}>{item.cantidad}</Text>

        <TouchableOpacity 
          onPress={() => actualizarCantidad(item.id, item.cantidad + 1)}
          style={styles.btnCantidad}
        >
          <Text style={styles.btnCantidadTxt}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => removerDelCarrito(item.id)}
        style={styles.btnEliminar}
      >
        <Text style={styles.btnEliminarTxt}>🗑️</Text>
      </TouchableOpacity>

      <Text style={styles.subtotal}>${(item.precio * item.cantidad).toFixed(2)}</Text>
    </View>
  );

  if (carrito.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyContent}>
          <Text style={styles.emptyIcon}>🛒</Text>
          <Text style={styles.emptyTitle}>Tu carrito está vacío</Text>
          <Text style={styles.emptyText}>Explora nuestro menú y agrega tus platos favoritos</Text>
          
          <TouchableOpacity 
            style={styles.btnIrMenu}
            onPress={() => navigation.navigate('Menu')}
          >
            <Text style={styles.btnIrMenuText}>🍽️ Ir al Menú</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛒 Carrito</Text>
        <Text style={styles.headerSubtitle}>{cantidadItems} articulo(s)</Text>
      </View>

      {/* Lista de items */}
      <FlatList
        data={carrito}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer con total */}
      <View style={styles.footer}>
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Total a Pagar:</Text>
          <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity 
          style={styles.btnConfirmar}
          onPress={handleConfirmarPedido}
        >
          <Text style={styles.btnConfirmarTxt}>📦 Confirmar Pedido</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnContinuar}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.btnContinuarTxt}>Continuar Comprando</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 20,
  },
  emptyContent: {
    alignItems: 'center',
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: 30,
  },
  btnIrMenu: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 10,
  },
  btnIrMenuText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
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
  headerSubtitle: {
    fontSize: 13,
    color: COLORS.white,
    marginTop: 4,
    opacity: 0.9,
  },
  listContent: {
    padding: 12,
    paddingBottom: 180,
  },
  itemCard: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  itemInfo: {
    flex: 1,
  },
  itemNombre: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  itemPrecio: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  cantidadControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginHorizontal: 10,
  },
  btnCantidad: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCantidadTxt: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cantidad: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text,
    width: 28,
    textAlign: 'center',
  },
  btnEliminar: {
    padding: 8,
    marginRight: 8,
  },
  btnEliminarTxt: {
    fontSize: 18,
  },
  subtotal: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
    minWidth: 60,
    textAlign: 'right',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  btnConfirmar: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  btnConfirmarTxt: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  btnContinuar: {
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnContinuarTxt: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 14,
  },
});
