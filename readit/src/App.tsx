import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { readitLightTheme, readitDarkTheme } from './theme';
import GlobalStyle from './theme/globalStyles';

import Generator from './pages/Generator';
import Home from './pages/Home';
import { NavBar } from './components';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const themeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const themeMode = window.localStorage.getItem('theme');
    if (themeMode === 'light') {
      setTheme('light');
    } else if (themeMode === 'dark') {
      setTheme('dark');
    } else {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeProvider
      theme={theme === 'light' ? readitLightTheme : readitDarkTheme}
    >
      <GlobalStyle />

      <Router>
        <NavBar toggleTheme={themeToggle} theme={theme} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/generator" component={Generator} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
