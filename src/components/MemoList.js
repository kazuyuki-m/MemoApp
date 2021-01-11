import React, { useEffect } from 'react';
// eslint-disable-next-line object-curly-newline
import { View, Text, TouchableHighlight, TouchableOpacity, Alert, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import firebase from 'firebase';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';
import LogOutButton from './LogOutButton';
import { dateToString } from '../utils';

const Icon = createIconSet({
  delete: '\uf1f8',
}, 'FontAwesome');

const MemoList = ({ memos }) => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    FontAwesome: fontAwesome,
  });

  // eslint-disable-next-line arrow-parens
  const deleteMemo = id => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
    Alert.alert(`${id}のメモを削除します`, 'よろしいですか？', [
      {
        text: 'キャンセル',
        onPress: () => { },
      },
      {
        text: '削除する',
        style: 'destructive',
        onPress: () => {
          ref.delete().catch(() => {
            Alert.alert('削除に失敗しました')
          })
        }
      },
    ])
  }

  const RightIcon = ({
    // fontsLoaded,
    id
  }) => {
    return (
      fontsLoaded
        ? (
          <Right onPress={() => {
            // Alert.alert('Are you sure?');
            deleteMemo(id);
          }}>
            <DeleteIcon name="delete" />
          </Right>
        ) : (
          <AppLoading />
        )
    );
  }

  const renderItem = ({ item, index }) => {
    return (
      <MemoListItem
        onPress={() => { navigation.navigate('MemoDetailScreen', { id: item.id }) }}
      // key={index}
      >
        <MemoInner>
          <MemoTitle>{item.bodyText}</MemoTitle>
          <MemoDate>{dateToString(item.updatedAt)}</MemoDate>
        </MemoInner>
        <RightIcon
          // fontsLoaded={fontsLoaded}
          id={item.id}
        />
      </MemoListItem>
    );
  }

  return (
    <Container>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={item => { return item.id }}
      />
      {/* {memos.map((memo, index) => {
        return (
          <MemoListItem
            onPress={() => { navigation.navigate('MemoDetailScreen'); }}
            key={index}
          >
            <MemoInner>
              <MemoTitle>{memo.bodyText}</MemoTitle>
              <MemoDate>{String(memo.updatedAt)}</MemoDate>
            </MemoInner>
            <RightIcon fontsLoaded={fontsLoaded} />
          </MemoListItem>
        );
      })} */}
    </Container>
  );
};
// <MemoListItem onPress={() => { navigation.navigate('MemoDetailScreen'); }}>
//   <MemoInner>
//     <MemoTitle>講座のアイテム</MemoTitle>
//     <MemoDate>2017/10/10</MemoDate>
//   </MemoInner>
// </MemoListItem>

// <MemoListItem onPress={() => { navigation.navigate('MemoEditScreen'); }}>
//   <MemoInner>
//     <MemoTitle>講座のアイテム</MemoTitle>
//     <MemoDate>2017/10/10</MemoDate>
//   </MemoInner>
// </MemoListItem>

// <MemoListItem onPress={() => { navigation.navigate('LoginScreen'); }}>
//   <MemoInner>
//     <MemoTitle>講座のアイテム</MemoTitle>
//     <MemoDate>2017/10/10</MemoDate>
//   </MemoInner>
// </MemoListItem>

// <MemoListItem onPress={() => { navigation.navigate('SignUpScreen'); }}>
//   <MemoInner>
//     <MemoTitle>講座のアイテム</MemoTitle>
//     <MemoDate>2017/10/10</MemoDate>
//   </MemoInner>
// </MemoListItem>

export default MemoList;

const Container = styled.View`
  background-color: #fffdf6;
  width: 100%;
  flex: 1;
`;

const MemoListItem = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 16;
  padding-horizontal: 19;
  /* padding-top: 16;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 16; */
  border-bottom-width: 1;
  border-bottom-color: #ddd;
  background-color: #fff;
`;

const MemoInner = styled.View`
  flex: 1;
`;

const MemoTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18;
  margin-bottom: 4;
`;

const MemoDate = styled.Text`
  font-size: 12px;
  color: #a2a2a2;
`;

const DeleteIcon = styled(Icon)`
  font-size: 24px;
  color: #ddd;
  font-family: 'FontAwesome';
`;

const Right = styled.TouchableOpacity`
  padding: 8px;
`;
