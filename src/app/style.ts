import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },


  // Logo

  logoArea: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 16,
  },

  logo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0.5,
  },


  // Search bar

  searchBar: {
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 28,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 16,
  },

  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },

  searchDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },

  searchPlaceholder: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },


  // Ride history section

  section: {
    marginTop: 28,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },

  rideItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#242424',
    gap: 14,
  },

  rideIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rideInfo: {
    flex: 1,
  },

  rideDestination: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },

  rideAddress: {
    fontSize: 13,
    color: '#9b9b9b',
    marginTop: 2,
  },

  rideDate: {
    fontSize: 12,
    color: '#6b6b6b',
    marginTop: 4,
  },

  ridePrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },


  // Ad banner

  adBanner: {
    marginTop: 28,
    marginHorizontal: 20,
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  adTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },

  adSubtitle: {
    fontSize: 14,
    color: '#b0b0b0',
    lineHeight: 20,
    marginBottom: 16,
  },

  adButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 11,
  },

  adButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

});

export default styles;
