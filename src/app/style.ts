import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },


  header: {
    height: 64,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 64,
  },

 
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
    marginRight: 45,
  },

  
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },

  menuText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  aboutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  arrow: {
    color: '#fff',
    fontSize: 18,
    marginTop: -4,
  },

  
  menuRight: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 28,
  },

  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  globe: {
    color: '#fff',
    fontSize: 15,
  },

  
  signupButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 25,
  },

  signupText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },

});

export default styles;