import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import Appbar from './src/components/Appbar';
import BodyText from './src/elements/BodyText';
import LogInScreen from './src/screens/LogInScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { firebaseConfig } from './env';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const Stack = createStackNavigator();
  const _options = {
    title: 'Memot',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
      fontWeight: 'bold',
    },
    headerBackTitleVisible: false,
  };
  const options = {
    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogInScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Memo App',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen
          name="MemoDetailScreen"
          component={MemoDetailScreen}
        // options={options}
        />
        <Stack.Screen
          name="MemoEditScreen"
          component={MemoEditScreen}
        // options={options}
        />
        <Stack.Screen
          name="MemoListScreen"
          component={MemoListScreen}
        // options={options}
        />
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={options}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={options}
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
    //   {/* <LogInScreen /> */}
    //   <SignUpScreen />
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
