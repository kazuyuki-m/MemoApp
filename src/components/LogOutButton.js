import React from 'react';
import styled from 'styled-components/native';
import firebase from 'firebase';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogOutButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogInScreen' }],
        });
      })
      .catch(error => {
        Alert.alert('ログアウトに失敗しました');
      })
  }
  return (
    <Container onPress={handlePress}>
      <Label>ログアウト</Label>
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  padding-horizontal: 12;
  padding-vertical: 4;
`;

const Label = styled.Text`
  font-size: 14;
  color: rgba(255, 255, 255, 0.7);
`;

export default LogOutButton;
