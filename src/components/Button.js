import React from 'react';
import styled from 'styled-components/native';

const Button = ({
  // eslint-disable-next-line react/prop-types
  label,
  onPress,
  alignSelf,
}) => {
  return (
    <Wrapper onPress={onPress} alignSelf={alignSelf}>
      <Label>{label}</Label>
    </Wrapper>
  )
}

const Wrapper = styled.TouchableOpacity`
  /* padding: 24px; */
  background-color: #467fd3;
  border-radius: 4;
  align-self: ${({ alignSelf }) => (
    alignSelf
      ? alignSelf
      : 'flex-start'
  )};
  margin-bottom: 24;
`;

const Label = styled.Text`
  color: #ffffff;
  font-size: 16px;
  line-height: 32px;
  padding-vertical: 8px;
  padding-horizontal: 32px;
`;

export default Button;
