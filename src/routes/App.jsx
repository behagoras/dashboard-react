import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Dashboard from '../layouts/Dashboard';
import light from '../themes/light';
import dashboardRoutes from './routes';

import GlobalStyle from '../styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <div>
        <ThemeProvider theme={light}>
          <Dashboard>
            <GlobalStyle />
            <Switch>
              {
                dashboardRoutes.map((route, index) => {
                  return (
                    <Route path={route.layout + route.path} exact={route.exact} key={index}>
                      <route.component />
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
