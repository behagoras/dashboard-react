import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import dashboardRoutes from '../../routes/routes';

const HeaderContainer = styled.nav`
  background:var(--brand-color-text);
  grid-area: hd;
  width:100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, auto);
  justify-items:center;
  padding: 0 ;
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  margin:auto;
  @media  screen and (max-width: 720px){
    transform: translate(0);
    transition: transform 0.7s ease-in-out;
  }
`;

const MenuList = styled.ul`
  width:100%;
  color: var(--white-color);
  display: grid;
  grid-template-columns: repeat(auto-fill,200px);
  grid-template-rows:1fr;
  flex-wrap: wrap;
  list-style: none;
  padding-top:15px;
  padding-bottom:45px;


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

    @media  screen and (max-width: 720px) { 
      display:none;
    }

  }
`;

const Header = () => {
  return (
    <>

      <HeaderContainer>
        <MenuList>
          {
            dashboardRoutes.map((route, index) => {
              return route.menu ? (
                <li key={index}>
                  <Link to={route.layout + route.path}>{route.name}</Link>
                </li>
              ) : '';
            })
          }
        </MenuList>

      </HeaderContainer>
    </>
  );
};

export default Header;
