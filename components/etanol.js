import React from 'react';
import {StyleSheet, Text, TextInput, View } from 'react-native';

export default props=>{
  return (
    <View style={styles.container}>
      <Text>Digite o preço do etanol</Text>
      <TextInput
        style={styles.textInput} 
        keyboardType='numeric'
        
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

  },
});