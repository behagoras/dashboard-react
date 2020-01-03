import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import dashboardRoutes from '../../routes/routes';

const SidebarContainer = styled.aside`
  grid-area: sb;
  transition-property: top,bottom,width;
  transition-duration: .2s,.2s,.35s;
  transition-timing-function: linear,linear,ease;
  -webkit-overflow-scrolling: touch;
  top: 0;
  height: 100%;
  bottom: 0;
  /* width: 260px; */
  left: 0;
  z-index: 4;
  background:var(--brand-color);
  @media (min-width: 991px) {
      display: block;
      box-shadow: 0 2px 22px 0 rgba(0,0,0,.2), 0 2px 30px 0 rgba(0,0,0,.35);
  }
`;

const LogoContainer = styled.div`
  padding: .5rem .7rem 0 .7rem;
  z-index: 4;
  display:grid;
  grid-template-columns:50px 1fr;
  align-items:center;

`;

const LogoImg = styled.figure`
  & img{
    max-width: 100%;
    max-height:100%;
    vertical-align: middle;
    border-style: none;
    /* border-radius: .1875rem; */
  }
`;

const LogoLink = styled(Link)`
  opacity: 1;
  text-align:left;
  width: 100%;
  margin-left: 10px;
  margin-right: 12px;
  text-transform: uppercase;
  padding: .5rem 0;
  display: block;
  white-space: nowrap;
  font-size: 1em;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  line-height: 30px;
`;

const SidebarContent = styled.nav`
  margin:0;
  position: relative;
  height: calc(100vh - 75px);
  overflow: auto;
  /* width: 260px; */
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

const NavigationIcon = styled.figure`
  width:50px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoLink to="/">
          <LogoImg>
            <img src="https://demos.creative-tim.com/now-ui-dashboard-react/static/media/logo-white.eec7c7f6.svg" alt="react logo" />
          </LogoImg>
        </LogoLink>
        <LogoLink to="/">
          David
        </LogoLink>
      </LogoContainer>
      <SidebarContent>
        <Navigation>
          <NavElement selected>
            <CustomLink to="/">
              <i className="fas fa-columns" />
              <p>Dashboard</p>
            </CustomLink>
          </NavElement>
          {
            dashboardRoutes.map((route, index) => {
              return route.sidebar ? (
                <NavElement key={index}>
                  <CustomLink to={route.layout + route.path}>
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
  );
};

export default Sidebar;
