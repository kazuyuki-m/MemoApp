/* eslint-disable no-confusing-arrow */
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import styled, { css, keyframes } from 'styled-components/native';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwesome');

const CircleButton = ({ name, layout, color }) => {
  // useEffect(() => {
  // eslint-disable-next-line prefer-const
  let [fontsLoaded] = useFonts({
    FontAwesome: fontAwesome,
  });
  // }, []);
  return (
    fontsLoaded
      ? (
        <Button layout={layout} color={color}>
          <ButtonTitle color={color} name={name} />
          {/* {children} */}
          {/* </ButtonTitle> */}

        </Button>
      ) : (
        <AppLoading />
      )
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

const ButtonTitle = styled(CustomIcon)`
  font-size: 24px;
  /* line-height: 24px; */
  color: ${({ color }) => (
    color
      ? '#e31676'
      : '#fff'
  )};
  font-family: 'FontAwesome';
`;
