import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { getUsers } from './src/api/api';
import { Header } from './src/components/header/header';

export default function App() {
  const [users, setUsers] = useState<any>(null)
  console.log( `Usseess______ffff ${users}`)

  useEffect(() => {
    getUsers().then(users => setUsers(users.data))
  }, [])
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.main}>
        <Text>Open up App.tsx to start working on your app</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
  },
  main: {
    alignSelf: 'stretch'
  }, 
  header: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    alignSelf: 'stretch'
  },
  users: {
    marginBottom: 30,
    marginTop: 30
  },
});
