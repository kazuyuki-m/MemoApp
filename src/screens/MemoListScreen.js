import React, { useEffect, useState } from 'react';
import Appbar from '../components/Appbar';
import LogOutButton from '../components/LogOutButton';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';
import { Alert } from 'react-native';

const MemoListScreen = ({
  navigation,
}) => {
  const [memos, setMemos] = useState([]);
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
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      const unsubscribe = ref.onSnapshot(snapshot => {
        const userMemos = [];
        snapshot.forEach(doc => {
          console.log(doc.id, doc.data());
          const data = doc.data()
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, error => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return unsubscribe;
  }, []);
  console.log('配列データ', memos);
  return (
    <>
      <MemoList memos={memos} />
      <CircleButton name="plus" onPress={() => navigation.navigate('MemoCreateScreen')} />
    </>
  );
};

export default MemoListScreen;
