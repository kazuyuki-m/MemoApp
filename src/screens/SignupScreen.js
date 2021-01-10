import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';
import firebase from 'firebase';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlePress = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const { user } = userCredential;
        // console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoListScreen' }],
        })
      })
      .catch(error=>{
        // console.log(error.code, error.message);
        Alert.alert(error.code);
      })
  }
  return (
    <Container>
      <Title>
        メンバー募集
      </Title>
      <Input
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email Address"
        textContentType="emailAddress"
      />
      <Input
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <Button onPress={handlePress}>
        <ButtonTitle>送信する</ButtonTitle>
      </Button>
      <Footer>
        <FooterText>Already registerd?</FooterText>
        <FooterTouchableOpacity onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'LogInScreen' }]
          });
        }}>
          <FooterLink>Log In</FooterLink>
        </FooterTouchableOpacity>
      </Footer>
    </Container >
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

const Footer = styled.View`
`;

const FooterText = styled.Text`
`;

const FooterTouchableOpacity = styled.TouchableOpacity`
`;

const FooterLink = styled.Text`
`;

export default SignUpScreen;
