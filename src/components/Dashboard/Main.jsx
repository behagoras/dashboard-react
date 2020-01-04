import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  grid-area: mn;
  margin-top:-30px;
  z-index:9;
`;

const Main = ({ children }) => {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  );
};

export default Main;
