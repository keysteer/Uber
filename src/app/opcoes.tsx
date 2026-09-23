import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import * as Location from 'expo-location';

import styles from '@/styles/opcoes';
import { locais } from '@/data/locais';
import {
  categorias,
  calcularDistanciaKm,
  calcularPreco,
  calcularTempoMin,
  formatarPreco,
} from '@/data/categorias';

// Usado se a localização real não estiver disponível (centro de São Paulo).
const ORIGEM_PADRAO = { latitude: -23.5505, longitude: -46.6333 };

export default function OpcoesScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const destino = locais.find((local) => local.id === id);

  const [origem, setOrigem] = useState(ORIGEM_PADRAO);
  const [carregando, setCarregando] = useState(true);
  const [selecionada, setSelecionada] = useState('uberx');

  useEffect(() => {
    let isMounted = true;

    async function buscarLocalizacao() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const posicao = await Location.getCurrentPositionAsync({});
          if (isMounted) {
            setOrigem({
              latitude: posicao.coords.latitude,
              longitude: posicao.coords.longitude,
            });
          }
        }
      } catch {
        // Sem localização: continua com a origem padrão.
      } finally {
        if (isMounted) setCarregando(false);
      }
    }

    buscarLocalizacao();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!destino) {
    return (
      <View style={styles.center}>
        <Text style={styles.erroText}>Destino não encontrado.</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.link}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const distanciaKm = calcularDistanciaKm(
    origem.latitude,
    origem.longitude,
    destino.latitude,
    destino.longitude,
  );

  const categoriaEscolhida = categorias.find((c) => c.id === selecionada)!;

  function confirmar() {
    // Próximo passo: abrir a tela da corrida (procurando motorista...).
    // Por enquanto, registra no console e volta para a tela inicial.
    console.log('Corrida confirmada:', {
      destino: destino!.nome,
      categoria: categoriaEscolhida.nome,
      preco: formatarPreco(calcularPreco(categoriaEscolhida, distanciaKm)),
    });
    router.dismissAll();
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Escolha uma viagem</Text>
      </View>

      <View style={styles.rota}>
        <View style={styles.rotaLinha}>
          <View style={styles.dotOrigem} />
          <Text style={styles.rotaText}>Sua localização</Text>
        </View>
        <View style={styles.rotaLinha}>
          <View style={styles.dotDestino} />
          <Text style={styles.rotaText}>{destino.nome}</Text>
        </View>
        <Text style={styles.distancia}>
          {distanciaKm.toFixed(1).replace('.', ',')} km aproximadamente
        </Text>
      </View>

      {carregando ? (
        <View style={styles.center}>
          <ActivityIndicator color="#fff" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.lista}>
          {categorias.map((categoria) => {
            const ativa = categoria.id === selecionada;
            const preco = calcularPreco(categoria, distanciaKm);
            const tempo = calcularTempoMin(categoria, distanciaKm);

            return (
              <TouchableOpacity
                key={categoria.id}
                style={[styles.opcao, ativa && styles.opcaoAtiva]}
                activeOpacity={0.8}
                onPress={() => setSelecionada(categoria.id)}
              >
                <View style={styles.opcaoIcon}>
                  <Ionicons name={categoria.icone} size={26} color="#fff" />
                </View>

                <View style={styles.opcaoInfo}>
                  <Text style={styles.opcaoNome}>{categoria.nome}</Text>
                  <Text style={styles.opcaoDescricao}>{categoria.descricao}</Text>
                  <Text style={styles.opcaoTempo}>{tempo} min de viagem</Text>
                </View>

                <Text style={styles.opcaoPreco}>{formatarPreco(preco)}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.confirmar, carregando && styles.confirmarDesativado]}
          activeOpacity={0.8}
          disabled={carregando}
          onPress={confirmar}
        >
          <Text style={styles.confirmarText}>
            Confirmar {categoriaEscolhida.nome}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
