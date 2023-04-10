import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { getUsers } from './src/api/api';
import { Header } from './src/components/header/header';
import MainStack from './src/screen_navigation/navigation'
import {NavigationContainer} from '@react-navigation/native';
import { loginAPI } from './src/api/login';
import { Login } from './src/components/login/login';

export default function App() {
  const [isAuth, setAuth] = useState<any>(false)
  console.log("isAuth: " + isAuth)

  useEffect(() => {
    
      loginAPI.me().then((res) => {
        if (res.data) {
          setAuth(true)
        }
      }).catch(err => {
        console.log('_______err_________')
        if (err) {
          console.log('ERRPR')
        }
      
      })
    
      
    

  }, [])

  

  return (
    <View style={styles.container}>
      {isAuth
      ? <NavigationContainer>
          <View style={styles.header}>
            <Header setAuth={setAuth} />
          </View>
          

          <View style={styles.main}>
          <Text>                                                                                                                                                     </Text>
            <MainStack setAuth={setAuth} />
          </View>
          <StatusBar style="auto" />
        </NavigationContainer>

        : <Login setAuth={setAuth} />

        }
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
