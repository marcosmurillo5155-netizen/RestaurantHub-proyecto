import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';
import { CartContext } from '../context/CartContext';

export const OrdersScreen = () => {
  const { pedidosHistorial } = useContext(CartContext);
  const [pedidoSeleccionado, setPedidoSeleccionado] = React.useState(null);

  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'Entregado': return COLORS.success;
      case 'En camino': return '#2196F3';
      case 'Preparando': return COLORS.warning;
      default: return COLORS.textLight;
    }
  };

  const renderPedido = ({ item }) => (
    <TouchableOpacity 
      style={styles.pedidoCard}
      onPress={() => setPedidoSeleccionado(pedidoSeleccionado?.id === item.id ? null : item)}
    >
      <View style={styles.pedidoHeader}>
        <View>
          <Text style={styles.pedidoId}>Pedido #{item.id}</Text>
          <Text style={styles.fecha}>{item.fecha} - {item.hora}</Text>
        </View>
        <View style={[styles.estadoBadge, { backgroundColor: getEstadoColor(item.estado) }]}>
          <Text style={styles.estadoTxt}>{item.estado}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {pedidoSeleccionado?.id === item.id && (
        <View style={styles.detallesContent}>
          <Text style={styles.detallesTitle}>Items:</Text>
          {item.items.map((itemPedido, idx) => (
            <View key={idx} style={styles.itemRow}>
              <Text style={styles.itemNombre}>{itemPedido.nombre}</Text>
              <Text style={styles.itemCantidad}>x{itemPedido.cantidad}</Text>
              <Text style={styles.itemPrecio}>${(itemPedido.precio * itemPedido.cantidad).toFixed(2)}</Text>
            </View>
          ))}
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>${item.total.toFixed(2)}</Text>
          </View>
        </View>
      )}

      <View style={styles.pedidoFooter}>
        <Text style={styles.verDetalles}>
          {pedidoSeleccionado?.id === item.id ? '▼ Ver menos' : '▶ Ver detalles'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📦 Mis Pedidos</Text>
        <Text style={styles.headerSubtitle}>Historial de tus órdenes</Text>
      </View>

      {pedidosHistorial.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📦</Text>
          <Text style={styles.emptyText}>No tienes pedidos aún</Text>
          <Text style={styles.emptySubtext}>Haz tu primer pedido en el menú</Text>
        </View>
      ) : (
        <FlatList
          data={pedidosHistorial}
          renderItem={renderPedido}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
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
  headerSubtitle: {
    fontSize: 13,
    color: COLORS.white,
    marginTop: 4,
    opacity: 0.9,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 5,
  },
  emptySubtext: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  listContent: {
    padding: 12,
    paddingBottom: 20,
  },
  pedidoCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    ...SHADOWS.small,
  },
  pedidoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
  },
  pedidoId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  fecha: {
    fontSize: 12,
    color: COLORS.textLighter,
    marginTop: 4,
  },
  estadoBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  estadoTxt: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
  },
  detallesContent: {
    padding: 12,
    backgroundColor: '#fafafa',
  },
  detallesTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  itemNombre: {
    fontSize: 12,
    color: COLORS.textLight,
    flex: 1,
  },
  itemCantidad: {
    fontSize: 11,
    color: COLORS.textLighter,
    marginHorizontal: 8,
  },
  itemPrecio: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
  },
  totalValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  pedidoFooter: {
    padding: 10,
    alignItems: 'center',
  },
  verDetalles: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
  },
});
