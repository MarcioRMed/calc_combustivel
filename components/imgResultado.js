import React from 'react';
import {StyleSheet, Image, View } from 'react-native';

export default props=>{
  return (
    <View style={styles.container}>
      
      {

        props.combustivel == '' ?        
          <Image
            source={require('../assets/bomba.png')}
            style={styles.bomba}
          />
        :
        props.combustivel == 'G' ?
          <Image
          source={require('../assets/bombaG.png')}
          style={styles.bomba}
          />
        :

          <Image
          source={require('../assets/bombaE.png')}
          style={styles.bomba}
          />

      
      
      
      }
      
      
      
      
      


      
    </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center',
  },
  bomba:{
    width:'100%',
    height:200,
    resizeMode:'contain',
    marginLeft:140,

  },
  
});