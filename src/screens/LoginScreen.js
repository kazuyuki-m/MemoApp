import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styled from 'styled-components';

const LoginScreen = () => {
  return (
    <Container>
      <Title>ログイン</Title>
      <Line value="Email Address" />
      <Line value="Password" />
      <SubmitButton onPress={() => { }}><ButtonTitle>ログインする</ButtonTitle></SubmitButton>
      {/* <TouchableHighlight>送信</TouchableHighlight> */}
    </Container>
  );
};

export default LoginScreen;

const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 28;
  align-self: center;
  margin-bottom: 24;
`;

const Line = styled.TextInput`
  background-color: #eee;
  height: 48;
  margin-bottom: 16;
  border-width: 1;
  border-color: #ddd;
  padding: 8px;
`;

const SubmitButton = styled.TouchableHighlight`
  background-color: #e31676;
  height: 48;
  border-radius: 4;
  justify-content: center;
  align-items: center;
  width: 70%;
  align-self: center;
`;

const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 18;
`;
