import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';

export default function Profile() {
  const saveOnclick = () => {
    Alert.alert('Salvar 2', 'Salvando tela de perfil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de perfil</Text>
      <Button handleSave={saveOnclick} color={'#671a2e'} />
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
