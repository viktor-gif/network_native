import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      
      <Text>abra cadabrahhhh</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
});
