import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import BodyText from './src/elements/BodyText';
import MemoList from './src/components/MemoList';
import Appbar from './src/components/Appbar';
import CircleButton from './src/elements/CircleButton';

export default function App() {
  return (
    <Container>
      {/* <Text>Open up App.js to start working on your app!2</Text>
      <BodyText>Hi!</BodyText> */}
      {/* <StatusBar style="auto" /> */}
      <Appbar />
      <MemoList />
      <CircleButton>+</CircleButton>
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
