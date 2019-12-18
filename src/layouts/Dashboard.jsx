import React from 'react';
import styled from 'styled-components';

import Header from '../components/Dashboard/Header';
import Footer from '../components/Dashboard/Footer';
import Sidebar from '../components/Dashboard/Sidebar';
import Main from '../components/Dashboard/Main';

const Container = styled.div`
  background: lightseagreen;
  /* display: grid; */
  grid-template-columns:1fr;
  padding:1em;
  margin:0;
  justify-content:space-around;  
  min-height: 100vh;
  margin: 0 auto;
  /* font-size: 40px; */
  font-family: Helvetica, Arial, sans-serif;
  text-align:center;
`;

const Dashboard = (props) => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <p>Using Dashboard Template</p>
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Container>
  );
};

export default Dashboard;
