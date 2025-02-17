import { Text, View } from 'react-native';

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}
    >
      <Text
        style={{
          color: '#fff',
        }}
      >
        Tela de perfil
      </Text>
    </View>
  );
}
