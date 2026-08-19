import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './style';
import Mapa from '@/components/Mapa';

type Corrida = {
  id: string;
  destino: string;
  endereco: string;
  data: string;
};

const historico: Corrida[] = [
  {
    id: '1',
    destino: 'Aeroporto de Congonhas',
    endereco: 'Av. Washington Luís, s/n',
    data: 'Ontem, 18:42',
  },
  {
    id: '2',
    destino: 'Shopping Ibirapuera',
    endereco: 'Av. Ibirapuera, 3103',
    data: '15 de agosto, 20:10',
  },
  {
    id: '3',
    destino: 'Casa',
    endereco: 'Rua das Palmeiras, 120',
    data: '12 de agosto, 08:15',
  },
];

export default function HomeScreen() {
  const [pesquisa, setPesquisa] = useState(''); 
  const [focado, setFocado] = useState(false); 

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.logoArea}>
          <Text style={styles.logo}>Uber</Text>
        </View>

        <View style={styles.searchBar}>
          <View style={styles.searchDot}/>
          
          <TextInput 
            // CORREÇÃO 2: Deixamos apenas um bloco de style correto com a borda dinâmica
            style={[
              styles.searchInput, 
              { borderColor: focado ? '#fff' : 'transparent' }
            ]} 
            value={pesquisa} 
            onChangeText={(texto) => setPesquisa(texto)} 
            placeholder="Para onde..."
            placeholderTextColor="#888"
            onFocus={() => setFocado(true)}
            onBlur={() => setFocado(false)}
          />
        </View>
        
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
