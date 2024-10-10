import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Home() {
    const [value, setValue] = React.useState('');
 
    const onChange = event => {
      localStorage.setItem('myValueInLocalStorage', event.target.value);
   
      setValue(event.target.value);
    };

    // const [gravei, setGravei] = useState('')
    // async function setData(){
    //     await AsyncStorage.setItem("Var Gravada", gravei)
    // }
    // useEffect(()=>{
    //     setData()
    // }, [])
    
    // useEffect((
    //     lista_memorias = asyncStorage.getItem('lista_memorias')
        
    //     lista_memorias = asyncStorage.getItem('lista_memorias', [])
        
    //     ),[])


//  const criarMemoria ()=> {
//     memoria={
//         "titulo": 'jkpdj',
//     }
//     lista_memorias = asyncStorage.getItem('lista_memorias')
//  }
  return (
    <View style={styles.container}>
        <View>
        <Text>Memórias</Text> 
        <TextInput value={value} type="text" onChange={onChange} />
 
        <Text>{value}</Text>
        {/* <TextInput 
        value={gravei}
        placeholder='Digita ae'
        onChangeText={newGravei => setGravei(newGravei)} defaultValue={gravei}/> */}
        {/* <TextInput placeholder='Quando aconteceu?'></TextInput>
        <TextInput placeholder='O que aconteceu?'></TextInput>
        <TextInput placeholder='Descrição'></TextInput> */}
        {/* <Button style={styles.botao} title="Adicionar Memória" /> */}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white'
  },
});

//https://www.linkedin.com/pulse/local-storage-react-native-f%C3%A1cil-e-simples-daniel-rodrigues/
//https://josiaspereira.com.br/como-usar-localstorage-no-reactjs/