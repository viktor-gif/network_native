import React from 'react';
import {NavigationContainer, useLinkProps, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Profile } from '../components/profile/profile';
import { Groops } from '../components/groops/groops';
import { StyleSheet, Text, View } from 'react-native';
import { Users } from '../components/users/users';
import { Chat } from '../components/chat/chat';
import { Settings } from '../components/settings/settings';
import { AuthDataType } from '../ts/auth';
import { ProfileDataType } from '../ts/profile';

type PropsType = {
  setAuth: (isAuth: boolean) => void
  authId: string | undefined
  authProfile: ProfileDataType | null
  appError: string | null

  setAuthData: (authData: AuthDataType | null) => void
  setAuthProfile: (profileData: ProfileDataType | null) => void
  setAppError: (error: string | null) => void
}


const Stack = createNativeStackNavigator();

export default function MyStack(props: PropsType) {
  console.log('Profile_____: ' + Profile)

  console.log('authId from Mystack: ' + props.authId)

  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
        }}
        initialRouteName="Profile">
        <Stack.Screen
        name="Profile"
        component={Profile}
          // component={() => {
          //   return <Profile authId={props.authId} authProfile={props.authProfile} />
          // }}
        initialParams={{test: 'test__+++', authId: props.authId, authProfile: props.authProfile}}
        />
        <Stack.Screen
          name="Users"
          component={Users}
        />
        <Stack.Screen
          name="Groops"
          component={Groops}
          // options={{title: 'Groops'}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
        />
      <Stack.Screen
        name="Settings"
        component={() => {
          return <Settings setAuth={props.setAuth} appError={props.appError} setAppError={props.setAppError}
            setAuthData={props.setAuthData} setAuthProfile={props.setAuthProfile}
             />
        }}
          // initialParams={{setAuth: props.setAuth, appError: props.appError, setAppError: props.setAppError}}
        />
      </Stack.Navigator>
      
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'stretch'
  },
  screen: {

  }
})

