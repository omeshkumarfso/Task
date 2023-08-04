import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Post from '../Home/Post';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  const isAuthenticate = useSelector(state => state.auth.isAuthenticate)
  return (
    <NavigationContainer>
      <Stack.Navigator  >

        {isAuthenticate ? (
          <>
            <Stack.Screen
              name='home'
              component={Home}
            />
            <Stack.Screen
              name='post'
              component={Post}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name='login'
              component={Login}
            />
          </>

        )

        }

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default StackNavigation