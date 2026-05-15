import { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CATEGORIAS, MENU_DATA } from '../data/menuData';
import { COLORS, SHADOWS } from '../utils/colors';

const MenuScreen = ({ navigation }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Hamburguesas');

  const platosFiltrados = MENU_DATA.filter(
    (plato) => plato.categoria === categoriaSeleccionada
  );

  const renderPlato = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { plato: item })}
    >
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.nombre}</Text>
        <Text style={styles.description}>{item.descripcion}</Text>
        <Text style={styles.price}>${item.precio}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {CATEGORIAS.map((categoria) => (
          <TouchableOpacity
            key={categoria}
            style={[
              styles.categoryButton,
              categoriaSeleccionada === categoria && styles.categoryActive,
            ]}
            onPress={() => setCategoriaSeleccionada(categoria)}
          >
            <Text
              style={[
                styles.categoryText,
                categoriaSeleccionada === categoria && styles.categoryTextActive,
              ]}
            >
              {categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={platosFiltrados}
        renderItem={renderPlato}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categories: {
    padding: 10,
  },
  categoryButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  categoryActive: {
    backgroundColor: COLORS.primary,
  },
  categoryText: {
    color: COLORS.text,
    fontWeight: 'bold',
  },
  categoryTextActive: {
    color: COLORS.white,
  },
  list: {
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    ...SHADOWS.small,
  },
  image: {
    width: 110,
    height: 110,
  },
  info: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  description: {
    color: COLORS.textLight,
    marginVertical: 6,
  },
  price: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});