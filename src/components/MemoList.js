import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const MemoList = ({
  navigation
}) => {
  return (
    <>
      <Container>
        <TouchableHighlight onPress={() => { navigation.navigate('MemoDetailScreen'); }}>
          <MemoListItem>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </MemoListItem>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { navigation.navigate('MemoDetailScreen'); }}>
          <MemoListItem>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </MemoListItem>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { navigation.navigate('MemoEditScreen'); }}>
          <MemoListItem>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </MemoListItem>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { navigation.navigate('LoginScreen'); }}>
          <MemoListItem>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </MemoListItem>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { navigation.navigate('SignupScreen'); }}>
          <MemoListItem>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </MemoListItem>
        </TouchableHighlight>
      </Container>
    </>
  );
};

export default MemoList;

const Container = styled.View`
  background-color: #fffdf6;
  width: 100%;
  flex: 1;
`;

const MemoListItem = styled.View`
  padding: 16px;
  /* padding-top: 16;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 16; */
  border-bottom-width: 1;
  border-bottom-color: #ddd;
  background-color: #fff;
`;

const MemoTitle = styled.Text`
  font-size: 18;
  margin-bottom: 4;
`;

const MemoDate = styled.Text`
  font-size: 12;
  color: #a2a2a2;
`;
