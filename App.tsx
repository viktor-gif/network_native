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
import { AuthDataType } from './src/ts/auth';
import { ProfileDataType } from './src/ts/profile';
import { profileAPI } from './src/api/profile';

export default function App() {
  const [isAuth, setAuth] = useState<any>(false)
  const [authData, setAuthData] = useState<AuthDataType | null>(null)
  const [authProfile, setAuthProfile] = useState<ProfileDataType | null>(null)
  const [appError, setAppError] = useState<string | null>(null)

  console.log('AUTHDATA_____---__-_--- ' + authData?.id)

  useEffect(() => {
    
    loginAPI.me().then((res) => {
      if (res.data.resultCode === 0) {
        setAuthData(res.data.data)
        setAuth(true)
        appError && setAppError(null)
      }
    }).catch(err => {
      if (err.response.status === 403) {
        setAppError(err.response.data.message || 'Ввійдіть, будь ласка, в аккаунт')
      } else {
        setAppError('Помилка сервера')
      }
    })
    
  }, [])

  useEffect(() => {
    
    authData && profileAPI.getProfile(authData.id).then(res => {
      setAuthProfile(res.data)
    })

  }, [authData])


  console.log('-----auth data______: ' + (authData?.id || null))
  

  return (
    <View style={styles.container}>
      {isAuth
      ? <NavigationContainer>
          <View style={styles.header}>
            <Header setAuth={setAuth} />
          </View>
          

          <View style={styles.main}>
          <Text>                                                                                                                                                     </Text>
            <MainStack setAuth={setAuth} authId={authData?.id} authProfile={authProfile} />
          </View>
          <StatusBar style="auto" />
        </NavigationContainer>

        : <Login setAuth={setAuth} appError={appError} setAppError={setAppError} />

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
