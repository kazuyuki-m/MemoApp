/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled, { css, keyframes } from 'styled-components/native';

const CircleButton = ({ children, layout, color }) => {
  return (
    <Button layout={layout} color={color}>
      <ButtonTitle color={color}>{children}</ButtonTitle>
    </Button>
  );
};

export default CircleButton;

const Button = styled.View`
  position: absolute;
  ${({ layout }) => (
    layout
      ? css`
          top: 75;
        `
      : css`
          bottom: 32;
        `
  )}
  right: 32px;
  width: 48px;
  height: 48px;
  background-color: ${({ color }) => (
    color
      ? '#fff'
      : '#e31676'
  )};
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  /* transform: rotate(135deg) translateX(-40px) translateY(-60px); */
`;

const ButtonTitle = styled.Text`
  font-size: 32px;
  /* line-height: 24px; */
  color: ${({ color }) => (
    color
      ? '#e31676'
      : '#fff'
  )};
`;
