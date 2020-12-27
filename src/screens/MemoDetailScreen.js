import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import CircleButton from '../elements/CircleButton';

const MemoDetailScreen = () => {
  return (
    <>
      <Container>

        <MemoHeader>
          <View>
            <MemoHeaderTitle>講座のアイデア</MemoHeaderTitle>
            <MemoHeaderDate>2017/12/12</MemoHeaderDate>
          </View>
        </MemoHeader>
        <MemoContent>
          <MemoContentBody>
            講座のアイデアです。
          </MemoContentBody>
        </MemoContent>
        <EditButton layout color>+</EditButton>
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

const MemoHeaderTitle = styled.Text`
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
