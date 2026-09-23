import React, { useEffect, useState } from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

// Local padrão usado enquanto a localização real não chega (ou se o usuário negar).
const DEFAULT_LOCATION = {
  latitude: -23.5505,
  longitude: -46.6333,
};

// Tamanho da "janela" visível do mapa ao redor do ponto central.
// Quanto menor o valor, mais próximo o zoom (0.0015 ≈ nível de rua bem próxima).
const DELTA = 0.0015;

type LocationState = {
  latitude: number;
  longitude: number;
  isUserLocation: boolean;
};

export default function Mapa() {
  const [location, setLocation] = useState<LocationState>({
    ...DEFAULT_LOCATION,
    isUserLocation: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function buscarLocalizacao() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          // Usuário negou a permissão: mantém o local padrão.
          return;
        }

        const posicao = await Location.getCurrentPositionAsync({});

        if (isMounted) {
          setLocation({
            latitude: posicao.coords.latitude,
            longitude: posicao.coords.longitude,
            isUserLocation: true,
          });
        }
      } catch {
        // Falha ao obter localização (ex: sem GPS, sem suporte no navegador):
        // mantém o local padrão silenciosamente.
      }
    }

    buscarLocalizacao();

    return () => {
      isMounted = false;
    };
  }, []);

  const bbox = [
    location.longitude - DELTA,
    location.latitude - DELTA,
    location.longitude + DELTA,
    location.latitude + DELTA,
  ].join(',');

  const caption = location.isUserLocation
    ? 'Sua localização'
    : 'São Paulo (padrão)';

  if (Platform.OS === 'web') {
    const src =
      `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}` +
      `&layer=mapnik&marker=${location.latitude},${location.longitude}`;

    // Usamos React.createElement para inserir um <iframe> real na versão web,
    // já que "iframe" não existe como componente do React Native.
    return (
      <View>
        <View style={styles.mapWrapper}>
          {React.createElement('iframe', {
            key: src,
            src,
            style: { border: 0, width: '100%', height: '100%' },
            loading: 'lazy',
            referrerPolicy: 'no-referrer-when-downgrade',
          })}
        </View>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    );
  }

  // Android/iOS: mapa nativo com tiles do OpenStreetMap será adicionado
  // depois com a biblioteca react-native-maps (também gratuita, sem chave).
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>
        Mapa nativo (Android/iOS) ainda não configurado — isso vem em um próximo passo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  mapWrapper: {
    marginTop: 28,
    marginHorizontal: 20,
    height: 220,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1c1c1c',
  },

  caption: {
    marginTop: 8,
    marginHorizontal: 20,
    fontSize: 12,
    color: '#6b6b6b',
  },

  placeholder: {
    marginTop: 28,
    marginHorizontal: 20,
    height: 220,
    borderRadius: 12,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  placeholderText: {
    color: '#b0b0b0',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },

});
