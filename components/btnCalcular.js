import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default props=>{
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.btn}
        onPress={props.aoPressionar}
      >
        <Text
        style={styles.txtBtn}
        >
          Calcular</Text>
      </TouchableHighlight>  
    
    </View>
  );
}



export const styles = StyleSheet.create({
  container: {
    marginBottom:10,
  },
  btn:{
    backgroundColor:'#800',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:7,
    padding:15,
  },
  txtBtn:{
    color:'#fff',
    textTransform: 'uppercase',
    fontSize: 20,
  }
});