import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: lightseagreen;
  display: grid;
  grid-template-columns:1;
  min-height: 100vh;
  margin: 0 auto;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  text-align:center;
`;

const Dashboard = (props) => {
  return (
    <Container>
      <p>Using Dashboard Template</p>
      {props.children}
    </Container>
  );
};

export default Dashboard;
