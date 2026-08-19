import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './style';
import Mapa from '@/components/Mapa';

type Corrida = {
  id: string;
  destino: string;
  endereco: string;
  data: string;
  preco: string;
};

const historico: Corrida[] = [
  {
    id: '1',
    destino: 'Aeroporto de Congonhas',
    endereco: 'Av. Washington Luís, s/n',
    data: 'Ontem, 18:42',
    preco: 'R$ 38,90',
  },
  {
    id: '2',
    destino: 'Shopping Ibirapuera',
    endereco: 'Av. Ibirapuera, 3103',
    data: '15 de agosto, 20:10',
    preco: 'R$ 22,50',
  },
  {
    id: '3',
    destino: 'Casa',
    endereco: 'Rua das Palmeiras, 120',
    data: '12 de agosto, 08:15',
    preco: 'R$ 15,00',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.logoArea}>
          <Text style={styles.logo}>Uber</Text>
        </View>

        <TouchableOpacity style={styles.searchBar} activeOpacity={0.8}>
          <View style={styles.searchDot} />
          <Text style={styles.searchPlaceholder}>Para onde?</Text>
        </TouchableOpacity>

        <View style={styles.section}>

          {historico.map((corrida) => (
            <TouchableOpacity key={corrida.id} style={styles.rideItem} activeOpacity={0.7}>

              <View style={styles.rideIconWrap}>
                <Ionicons name="time-outline" size={20} color="#fff" />
              </View>

              <View style={styles.rideInfo}>
                <Text style={styles.rideDestination}>{corrida.destino}</Text>
                <Text style={styles.rideAddress}>{corrida.endereco}</Text>
                <Text style={styles.rideDate}>{corrida.data}</Text>
              </View>

            </TouchableOpacity>
          ))}

        </View>

        <View style={styles.adBanner}>
          <Text style={styles.adTitle}>Vire um parceiro Uber</Text>
          <Text style={styles.adSubtitle}>
            Dirija quando quiser e ganhe dinheiro extra no seu tempo livre.
          </Text>
          <TouchableOpacity style={styles.adButton}>
            <Text style={styles.adButtonText}>Saiba mais</Text>
          </TouchableOpacity>
        </View>

        <Mapa />

      </ScrollView>

    </View>
  );
}
