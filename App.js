import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Gasolina from './components/gasolina';
import Etanol from './components/etanol'
import BtnCalcular from './components/btnCalcular';
import Resultado from './components/resultado'
import ImagemResultado from './components/imgResultado.js'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Gasolina/>
      <Etanol/>
      <BtnCalcular/>
      <Resultado/>
      <ImagemResultado/>
    </SafeAreaView>
     

    
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    // flex: 1,
    backgroundColor: '#999',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
