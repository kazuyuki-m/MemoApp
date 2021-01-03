import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Appbar from './src/components/Appbar';
import BodyText from './src/elements/BodyText';
import LoginScreen from './src/screens/LoginScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import SignupScreen from './src/screens/SignupScreen';

export default function App() {
  const Stack = createStackNavigator();
  const options = {
    title: 'Memot',
    headerStyle: {
      backgroundColor: '#265366',
    },
    // headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
      fontWeight: 'bold',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="MemoDetailScreen"
          component={MemoDetailScreen}
          options={options}
        />
        <Stack.Screen
          name="MemoEditScreen"
          component={MemoEditScreen}
          options={options}
        />
        <Stack.Screen
          name="Home"
          component={MemoListScreen}
          options={options}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <Container>
    //   <Appbar />
    //   {/* <Text>Open up App.js to start working on your app!2</Text>
    //   <BodyText>Hi!</BodyText> */}
    //   {/* <StatusBar style="auto" /> */}
    //   {/* <Appbar />
    //   <MemoList />
    //   <CircleButton>+</CircleButton> */}

    //   {/* <MemoListScreen /> */}
    //   {/* <MemoDetailScreen /> */}
    //   {/* <MemoEditScreen /> */}
    //   {/* <LoginScreen /> */}
    //   <SignupScreen />
    // </Container>
  );
}

const Container = styled.View`
    flex: 1;
    background-color: #fffdf6;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
`;
