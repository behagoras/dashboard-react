import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Dashboard from '../layouts/Dashboard';

import light from '../themes/light';

//Containers
import HelloWorld from '../components/HelloWorld';
import PropertiesFront from '../pages/Front/PropertiesFront';
import PropertiesBack from '../pages/Dashboard/Properties';
import PropertiesTabler from '../pages/Dashboard/PropertiesTabler';
// import PropertiesMaterial from '../pages/Dashboard/PropertiesMaterial';
import dashboardRoutes from './routes';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: ${(props) => props.theme.colors.text};
  }
  a,body,div,html {
    font-size: ${(props) => props.theme.fontSize};
  }
  *{
    margin:0;
    padding:0;
  }
  
  h2{
    font-size: ${(props) => props.theme.fontSize};
    margin-bottom: 4px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const App = () => {

  // console.log('route1', `${dashboardRoutes[1].layout}${dashboardRoutes[1].path}`);

  return (
    <Router>
      <div>
        {/* Switch for every page with layout dashboard */}

        <ThemeProvider theme={light}>
          <Dashboard>
            <GlobalStyle />
            {/* <Switch>
              <Route path="/properties" exact>
                <PropertiesFront />
              </Route>
              <Route path="/properties-dashboard" exact>
                <PropertiesBack />
              </Route>
              <Route path="/properties-tabler" exact>
                <PropertiesTabler />
              </Route>
              <Route path="/" exact component={HelloWorld} />
              <Route path="/2" exact component={HelloWorld} />
              <Route path="/3" exact component={HelloWorld} />
            </Switch> */}

            <Switch>
              {
                dashboardRoutes.map((route) => {
                  const path = route.layout + route.path;
                  console.log('path=', path);
                  return (
                    <Route path={route.layout + route.path} exact={route.exact}>
                      <>
                        <route.component />
                      </>
                    </Route>
                  );
                })
              }
            </Switch>

          </Dashboard>

        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
