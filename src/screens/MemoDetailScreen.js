import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';
import { dateToString } from '../utils';

const MemoDetailScreen = ({
  navigation,
  route: { params: { id } }
}) => {
  // console.log(id)
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => { }
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot(doc => {
        // console.log(doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe
  }, [])

  return (
    <>
      <Container>

        <MemoHeader>
          <View>
            <MemoHeaderTitle>{memo && memo.bodyText}</MemoHeaderTitle>
            <MemoHeaderDate>{memo && dateToString(memo.updatedAt)}</MemoHeaderDate>
          </View>
        </MemoHeader>
        <MemoContent>
          <MemoContentBody>
            {memo && memo.bodyText}
          </MemoContentBody>
        </MemoContent>
        <EditButton
          layout
          color
          name="pencil"
          onPress={() => {
            navigation.navigate(
              'MemoEditScreen',
              {
                id: memo.id,
                bodyText: memo.bodyText,
              }
            )
          }} />
      </Container>
    </>
  );
};

export default MemoDetailScreen;

const Container = styled.View`
  flex:1;
  width:100%;
`;

const MemoHeader = styled.View`
  height: 100;
  background-color: #17313C;
  justify-content: center;
  padding: 10px;
`;

const MemoHeaderTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 20;
  font-weight: bold;
  color: #fff;
  margin-bottom: 4;
`;

const MemoHeaderDate = styled.Text`
  font-size: 12;
  color: #fff;
`;

const MemoContent = styled.View`
padding-top: 30;
padding-left: 20;
padding-right: 20;
padding-bottom: 20;
background-color: #fff;
flex: 1;
`;

const MemoContentBody = styled.Text`
`;

const EditButton = styled(CircleButton)`
  /* top: 120px; */
  /* bottom: 2000px; */
  /* background-color: #fff; */
`;
