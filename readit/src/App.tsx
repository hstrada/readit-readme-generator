import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { readitLightTheme, readitDarkTheme } from './theme';
import GlobalStyle from './theme/globalStyles';

import Generator from './pages/Generator';
import Home from './pages/Home';
import { NavBar } from './components';

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider
      theme={theme === 'light' ? readitLightTheme : readitDarkTheme}
    >
      <GlobalStyle />

      <Router>
        <NavBar toggleTheme={themeToggle} theme={theme} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/generator">
            <Generator />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
