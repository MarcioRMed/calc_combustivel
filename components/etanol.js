import React from 'react';
import {StyleSheet, Text, TextInput, View } from 'react-native';

export default props=>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite o preço do Etanol</Text>
      <TextInput
        style={styles.textInput} 
        keyboardType='numeric'
        onChangeText={text=>props.aoModificar(text)}
        
      />
    
        </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginBottom:10,
  },
  textInput:{
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 7,
    padding:15,
    fontSize: 20,
  },
  text:{
    color:'#000',
    fontWeight:'600',
    fontSize: 20,
    
  },
});