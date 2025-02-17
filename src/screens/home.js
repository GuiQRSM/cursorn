import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de início</Text>
      <TouchableOpacity
        style={{
          borderRadius: 1,
          borderColor: '#999',
          marginVertical: 8,
          padding: 4,
          borderWidth: 1,
        }}
        activeOpacity={0.6}
      >
        <Button></Button>
        <Text style={styles.textButton}>Salvar</Text>
      </TouchableOpacity>
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
  textButton: {
    color: '#fff',
  },
});
