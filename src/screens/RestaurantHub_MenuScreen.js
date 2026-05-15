import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';
import { MENU_DATA, CATEGORIAS } from '../data/menuData';

export const MenuScreen = ({ navigation }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Hamburguesas');

  const platosFiltrados = MENU_DATA.filter(plato => plato.categoria === categoriaSeleccionada);

  const renderPlato = ({ item }) => (
    <TouchableOpacity 
      style={styles.platoCard}
      onPress={() => navigation.navigate('Detalle', { plato: item })}
      activeOpacity={0.8}
    >
      <Image 
        source={{ uri: item.imagen }} 
        style={styles.imagen}
      />
      
      <View style={styles.platoInfo}>
        <View style={styles.platoHeader}>
          <Text style={styles.platoNombre} numberOfLines={1}>{item.nombre}</Text>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
        </View>
        
        <Text style={styles.platoDescripcion} numberOfLines={2}>
          {item.descripcion}
        </Text>

        <View style={styles.platoFooter}>
          <Text style={styles.precio}>${item.precio.toFixed(2)}</Text>
          <Text style={styles.tiempo}>⏱️ {item.preparacion}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🍽️ Menú</Text>
      </View>

      {/* Filtro de categorías */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriasList}
      >
        {CATEGORIAS.map((categoria) => (
          <TouchableOpacity 
            key={categoria}
            style={[
              styles.categoriaBtn,
              categoriaSeleccionada === categoria && styles.categoriaBtnActive
            ]}
            onPress={() => setCategoriaSeleccionada(categoria)}
          >
            <Text style={[
              styles.categoriaTxt,
              categoriaSeleccionada === categoria && styles.categoriaTxtActive
            ]}>
              {categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de platos */}
      <FlatList
        data={platosFiltrados}
        renderItem={renderPlato}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
  categoriasList: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 8,
  },
  categoriaBtn: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    ...SHADOWS.small,
  },
  categoriaBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoriaTxt: {
    color: COLORS.text,
    fontWeight: '600',
    fontSize: 13,
  },
  categoriaTxtActive: {
    color: COLORS.white,
  },
  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  platoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    ...SHADOWS.small,
  },
  imagen: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.border,
  },
  platoInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  platoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  platoNombre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.text,
    flex: 1,
  },
  rating: {
    fontSize: 12,
    marginLeft: 8,
  },
  platoDescripcion: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 8,
    lineHeight: 16,
  },
  platoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  precio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  tiempo: {
    fontSize: 12,
    color: COLORS.textLighter,
  },
});
