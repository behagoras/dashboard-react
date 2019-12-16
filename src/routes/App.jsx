import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Dashboard from '../layouts/Dashboard';

import light from '../themes/light';

//Containers
import HelloWorld from '../components/HelloWorld';
import Properties from '../containers/Properties';

const GlobalStyle = createGlobalStyle`
  body, a {
    margin:0;
    padding:0;
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }
  *{
    margin:0;
    padding:0;
  }
`;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Hello World</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/2">2</Link>
            </li>
          </ul>
        </nav>

        {/* Switch for every page with layout dashboard */}

        <ThemeProvider theme={light}>
          <Switch>
            <Route path="/dashboard" exact>
              <GlobalStyle />
              <Dashboard>
                <Properties />
              </Dashboard>
            </Route>
            <Route path="/" exact component={HelloWorld} />
          </Switch>
          <Switch>
            <Route path="/2" exact component={HelloWorld} />
            <Route path="/3" exact component={HelloWorld} />
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
