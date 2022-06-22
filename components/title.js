import React from 'react';
import {StyleSheet, View, Text } from 'react-native';


export default function title(){
  return (
    
     <View >        
        <Text style={styles.title}>
          Cálculo de Combustível  
        </Text>
      </View>
        
  );
}

const styles = StyleSheet.create({
  title:{
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 8,
    border:0,
    borderRadius: 6,
    backgroundColor: "#800",
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300"
  },

})