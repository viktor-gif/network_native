import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { getUsers } from './src/api/api';

export default function App() {
  const [users, setUsers] = useState<any>(null)
  console.log( `Usseess______ffff ${users}`)

  useEffect(() => {
    getUsers().then(users => setUsers(users.data))
  }, [])
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Hello placeholder!!!'
        keyboardType='url'
        maxLength={4}
        multiline
      />
      <Text>Open up App.tsx to start working on your app</Text>
      <StatusBar style="auto" />
      {
        users && users.map((u: any) => {     
          return (
            <View style={styles.users} key={u._id}>
              <Text>Full Name: {u.fullName}</Text>
              <Text>Id: {u._id}</Text>
              <Text>City: {u.location.city}</Text>
              <Text>Createe: {u.created}</Text>
            </View>
          )
        })
      }
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
  users: {
    marginBottom: 30,
    marginTop: 30
  },
});
