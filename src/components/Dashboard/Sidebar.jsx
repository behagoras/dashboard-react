import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import dashboardRoutes from '../../routes/routes';
import HamburgerButton from '../Atoms/HamburgerButton';

const MobileMenu = styled.div`
  display:none;
  @media  screen and (max-width: 720px) { 
    position: absolute;
    z-index:12;
    top: 0;
    left: 0;
    display: grid;
    justify-items: right;
    width: calc(100% - 25px);
    grid-gap: 20px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0;
  }
`;

const SidebarContainer = styled.aside`
  transition-property: top,bottom,width;
  transition-duration: .2s,.2s,.35s;
  transition-timing-function: linear,linear,ease;
  -webkit-overflow-scrolling: touch;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 4;
  background:var(--brand-color);
  @media (min-width: 720px) {
    grid-area: sb;
    display: block;
    box-shadow: 0 2px 22px 0 rgba(0,0,0,.2), 0 2px 30px 0 rgba(0,0,0,.35);
  }
  @media (max-width: 720px) {
    position:fixed;
    width: 100%;
    height:100%;
    z-index:10;
    transition: all 0.5s ease-in-out;
    left: ${(props) => (props.isActive ? '0' : '-100%')};
  }

`;

const LogoContainer = styled.div`
  padding: .5rem .7rem 0 .7rem;
  z-index: 4;
  display:grid;
  grid-template-columns:50px 1fr;
  align-items:center;
  grid-gap:10px;
`;

const LogoImg = styled.figure`
  & img{
    max-width: 100%;
    max-height:100%;
    vertical-align: middle;
    border-style: none;
  }
`;

const LogoLink = styled.a`
  opacity: 1;
  text-align:left;
  width: 100%;
  margin-left: 10px;
  margin-right: 12px;
  text-transform: uppercase;
  padding: .5rem 0;
  display: block;
  font-size: 1em;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  line-height: 30px;
  margin:5px;
`;

const SidebarContent = styled.nav`
  margin:0;
  position: relative;
  height: calc(100vh - 75px);
  overflow: auto;
  z-index: 4;
  padding-bottom: 100px;
  @media (min-width: 991px){
    transition-property: top,bottom,width;
    transition-duration: .2s,.2s,.35s;
    transition-timing-function: linear,linear,ease;
    -webkit-overflow-scrolling: touch;
  }
`;

const Navigation = styled.ul`
  & :before{
    content: "";
    height: 1px;
    width: calc(100% - 30px);
    background-color: hsla(0,0%,100%,.5);
    margin: 0 auto;
    margin-bottom:10px;
  }
  padding:10px 20px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
 
`;

const NavElement = styled.li`
  margin-top:10px;
  width:100%;
  border-radius:30px;
  & :hover{
    background-color: hsla(0,0%,100%,.1);
  }
 
`;

const CustomLink = styled(Link)`
    margin: 10px 15px 0;
    border-radius: 30px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    font-size: .7142em;
    padding: 10px 8px;
    line-height: 1.625rem; 
    display:grid;
    grid-template-columns:50px 1fr;
    align-items:center;  
    & p {
      text-align:left;
    } 
    & i {
      color: var(--brand-color-text);
      opacity:.3;
      font-size:16px;
    }
  
`;

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleHamburgerClick = (event) => {
    event.preventDefault();
    setIsActive(!isActive);
  };
  const handleLinkClick = () => {
    setIsActive(false);

  };
  return (
    <>
      <MobileMenu>
        <HamburgerButton onClick={handleHamburgerClick} isActive={isActive} color="var(--white-color)" />
      </MobileMenu>
      <SidebarContainer isActive={isActive}>
        <LogoContainer>
          <LogoLink href="https://github.com/behagoras/dashboard-react" target="_blank">
            <LogoImg>
              <img src="https://avatars2.githubusercontent.com/u/6518316?s=460&v=4" alt="react logo" />
            </LogoImg>
          </LogoLink>
          <LogoLink href="https://github.com/behagoras/dashboard-react" target="_blank">
            <h1 style={{ display: 'inline' }}>React Dashboard</h1>
            <h2>Fork It on Github</h2>
          </LogoLink>
        </LogoContainer>
        <SidebarContent>
          <Navigation>

            {
              dashboardRoutes.map((route, index) => {
                return route.sidebar ? (
                  <NavElement key={index}>
                    <CustomLink to={route.layout + route.path} onClick={handleLinkClick}>
                      <i className={route.icon} />
                      <p>{route.name}</p>
                    </CustomLink>
                  </NavElement>
                ) : '';
              })
            }
          </Navigation>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
