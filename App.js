import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Gasolina from './components/gasolina';
import Etanol from './components/etanol'
import BtnCalcular from './components/btnCalcular';
import Resultado from './components/resultado'
import ImagemResultado from './components/imgResultado.js'
import Footer from './components/footer'
import Title from './components/title'

export default function App() {

  const [gasolina,setGasolina]=useState(0)
  const [etanol,setEtanol]=useState(0)
  const [resultado,setResultado]=useState('')

  // informações do desenvolvedor
  console.log('inputGasolina ', gasolina)
  console.log('inputEtanol ', etanol)
  console.log('resultado' , resultado)


  const calcular=()=>{
    // --- Validações ---
    if(!gasolina){
      alert('Informe o preço da Gasolina')
    return
    }

    if(!etanol){
      alert('Informe o preço do Etanol')
      return
    }

    // --- Regra de negócio ---
    let resCombustivel
    let calcPorcento=((etanol/gasolina)*100).toFixed(1)
    
    if(calcPorcento > 70){
      resCombustivel='Gasolina'
    }else{
      resCombustivel='Etanol'
    }
    alert('O Etanol está custando ' + calcPorcento + '% menos do que o preço da Gasolina. Portanto é melhor abastecer ' + resCombustivel)

    setResultado(resCombustivel)
  
  }

  const limpar=()=>{
    setResultado('')
  }

  const setarGasolina=(valor)=>{
    limpar()
    setGasolina(valor)
  }

  const setarEtanol=(valor)=>{
    limpar()
    setEtanol(valor)
  }

//--- Renderização ---
  return (
    <SafeAreaView style={styles.container}>
      <Title/>

      <Gasolina aoModificar={setarGasolina} />
      
      <Etanol aoModificar={setarEtanol} />
      
      <BtnCalcular aoPressionar={calcular}/>
      
      <Resultado resultado={resultado}/>

      <ImagemResultado combustivel={resultado.charAt(0)}/> 
      

      <Footer/>
      
    </SafeAreaView>  
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    backgroundColor: '#ccc',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
});


// resultado.charAt(0) -> O método charAt() retorna o caractere especificado a partir de uma string.