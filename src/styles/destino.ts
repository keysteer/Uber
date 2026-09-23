import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
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


  // Campos de origem/destino

  inputWrap: {
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
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

  origemText: {
    color: '#9b9b9b',
    fontSize: 15,
  },

  inputDivider: {
    height: 1,
    backgroundColor: '#2a2a2a',
    marginLeft: 20,
  },

  input: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
    paddingVertical: 4,
  },


  // Lista de sugestões

  list: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#242424',
    gap: 14,
  },

  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemInfo: {
    flex: 1,
  },

  itemNome: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },

  itemEndereco: {
    fontSize: 13,
    color: '#9b9b9b',
    marginTop: 2,
  },

  emptyText: {
    color: '#6b6b6b',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 24,
  },

});

export default styles;
