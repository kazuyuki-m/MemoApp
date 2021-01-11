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
        <MemoBody>
          <MemoBodyInner>
            <MemoText>
              {memo && memo.bodyText}
            </MemoText>
          </MemoBodyInner>
        </MemoBody>
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
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 4px;
`;

const MemoHeaderDate = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #fff;
`;

const MemoBody = styled.ScrollView`
background-color: #fff;
flex: 1;
`;

const MemoBodyInner = styled.View`
  padding-top: 32px;
  padding-bottom: 80px;
  padding-horizontal: 27px;
`;

const MemoText = styled.Text`
  font-size: 16px;
  line-height: 24px;
`;

const EditButton = styled(CircleButton)`
  /* top: 120px; */
  /* bottom: 2000px; */
  /* background-color: #fff; */
`;
