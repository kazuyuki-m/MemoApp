import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Alert, Text } from 'react-native';
import styled from 'styled-components';
import Appbar from '../components/Appbar';
import LogOutButton from '../components/LogOutButton';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import Button from '../components/Button';
import Loading from '../components/Loading';

const MemoListScreen = ({
  navigation,
}) => {
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    let unsubscribe = () => { }
    if (currentUser) {
      setIsLoading(true);
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      // eslint-disable-next-line max-len
      // const ref = db.collection(`users/XIonPkR68BOhojRcpRak5gbkLMH2/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot(snapshot => {
        const userMemos = [];
        snapshot.forEach(doc => {
          // console.log(doc.id, doc.data());
          const data = doc.data()
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
        setIsLoading(false);
      }, error => {
        // console.log(error);
        setIsLoading(false);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return unsubscribe;
  }, []);

  if (memos.length === 0) {
    return (
      <EmptyContainer>
        <Loading isLoading={isLoading} />
        <EmptyInner>
          <EmptyTitle>
            最初のメモを作成しよう
          </EmptyTitle>
          <EmptyButton
            label="作成する"
            onPress={() => { navigation.navigate('MemoCreateScreen') }}
          />
        </EmptyInner>
      </EmptyContainer>
    )
  }
  // console.log('配列データ', memos);
  return (
    <Container>
      <MemoList memos={memos} />
      <CircleButton name="plus" onPress={() => navigation.navigate('MemoCreateScreen')} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyInner = styled.View`
  justify-content: center;
  align-items: center;
`;

const EmptyTitle = styled.Text`
  font-size: 18;
  margin-bottom: 24;

`;

const EmptyButton = styled(Button).attrs({
  alignSelf: 'center',
})`
`;

export default MemoListScreen;
