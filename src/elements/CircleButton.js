import React from 'react';
import styled from 'styled-components/native';

const CircleButton = ({ children }) => {
  return (
    <Button><ButtonTitle>{children}</ButtonTitle></Button>
  );
};

export default CircleButton;

const Button = styled.View`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  background-color: #e31676;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
`;

const ButtonTitle = styled.Text`
  font-size: 32px;
  /* line-height: 24px; */
  color: #fff;
`;
