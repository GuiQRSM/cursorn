import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        width: '70%',
        height: 40,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: '#999',
        marginVertical: 8,
        padding: 4,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={props.handleSave}
      activeOpacity={0.6}
    >
      <Text style={styles.textButton}>Salvar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textButton: {
    color: '#fff',
  },
});
