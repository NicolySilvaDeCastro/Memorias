import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

export default function Add() {
  // isso define os estados das variáveis
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [desc, setDesc] = useState('');
  const [imageUri, setImageUri] = useState('');

  //essa parte irá selecionar a imagem utilizando o image picker
  const selecionarImagem = async () => {
  //permissão para acessar a galeria
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('É necessário permitir o acesso à galeria!');
      return;
    }

    // Abrir a galeria
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setImageUri(pickerResult.uri);
  };

  //"basicamente" salva as memórias
  const salvarMemoria = async () => {
    const novaMemoria = { titulo, data, local, desc, imageUri };
    try {
      const listaMemorias = await AsyncStorage.getItem('lista_memorias'); //recupera memórias na asyncStorage
      const memoriaAtual = listaMemorias ? JSON.parse(listaMemorias) : []; // Verifica se listaMemorias contém dados, se houver dados transforma o json em string para que seja lido
      memoriaAtual.push(novaMemoria);  //Adiciona o objeto novaMemoria ao array memoriaAtual
      await AsyncStorage.setItem('lista_memorias', JSON.stringify(memoriaAtual));  //Utiliza AsyncStorage.setItem para armazenar a lista
      alert('Memória adicionada com sucesso!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Memória</Text>
      <TextInput placeholder='Título' onChangeText={setTitulo} style={styles.input} />
      <TextInput placeholder='Data' onChangeText={setData} style={styles.input} />
      <TextInput placeholder='Local' onChangeText={setLocal} style={styles.input} />
      <TextInput placeholder='Descrição' onChangeText={setDesc} style={styles.input} />

      <Pressable onPress={selecionarImagem} style={styles.button}>
        <Text style={styles.buttonText}>Selecionar Imagem</Text>
      </Pressable>

      {imageUri ? <Image source={{ uri: imageUri }} style={styles.imagePreview} /> : null}

      <Pressable onPress={salvarMemoria} style={styles.button}>
        <Text style={styles.buttonText}>Salvar Memória</Text>
      </Pressable>

      <Link href="/memorias">
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#c99066',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#eacabe',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
  },
});



//RASCUNHOS:
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

//https://www.linkedin.com/pulse/local-storage-react-native-f%C3%A1cil-e-simples-daniel-rodrigues/
//https://josiaspereira.com.br/como-usar-localstorage-no-reactjs/

// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';




// export default function Add() {
//     const [value, setValue] = React.useState('');
 
//     const onChange = event => {
//       localStorage.setItem('myValueInLocalStorage', event.target.value);
   
//       setValue(event.target.value);
//     };


//   return (
//     <View style={styles.container}>
//         <View>
//         <Text>Memórias</Text> 
//         <View>
//         <TextInput placeholder='Título' type="text" onChange={onChange} />
//         <TextInput placeholder='Data' type="text" onChange={onChange} />
//         <TextInput placeholder='Local' type="text" onChange={onChange} />
//         <TextInput placeholder='Descrição' type="text" onChange={onChange} />
//         </View>

//     </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white'
//   },
//   botao: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//     color: 'white'
//   },
// });
