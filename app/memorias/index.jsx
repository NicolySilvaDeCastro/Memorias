import { View, Text, StyleSheet, FlatList, Pressable, ImageBackground } from 'react-native';  
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Essa é uma função assíncrona que tenta obter uma lista de memórias armazenadas no AsyncStorage
const getStoredMemories = async () => {
  try {
    const value = await AsyncStorage.getItem('lista_memorias');
    return value ? JSON.parse(value) : []; // o parse tranformará um arquivo json em string para que possa ser llido
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default function Home() {
  const [memorias, setMemorias] = useState([]);

  useEffect(() => {
    const fetchMemories = async () => { //a função fetchMemories pega as memórias e as exibe de forma assincrona
      const memories = await getStoredMemories();
      setMemorias(memories);
    };
    fetchMemories();
  }, []);

  return (
    <ImageBackground
    source={{ uri: 'https://i.pinimg.com/originals/cc/f3/40/ccf340c6ec1740f8f0ac4332843ca348.jpg' }} 
    style={styles.background}
    resizeMode="cover"
  >
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Minhas Memórias</Text>
      </View>
      <FlatList
        data={memorias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.memoryItem}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text>{item.data}</Text>
            <Text>{item.local}</Text>
            <Text>{item.desc}</Text>
            {item.imageUri ? <Image source={{ uri: item.imageUri }} style={styles.imagePreview} /> : null}
          </View>
        )}
      />
      <Link href="/adicionar">
        <Pressable style={styles.butao}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>
      </Link>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  header: {
    width: '100%',
    padding: 20,
    gap: 20,
    backgroundColor: 'black', 
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  memoryItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    width: '100%', 
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  butao: {
    backgroundColor: 'brown',
    justifyContent: 'center',
    width: '110%',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  
});




//RASCUNHOS:

// const tela = (() =>{
//   const [memorias, setMemorias] = useState([])
  
//   let result = getStoredMemories()
//   if (result){
//     setMemorias(JSON.parse(result)) //stringify transforma o json em string, parse
//   }
// },[])




// import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
// import { Link } from 'expo-router';
// import { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const getStoredMemories = async () => {
//   try {
//     const value = await AsyncStorage.getItem('lista_memorias');
//     return value ? JSON.parse(value) : []; // Retorna um array vazio se não houver memórias
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };


// const tela = (() =>{
//   const [memorias, setMemorias] = useState([])
  
//   let result = getStoredMemories()
//   if (result){
//     setMemorias(JSON.parse(result)) //stringify transforma o json em string, parse
//   }
// },[])

// export default function Home() {
//   return (
//     <View style={styles.container}>
//     <View>
//         <Text>Memórias</Text> 
//         <Link href="/adicionar">
//         <Button title="Adicionar Memória" />
//       </Link>
//       <FlatList
//       data= {memorias}
//       renderItem={({ item }) => (
//         <View>
//         <Image source ={{ uri: item.image }}/>
//         <Text>{item.titulo}</Text>
//         <Text>{item.data}</Text>
//         <Text>{item.local}</Text>
//         <Text>{item.desc}</Text>
//         </View>
//         )} 
//       />
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

