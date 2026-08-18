import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      
      <View style={styles.header}>

        
        <Text style={styles.logo}>Uber</Text>

        
        <View style={styles.menuLeft}>

          <TouchableOpacity>
            <Text style={styles.menuText}>Viajar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.menuText}>Ganhe dinheiro</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.menuText}>Empresa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.aboutButton}>
            <Text style={styles.menuText}>Sobre</Text>
            <Text style={styles.arrow}>⌄</Text>
          </TouchableOpacity>

        </View>

        
        <View style={styles.menuRight}>

          <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.globe}>◉</Text>
            <Text style={styles.menuText}>PT-BR</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.menuText}>Ajuda</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.menuText}>Fazer login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>Cadastre-se</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}