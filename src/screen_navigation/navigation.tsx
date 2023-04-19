import React from 'react';
import {NavigationContainer, useLinkProps, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../components/profile/profile';
import { Groops } from '../components/groops/groops';
import { StyleSheet, Text, View } from 'react-native';
import { Users } from '../components/users/users';
import { Chat } from '../components/chat/chat';
import Settings from '../components/settings/settings';

const Stack = createNativeStackNavigator();

export default function MyStack() {

  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
        }}
        initialRouteName="Profile">
        <Stack.Screen
        name="Profile"
        // @ts-ignore
        component={Profile}
          // component={() => {
          //   return <Profile authId={props.authId} authProfile={props.authProfile} />
          // }}
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
          return <Settings />
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

