import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import Dashboard from '../layouts/Dashboard';
import HelloWorld from '../components/HelloWorld';

const GlobalStyle = createGlobalStyle`
  body {
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
              <GlobalStyle />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/2">2</Link>
            </li>
          </ul>
        </nav>

        {/* Switch for every page with layout dashboard */}

        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard>
              <HelloWorld />
            </Dashboard>
          </Route>
          <Route path="/" exact component={HelloWorld} />
        </Switch>
        <Switch>
          <Route path="/2" exact component={HelloWorld} />
          <Route path="/3" exact component={HelloWorld} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
