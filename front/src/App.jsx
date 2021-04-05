import React from 'react';
import PageLayout from '@/layouts/PageLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle,theme } from '@/layouts/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={PageLayout} />
      <Route path='/studentManagement' component={PageLayout} />
      <Route path='/studentEnrollment' component={PageLayout} />
      <Route path='/classManagement' component={PageLayout} />
    </Switch>
  </BrowserRouter>
  </ThemeProvider>
);
export default App;
