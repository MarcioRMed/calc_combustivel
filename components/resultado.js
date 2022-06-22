import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default props=>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Melhor Combustível: <Text style={styles.resultado}> {props.resultado}</Text> </Text>
    </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    marginBottom:15
  },
  text:{
    color:'#000',
    fontWeight:'600',
    
  },
  resultado:{
    color:'#800',
    fontSize:22,
    fontWeight:'900',
    margin:5,
  }
});