import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const Icon = createIconSet({
  delete: '\uf1f8',
}, 'FontAwesome');

const RightIcon = ({ fontsLoaded }) => {
  return (
    fontsLoaded
      ? (
        <Right onPress={() => { Alert.alert('Are you sure?'); }}>
          <DeleteIcon name="delete" />
        </Right>
      ) : (
        <AppLoading />
      )
  );
}

const MemoList = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    FontAwesome: fontAwesome,
  });
  return (
    <>
      <Container>
        <MemoListItem onPress={() => { navigation.navigate('MemoDetailScreen'); }}>
          <View>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </View>
          <RightIcon fontsLoaded={fontsLoaded} />
        </MemoListItem>

        <MemoListItem onPress={() => { navigation.navigate('MemoDetailScreen'); }}>
          <View>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </View>
        </MemoListItem>

        <MemoListItem onPress={() => { navigation.navigate('MemoEditScreen'); }}>
          <View>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </View>
        </MemoListItem>

        <MemoListItem onPress={() => { navigation.navigate('LoginScreen'); }}>
          <View>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </View>
        </MemoListItem>

        <MemoListItem onPress={() => { navigation.navigate('SignUpScreen'); }}>
          <View>
            <MemoTitle>講座のアイテム</MemoTitle>
            <MemoDate>2017/10/10</MemoDate>
          </View>
        </MemoListItem>
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

const MemoTitle = styled.Text`
  font-size: 18;
  margin-bottom: 4;
`;

const MemoDate = styled.Text`
  font-size: 12;
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
