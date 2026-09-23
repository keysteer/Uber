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

  errorText: {
    color: '#fff',
    fontSize: 16,
  },

  link: {
    color: '#9b9b9b',
    textDecorationLine: 'underline',
    fontSize: 14,
  },

  mapArea: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    overflow: 'hidden',
  },

  closeButton: {
    position: 'absolute',
    top: 24,
    left: 20,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  sheet: {
    backgroundColor: '#111',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24,
    gap: 14,
  },

  handle: {
    width: 42,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#555',
    alignSelf: 'center',
    marginBottom: 4,
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    color: '#9b9b9b',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 4,
  },

  foundRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  driverAvatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  driverInfo: {
    flex: 1,
    gap: 3,
  },

  driverName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  rating: {
    color: '#9b9b9b',
    fontSize: 13,
  },

  carCard: {
    backgroundColor: '#1c1c1c',
    borderRadius: 14,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  carName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  carDetails: {
    color: '#9b9b9b',
    fontSize: 13,
    marginTop: 4,
  },

  routeCard: {
    backgroundColor: '#1c1c1c',
    borderRadius: 14,
    padding: 14,
  },

  routeLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  originDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#aaa',
  },

  destinationDot: {
    width: 9,
    height: 9,
    backgroundColor: '#fff',
  },

  verticalLine: {
    width: 1,
    height: 18,
    backgroundColor: '#444',
    marginLeft: 4,
  },

  destinationInfo: {
    flex: 1,
  },

  routeText: {
    color: '#fff',
    fontSize: 14,
  },

  address: {
    color: '#777',
    fontSize: 11,
    marginTop: 2,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },

  summaryRight: {
    alignItems: 'flex-end',
  },

  summaryLabel: {
    color: '#777',
    fontSize: 12,
  },

  summaryValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 2,
  },

  cancelButton: {
    backgroundColor: '#2a2a2a',
    borderRadius: 26,
    paddingVertical: 15,
    alignItems: 'center',
  },

  cancelText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default styles;
