import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import styles from '@/styles/destino';
import { locais, Local } from '@/data/locais';

export default function DestinoScreen() {
  const [busca, setBusca] = useState('');

  // Filtra as sugestões pelo nome ou endereço digitado (sem diferenciar maiúsculas).
  const termo = busca.trim().toLowerCase();
  const sugestoes = locais.filter(
    (local) =>
      local.nome.toLowerCase().includes(termo) ||
      local.endereco.toLowerCase().includes(termo),
  );

  function escolherDestino(local: Local) {
    // Abre a tela de opções de corrida, enviando o id do destino escolhido.
    router.push({ pathname: '/opcoes', params: { id: local.id } });
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Para onde?</Text>
      </View>

      <View style={styles.inputWrap}>
        <View style={styles.inputRow}>
          <View style={styles.dotOrigem} />
          <Text style={styles.origemText}>Sua localização</Text>
        </View>

        <View style={styles.inputDivider} />

        <View style={styles.inputRow}>
          <View style={styles.dotDestino} />
          <TextInput
            style={styles.input}
            placeholder="Digite o destino"
            placeholderTextColor="#6b6b6b"
            value={busca}
            onChangeText={setBusca}
            autoFocus
          />
        </View>
      </View>

      <FlatList
        data={sugestoes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum local encontrado.</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => escolherDestino(item)}
          >
            <View style={styles.itemIcon}>
              <Ionicons name="location-outline" size={20} color="#fff" />
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <Text style={styles.itemEndereco}>{item.endereco}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}
