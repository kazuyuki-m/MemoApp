import React from 'react';
import styled from 'styled-components/native';

const Appbar = () => {
  return (
    <Container>
      <AppbarTitle>MEMOT</AppbarTitle>
    </Container>
  );
};

export default Appbar;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70;
  padding-top: 30px;
  background-color: #265366;
  justify-content: center;
  align-items: center;
  /* shadow-color: #000;
  shadow-offset: {width:0, height:0};
  shadow-opacity: 0.5;
  shadow-radius: 23; */
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const AppbarTitle = styled.Text`
  color: #fff;
  font-size: 18;
`;
