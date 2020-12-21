import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const BodyText = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

const Text = styled.Text`
  color: #ddd;
  background-color: #eee;
`;

export default BodyText;
