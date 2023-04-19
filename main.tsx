import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { getUsers } from './src/api/api';
import { Header } from './src/components/header/header';
import MainStack from './src/screen_navigation/navigation'
import {NavigationContainer} from '@react-navigation/native';
import { authAPI } from './src/api/auth';
import Login from './src/components/login/login';
import { AuthDataType } from './src/ts/auth';
import { ProfileDataType } from './src/ts/profile';
import { profileAPI } from './src/api/profile';
import { authMe } from './src/redux/authReducer';
import { connect } from 'react-redux';
import { AppStateType } from './src/redux/redux-store';

type PropsType = {
  isAuth: boolean
  authData: AuthDataType | null
  authProfileData: ProfileDataType | null

  authMe: () => void
}

function Main(props: any) {

  useEffect(() => {
    
    // authAPI.me().then((res) => {
    //   if (res.data.resultCode === 0) {
    //     setAuthData(res.data.data)
    //     setAuth(true)
    //     appError && setAppError(null)
    //   }
    // }).catch(err => {
    //   if (err.response.status === 403) {
    //     setAppError(err.response.data.message || 'Ввійдіть, будь ласка, в аккаунт')
    //   } else {
    //     setAppError('Помилка сервера')
    //   }
    // })
    props.authMe()
    
  }, [props.isAuth])

  return (
    <View style={styles.container}>
      {props.isAuth
      ? <NavigationContainer>
          <View style={styles.header}>
            <Header setAuth={props.setAuth} />
          </View>
          

          <View style={styles.main}>
          <Text>                                                                                                                                                     </Text>
            <MainStack  />
          </View>
          <StatusBar style="auto" />
        </NavigationContainer>

        : <Login />

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

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    authData: state.auth.authData,
    authProfileData: state.auth.authProfileData
})

export default connect(mapStateToProps, {
  //getAuthData: authActions.setAuthData
  authMe
})(Main);