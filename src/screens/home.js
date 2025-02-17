import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';

export default function Home() {
  const saveOnclick = () => {
    Alert.alert('Salvar ', 'Salvando tela de Início');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de início</Text>
      <Button handleSave={saveOnclick} color={'#e14b08'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
