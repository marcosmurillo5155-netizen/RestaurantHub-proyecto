import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, SHADOWS } from '../utils/colors';

export const ProfileScreen = () => {
  const [nombre, setNombre] = useState('Juan Pérez');
  const [email, setEmail] = useState('juan@example.com');
  const [telefono, setTelefono] = useState('+52 333 123 456');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👤 Mi Perfil</Text>
      </View>

      <View style={styles.content}>
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text style={styles.userName}>{nombre}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>

        {/* Información Personal */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>📋 Información Personal</Text>
            <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
              <Text style={styles.editBtn}>{isEditing ? '✓ Listo' : '✏️ Editar'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={[styles.input, !isEditing && styles.inputDisabled]}
              value={nombre}
              onChangeText={setNombre}
              editable={isEditing}
              placeholderTextColor={COLORS.textLighter}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, !isEditing && styles.inputDisabled]}
              value={email}
              onChangeText={setEmail}
              editable={isEditing}
              keyboardType="email-address"
              placeholderTextColor={COLORS.textLighter}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={[styles.input, !isEditing && styles.inputDisabled]}
              value={telefono}
              onChangeText={setTelefono}
              editable={isEditing}
              keyboardType="phone-pad"
              placeholderTextColor={COLORS.textLighter}
            />
          </View>
        </View>

        {/* Preferencias */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚙️ Preferencias</Text>

          <TouchableOpacity style={styles.preferenceItem}>
            <Text style={styles.preferenceIcon}>🔔</Text>
            <View style={styles.preferenceInfo}>
              <Text style={styles.preferenceLabel}>Notificaciones</Text>
              <Text style={styles.preferenceDesc}>Recibe actualizaciones de pedidos</Text>
            </View>
            <Text style={styles.toggle}>ON</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.preferenceItem}>
            <Text style={styles.preferenceIcon}>🌙</Text>
            <View style={styles.preferenceInfo}>
              <Text style={styles.preferenceLabel}>Modo Oscuro</Text>
              <Text style={styles.preferenceDesc}>Cambia el tema de la app</Text>
            </View>
            <Text style={styles.toggle}>OFF</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.preferenceItem}>
            <Text style={styles.preferenceIcon}>🍽️</Text>
            <View style={styles.preferenceInfo}>
              <Text style={styles.preferenceLabel}>Dietas Especiales</Text>
              <Text style={styles.preferenceDesc}>Vegano, sin gluten, etc.</Text>
            </View>
            <Text style={styles.toggle}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Estadísticas */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📊 Tus Estadísticas</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Pedidos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>$145.50</Text>
              <Text style={styles.statLabel}>Gastado</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>⭐ 4.8</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>
        </View>

        {/* Ayuda y Soporte */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>❓ Ayuda</Text>

          <TouchableOpacity style={styles.helpItem}>
            <Text style={styles.helpIcon}>💬</Text>
            <Text style={styles.helpText}>Contactar Soporte</Text>
            <Text style={styles.helpArrow}>→</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.helpItem}>
            <Text style={styles.helpIcon}>📖</Text>
            <Text style={styles.helpText}>Términos y Condiciones</Text>
            <Text style={styles.helpArrow}>→</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.helpItem}>
            <Text style={styles.helpIcon}>🔒</Text>
            <Text style={styles.helpText}>Política de Privacidad</Text>
            <Text style={styles.helpArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Botón Cerrar Sesión */}
        <TouchableOpacity style={styles.btnLogout}>
          <Text style={styles.btnLogoutTxt}>🚪 Cerrar Sesión</Text>
        </TouchableOpacity>

        <Text style={styles.appVersion}>RestaurantHub v1.0.0</Text>
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
  avatarSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  userEmail: {
    fontSize: 13,
    color: COLORS.textLight,
    marginTop: 4,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    ...SHADOWS.small,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  editBtn: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 13,
  },
  formGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textLight,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: COLORS.text,
  },
  inputDisabled: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  preferenceIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  preferenceInfo: {
    flex: 1,
  },
  preferenceLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  preferenceDesc: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  toggle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  helpIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  helpText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '500',
  },
  helpArrow: {
    fontSize: 14,
    color: COLORS.primary,
  },
  btnLogout: {
    backgroundColor: COLORS.danger,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  btnLogoutTxt: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  appVersion: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.textLighter,
  },
});
