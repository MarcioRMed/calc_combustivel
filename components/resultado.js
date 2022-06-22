import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default props=>{
  return (
    <View style={styles.container}>
      <Text>Melhor combustível:</Text>
    </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    marginBottom:10,
  },
  
});