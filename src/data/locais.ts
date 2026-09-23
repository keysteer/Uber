export type Local = {
  id: string;
  nome: string;
  endereco: string;
  latitude: number;
  longitude: number;
};

export type Corrida = {
  id: string;
  local: Local;
  data: string;
  preco: string;
};

export const locais: Local[] = [
  {
    id: 'congonhas',
    nome: 'Aeroporto de Cegonhas',
    endereco: 'Av. Washington Luís, s/n',
    latitude: -23.6261,
    longitude: -46.6564,
  },
  {
    id: 'ibirapuera',
    nome: 'Shopping Taradin',
    endereco: 'Av. Ibirapuera, 3103',
    latitude: -23.6101,
    longitude: -46.6667,
  },
  {
    id: 'casa',
    nome: 'Casa',
    endereco: 'Rua das Palmeiras, 120',
    latitude: -23.5389,
    longitude: -46.6558,
  },
  {
    id: 'paulista',
    nome: 'Avenida Carioca',
    endereco: 'Av. Paulista, 1578 (MASP)',
    latitude: -23.5614,
    longitude: -46.6559,
  },
  {
    id: 'se',
    nome: 'Praça da Sé',
    endereco: 'Praça da Sé, s/n',
    latitude: -23.5503,
    longitude: -46.6340,
  },
];

export const historico: Corrida[] = [
  { id: '1', local: locais[0], data: 'Ontem, 18:42', preco: 'R$ 38,90' },
  { id: '2', local: locais[1], data: '15 de agosto, 20:10', preco: 'R$ 22,50' },
  { id: '3', local: locais[2], data: '12 de agosto, 08:15', preco: 'R$ 15,00' },
];
