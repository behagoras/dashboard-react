import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, auto);
  justify-items:center;

  padding: 0 ;
  background: #fff;
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  margin: 0 auto;
`;

const HeaderList = styled.ul`
  width:100%;
  max-width:900px;
  margin:0 auto;
  color: #9aa0ac;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
  margin: 0 -0.75rem;
  & li {
    margin-bottom: 0;
    position: relative;
    padding: 0 0.75rem;
    min-width: 2rem;
    transition: 0.3s color;
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    & a {
      color: #9aa0ac;
      text-decoration:none;
      border: 0;
      color: inherit;
      border-bottom: 1px solid transparent;
      margin-bottom: -1px;
      transition: 0.3s border-color;
      font-weight: 400;
      padding: 1rem 0;
    }
    & a:hover, & a:active{
      border-color: #467fcf;
      color: #467fcf;
      background: transparent;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderList>
        <li>
          <Link to="/">Hello World</Link>
        </li>
        <li>
          <Link to="/properties">Properties Front</Link>
        </li>
        <li>
          <Link to="/properties-dashboard">Dashboard Properties</Link>
        </li>
        <li>
          <Link to="/2">Dashboard Hello World</Link>
        </li>
      </HeaderList>
    </HeaderContainer>
  );
};

export default Header;
