import { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CATEGORIAS, MENU_DATA } from '../data/menuData';
import { COLORS, SHADOWS } from '../utils/colors';

const MenuScreen = ({ navigation }) => {
  const [categoria, setCategoria] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  const platos = MENU_DATA.filter((plato) => {
    const coincideCategoria = categoria === 'Todos' || plato.categoria === categoria;
    const coincideBusqueda = plato.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  const renderPlato = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { plato: item })}>
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.nombre}</Text>
        <Text style={styles.description} numberOfLines={2}>{item.descripcion}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>${item.precio}</Text>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Buscar platillo..."
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoryButton, categoria === cat && styles.categoryActive]}
            onPress={() => setCategoria(cat)}
          >
            <Text style={[styles.categoryText, categoria === cat && styles.categoryTextActive]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={platos}
        renderItem={renderPlato}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>No se encontraron platillos.</Text>}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  search: {
    backgroundColor: COLORS.white,
    margin: 15,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  categories: { paddingHorizontal: 10, marginBottom: 10 },
  categoryButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  categoryActive: { backgroundColor: COLORS.primary },
  categoryText: { color: COLORS.text, fontWeight: 'bold' },
  categoryTextActive: { color: COLORS.white },
  list: { padding: 15 },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    marginBottom: 15,
    overflow: 'hidden',
    ...SHADOWS.small,
  },
  image: { width: 115, height: 115 },
  info: { flex: 1, padding: 12 },
  name: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  description: { color: COLORS.textLight, marginVertical: 6 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { color: COLORS.primary, fontSize: 18, fontWeight: 'bold' },
  rating: { color: COLORS.textLight },
  empty: { textAlign: 'center', marginTop: 40, color: COLORS.textLight },
});