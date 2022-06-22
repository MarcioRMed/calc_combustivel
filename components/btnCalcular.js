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
    marginBottom:15,
    alignItems: 'center',
  },
  btn:{
    width:'50%',
    backgroundColor:'#800',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:20,
    padding:15,
  },
  txtBtn:{
    color:'#fff',
    textTransform: 'uppercase',
    fontSize: 20,
  }
});