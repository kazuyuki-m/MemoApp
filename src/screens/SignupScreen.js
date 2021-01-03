import React from 'react';
import styled from 'styled-components';

const SignupScreen = () => {
  return (
    <Container>
      <Title>
        メンバー募集
      </Title>
      <Input value="Email Address" />
      <Input value="Password" />
      <Button onPress={() => { }}>
        <ButtonTitle>送信する</ButtonTitle>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 20;
  align-self: center;
  margin-bottom: 24;
`;

const Input = styled.TextInput`
  background-color: #eee;
  height: 48;
  margin-bottom: 16;
  border-width: 1;
  border-color: #ddd;
  padding: 8px;
`;

const Button = styled.TouchableHighlight.attrs(() => ({
  underlayColor: '#c70f66',
}))`
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

export default SignupScreen;
