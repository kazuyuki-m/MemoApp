import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styled from 'styled-components/native';

export default ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <Container>
      <Inner>
        <ActivityIndicator size="large" color="#000000" />
      </Inner>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const Inner = styled.View`
  margin-bottom: 80px;
`;
