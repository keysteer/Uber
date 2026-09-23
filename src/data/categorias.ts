import { Ionicons } from '@expo/vector-icons';

export type Categoria = {
  id: string;
  nome: string;
  descricao: string;
  icone: keyof typeof Ionicons.glyphMap;
  tarifaBase: number; // valor fixo de toda corrida (R$)
  porKm: number;      // valor por quilômetro (R$)
  minimo: number;     // preço mínimo da corrida (R$)
  velocidade: number; // velocidade média na cidade (km/h), usada no tempo estimado
};

export const categorias: Categoria[] = [
  {
    id: 'moto',
    nome: 'motocicleta rapidona',
    descricao: 'rapidona, 1 passageiro',
    icone: 'bicycle',
    tarifaBase: 2.0,
    porKm: 1.2,
    minimo: 6.0,
    velocidade: 30,
  },
  {
    id: 'uberx',
    nome: 'uber pobre',
    descricao: 'o mais baratinho, até 4 pessoas',
    icone: 'car-outline',
    tarifaBase: 3.5,
    porKm: 1.9,
    minimo: 9.0,
    velocidade: 25,
  },
  {
    id: 'comfort',
    nome: 'uber caro',
    descricao: 'o mais caro, bem espaçoso tlgkk',
    icone: 'car-sport-outline',
    tarifaBase: 5.0,
    porKm: 2.6,
    minimo: 13.0,
    velocidade: 25,
  },
];

// Distância em linha reta entre dois pontos (fórmula de Haversine), em km.
export function calcularDistanciaKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371; // raio da Terra em km
  const rad = (graus: number) => (graus * Math.PI) / 180;

  const dLat = rad(lat2 - lat1);
  const dLon = rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2;

  const distanciaReta = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // As ruas não são em linha reta: soma 30% para uma estimativa mais realista.
  return distanciaReta * 1.3;
}

export function calcularPreco(categoria: Categoria, distanciaKm: number): number {
  const preco = categoria.tarifaBase + categoria.porKm * distanciaKm;
  return Math.max(preco, categoria.minimo);
}

export function calcularTempoMin(categoria: Categoria, distanciaKm: number): number {
  return Math.max(1, Math.round((distanciaKm / categoria.velocidade) * 60));
}

export function formatarPreco(valor: number): string {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}
