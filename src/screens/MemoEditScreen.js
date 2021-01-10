import React, { useState } from 'react';
import styled from 'styled-components/native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';
import { Alert } from 'react-native';

const MemoEditScreen = ({
  navigation,
  route: { params: {
    id,
    bodyText
  }
  }
}) => {
  // const {id, bodyText } = params
  const [body, setBody] = useState(bodyText)
  const handlePress = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch(error => {
          // console.log(error.code);
          Alert.alert(error.code);
        });
    }
  }

  return (
    <Container>
      <MemoEditInput>
        <MemoEditInputText
          value={body}
          onChangeText={text => setBody(text)}
        />
      </MemoEditInput>
      <CircleButton name="check" onPress={handlePress} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const MemoEditInput = styled.View`
  background-color: #fff;
  flex: 1;
  /* justify-content: flex-start; */
  padding-top: 32;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 16;

`;

const MemoEditInputText = styled.TextInput.attrs({
  multiline: true,
})`
  font-size: 16;
`;

export default MemoEditScreen;
