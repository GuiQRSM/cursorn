import { StyleSheet } from 'react-native';
import Profile from './src/screens/profile';

export default function App() {
  return <Profile />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
