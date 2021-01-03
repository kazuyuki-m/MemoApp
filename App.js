import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import Appbar from './src/components/Appbar';
import BodyText from './src/elements/BodyText';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';

export default function App() {
  return (
    <Container>
      <Appbar />
      {/* <Text>Open up App.js to start working on your app!2</Text>
      <BodyText>Hi!</BodyText> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Appbar />
      <MemoList />
      <CircleButton>+</CircleButton> */}

      {/* <MemoListScreen /> */}
      {/* <MemoDetailScreen /> */}
      <MemoEditScreen />
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    background-color: #fffdf6;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
`;
