import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import BodyText from './src/elements/BodyText';

export default function App() {
  return (
    <Container>
      {/* <Text>Open up App.js to start working on your app!2</Text>
      <BodyText>Hi!</BodyText> */}
      {/* <StatusBar style="auto" /> */}
      <Appbar>
        <AppbarTitle>MEMOT</AppbarTitle>
      </Appbar>
      <MemoList>
        <MemoListItem>
          <MemoTitle>講座のアイテム</MemoTitle>
          <MemoDate>2017/10/10</MemoDate>
        </MemoListItem>

        <MemoListItem>
          <MemoTitle>講座のアイテム</MemoTitle>
          <MemoDate>2017/10/10</MemoDate>
        </MemoListItem>

        <MemoListItem>
          <MemoTitle>講座のアイテム</MemoTitle>
          <MemoDate>2017/10/10</MemoDate>
        </MemoListItem>

        <MemoListItem>
          <MemoTitle>講座のアイテム</MemoTitle>
          <MemoDate>2017/10/10</MemoDate>
        </MemoListItem>

        <MemoListItem>
          <MemoTitle>講座のアイテム</MemoTitle>
          <MemoDate>2017/10/10</MemoDate>
        </MemoListItem>
      </MemoList>
      <MemoAddButton><MemoAddButtonTitle>+</MemoAddButtonTitle></MemoAddButton>
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

const Appbar = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70;
  padding-top: 30px;
  background-color: #265366;
  justify-content: center;
  align-items: center;
  /* shadow-color: #000;
  shadow-offset: {width:0, height:0};
  shadow-opacity: 0.5;
  shadow-radius: 23; */
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const AppbarTitle = styled.Text`
  color: #fff;
  font-size: 18;
`;

const MemoList = styled.View`
  /* background-color: #eee; */
  width: 100%;
  flex: 1;
`;

const MemoListItem = styled.View`
  padding: 16px;
  /* padding-top: 16;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 16; */
  border-bottom-width: 1;
  border-bottom-color: #ddd;
  background-color: #fff;
`;

const MemoTitle = styled.Text`
  font-size: 18;
  margin-bottom: 4;
`;

const MemoDate = styled.Text`
  font-size: 12;
  color: #a2a2a2;
`;

const MemoAddButton = styled.View`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  background-color: #e31676;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
`;

const MemoAddButtonTitle = styled.Text`
  font-size: 32px;
  /* line-height: 24px; */
  color: #fff;
`;
