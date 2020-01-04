import React from 'react';
import styled from 'styled-components';

import Header from '../components/Dashboard/Header';
import Footer from '../components/Dashboard/Footer';
import Sidebar from '../components/Dashboard/Sidebar';
import Main from '../components/Dashboard/Main';

const Container = styled.div`
  height:100%;
  min-height: 100vh;
  margin: 0 auto;
  font-family: var(--font-family);
  text-align:center;
  display:grid;
  justify-content:space-between;  
  align-content:space-between;  
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: 
    "sb sb hd hd hd hd hd hd hd"
    "sb sb mn mn mn mn mn mn mn"
    "sb sb ft  ft ft ft ft ft ft";
  @media  screen and (max-width: 720px) {
    grid-template-areas: 
      "hd hd hd hd hd hd hd hd hd"
      "mn mn mn mn mn mn mn mn mn"
      "ft ft ft ft ft ft ft ft ft";
  }
`;

const Dashboard = ({ children }) => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Main>
        {/* <p>Using Dashboard Template</p> */}
        {children}
      </Main>
      <Footer />
    </Container>
  );
};

export default Dashboard;
