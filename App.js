import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require('./src/assets/onboarding.png')} />
        <Text style={styles.text}>Escaneie o Qr Code para conseguir computar o seu ponto de trabalho.</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-forward-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingBottom: 42,
  },
  image: {
    width: '100%'
  },
  text: {
    marginTop: 32,
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 5,
    color: '#497FAF',
    paddingHorizontal: 32
  },
  button: {
    backgroundColor: '#497FAF',
    borderRadius: 20,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32
  }
});
