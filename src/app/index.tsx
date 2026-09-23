import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import styles from '@/styles/home';
import Mapa from '@/components/Mapa';
import { historico } from '@/data/locais';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.logoArea}>
          <Text style={styles.logo}>Uber</Text>
        </View>

        <TouchableOpacity
          style={styles.searchBar}
          activeOpacity={0.8}
          onPress={() => router.push('/destino')}
        >
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
                <Text style={styles.rideDestination}>{corrida.local.nome}</Text>
                <Text style={styles.rideAddress}>{corrida.local.endereco}</Text>
                <Text style={styles.rideDate}>{corrida.data}</Text>
              </View>

              <Text style={styles.ridePrice}>{corrida.preco}</Text>

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
