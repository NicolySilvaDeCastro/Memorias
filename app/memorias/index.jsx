import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
    <View>
        <Text>Memórias</Text> 
        <Link href="/adicionar">
        <Button style={styles.botao} title="Adicionar Memória" />
      </Link>
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