import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Profile } from '../components/profile/profile';
import { Groops } from '../components/groops/groops';
import { StyleSheet, Text, View } from 'react-native';
import { Users } from '../components/users/users';
import { Chat } from '../components/chat/chat';
import { Settings } from '../components/settings/settings';

type PropsType = {
    setAuth: (isAuth: boolean) => void
}

const Stack = createNativeStackNavigator();

export default function MyStack(props: PropsType) {
  console.log('Profile_____: ' + Profile)

  

  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
        }}
        initialRouteName="Profile">
        <Stack.Screen
          name="Profile"
          component={Profile}
          // options={{title: 'Profile'}}
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
          component={Settings}
          initialParams={{setAuth: props.setAuth}}
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

