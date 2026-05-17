import { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { COLORS, SHADOWS } from '../utils/colors';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const iniciarSesion = () => {
    if (!email || !password) {
      Alert.alert('Campos incompletos', 'Ingresa tu correo y contraseña.');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
          }}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.logo}>🍔 RestaurantHub</Text>
          <Text style={styles.subtitle}>Inicia sesión para ordenar y reservar</Text>

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={iniciarSesion}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() =>
              Alert.alert(
                'Cuenta demo',
                'Puedes usar cualquier correo y contraseña para entrar.'
              )
            }
          >
            <Text style={styles.secondaryText}>Crear cuenta demo</Text>
          </TouchableOpacity>

          <Text style={styles.demo}>
            Demo: usuario@restauranthub.com / 123456
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 22,
    ...SHADOWS.small,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary,
  },
  subtitle: {
    textAlign: 'center',
    color: COLORS.textLight,
    marginVertical: 15,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    padding: 14,
    alignItems: 'center',
  },
  secondaryText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  demo: {
    textAlign: 'center',
    color: COLORS.textLighter,
    fontSize: 12,
    marginTop: 5,
  },
});