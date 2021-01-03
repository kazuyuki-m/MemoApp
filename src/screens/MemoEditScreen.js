import React from 'react';
import styled from 'styled-components/native';
import CircleButton from '../elements/CircleButton';

const MemoEditScreen = () => {
  return (
    <Container>
      <MemoEditInput>
        <MemoEditInputText multiline>Hi</MemoEditInputText>
      </MemoEditInput>
      <CircleButton name="check" />
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

const MemoEditInputText = styled.TextInput`
  font-size: 16;
`;

export default MemoEditScreen;
