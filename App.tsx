import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { getUsers } from './src/api/api';
import { Header } from './src/components/header/header';
import MainStack from './src/screen_navigation/navigation'
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const [users, setUsers] = useState<any>(null)
  console.log( `Usseess______ffff ${users}`)

  useEffect(() => {
    // getUsers().then(users => setUsers(users.data))
  }, [])

  

  return (
    <View style={styles.container}>
      <NavigationContainer>
          <View style={styles.header}>
            <Header />
          </View>
          

          <View style={styles.main}>
          <Text>                                                                                                                                                     </Text>
            <MainStack />
          </View>
          <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'stretch',
    // justifyContent: 'center',
    marginTop: 40,
    // overflow: 'scroll'
  },
  main: {
    // alignItems: 'stretch'
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
