import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  center: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },

  erroText: {
    color: '#fff',
    fontSize: 16,
  },

  link: {
    color: '#9b9b9b',
    fontSize: 14,
    textDecorationLine: 'underline',
  },


  // Header

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 12,
  },

  backButton: {
    padding: 4,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },


  // Resumo da rota

  rota: {
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    marginHorizontal: 20,
    padding: 16,
    gap: 10,
  },

  rotaLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  dotOrigem: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9b9b9b',
  },

  dotDestino: {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
  },

  rotaText: {
    color: '#fff',
    fontSize: 15,
  },

  distancia: {
    color: '#6b6b6b',
    fontSize: 12,
    marginTop: 2,
  },


  // Lista de categorias

  lista: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    gap: 10,
  },

  opcao: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: '#111',
    gap: 14,
  },

  opcaoAtiva: {
    borderColor: '#fff',
    backgroundColor: '#1c1c1c',
  },

  opcaoIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },

  opcaoInfo: {
    flex: 1,
  },

  opcaoNome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },

  opcaoDescricao: {
    fontSize: 13,
    color: '#9b9b9b',
    marginTop: 2,
  },

  opcaoTempo: {
    fontSize: 12,
    color: '#6b6b6b',
    marginTop: 4,
  },

  opcaoPreco: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },


  // Botão confirmar

  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#1c1c1c',
  },

  confirmar: {
    backgroundColor: '#fff',
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: 'center',
  },

  confirmarDesativado: {
    opacity: 0.5,
  },

  confirmarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },

});

export default styles;
