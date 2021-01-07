import React, { useState } from 'react';
import styled from 'styled-components/native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

const MemoCreateScreen = ({ navigation }) => {
  const [bodyText, setBodyText] = useState('');
  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then(docRef => {
        console.log('Created!', docRef.id);
        navigation.goBack();
      })
      .catch(error => {
        console.log('Error!', error);
      });
  }
  // const handleChangeText = () => {

  // }
  return (
    <Container>
      <InputContainer>
        <Input
          value={bodyText}
          multiline
          onChangeText={text => setBodyText(text)}
          autoFocus
        />
      </InputContainer>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const InputContainer = styled.View`
  background-color: #ffffff;
  flex: 1;
  padding-top: 32;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 16px;
`;

const Input = styled.TextInput`
  font-size: 16;
`;

export default MemoCreateScreen;
