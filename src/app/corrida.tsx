import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

import Mapa from '@/components/Mapa';
import { locais } from '@/data/locais';
import { categorias } from '@/data/categorias';
import styles from '@/styles/corrida';

export default function CorridaScreen() {
  const { id, categoria, preco, tempo } = useLocalSearchParams<{
    id: string;
    categoria: string;
    preco: string;
    tempo: string;
  }>();

  const [status, setStatus] = useState<'procurando' | 'encontrado'>('procurando');

  const destino = useMemo(() => locais.find((local) => local.id === id), [id]);
  const categoriaInfo = useMemo(
    () => categorias.find((item) => item.id === categoria),
    [categoria],
  );

  useEffect(() => {
    const timer = setTimeout(() => setStatus('encontrado'), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!destino) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Corrida não encontrada.</Text>
        <TouchableOpacity onPress={() => router.replace('/')}>
          <Text style={styles.link}>Voltar para o início</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const nomeCategoria = categoriaInfo?.nome ?? categoria ?? 'UberX';

  function cancelar() {
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapArea}>
        <Mapa />

        <TouchableOpacity
          style={styles.closeButton}
          activeOpacity={0.8}
          onPress={cancelar}
        >
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.sheet}>
        {status === 'procurando' ? (
          <>
            <View style={styles.handle} />
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.title}>Procurando motorista...</Text>
            <Text style={styles.subtitle}>
              Estamos procurando um motorista próximo para sua viagem.
            </Text>
          </>
        ) : (
          <>
            <View style={styles.handle} />
            <View style={styles.foundRow}>
              <View style={styles.driverAvatar}>
                <Ionicons name="person" size={30} color="#fff" />
              </View>
              <View style={styles.driverInfo}>
                <Text style={styles.title}>Motorista encontrado</Text>
                <Text style={styles.driverName}>Arthur RATO</Text>
                <Text style={styles.rating}>★ 4,9 · 3 min de distância</Text>
              </View>
            </View>

            <View style={styles.carCard}>
              <View>
                <Text style={styles.carName}>{nomeCategoria}</Text>
                <Text style={styles.carDetails}>Chevrolet Onix · ABC1D23</Text>
              </View>
              <Ionicons name="car-sport-outline" size={42} color="#fff" />
            </View>

            <View style={styles.routeCard}>
              <View style={styles.routeLine}>
                <View style={styles.originDot} />
                <Text style={styles.routeText}>Sua localização</Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={styles.routeLine}>
                <View style={styles.destinationDot} />
                <View style={styles.destinationInfo}>
                  <Text style={styles.routeText}>{destino.nome}</Text>
                  <Text style={styles.address}>{destino.endereco}</Text>
                </View>
              </View>
            </View>

            <View style={styles.summaryRow}>
              <View>
                <Text style={styles.summaryLabel}>Preço</Text>
                <Text style={styles.summaryValue}>{preco || '—'}</Text>
              </View>
              <View style={styles.summaryRight}>
                <Text style={styles.summaryLabel}>Viagem</Text>
                <Text style={styles.summaryValue}>{tempo || '—'} min</Text>
              </View>
            </View>
          </>
        )}

        <TouchableOpacity
          style={styles.cancelButton}
          activeOpacity={0.8}
          onPress={cancelar}
        >
          <Text style={styles.cancelText}>Cancelar viagem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
