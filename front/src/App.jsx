import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle,theme } from '@/layouts/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ClassManagement from '@/pages/ClassManagement/ClassManagement';
import StudentManagement from '@/pages/StudentManagement/StudentManagement';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ClassManagement} />
        <Route path='/studentManagement' component={StudentManagement} />
        <Route path='/studentEnrollment' component={ClassManagement} />
        <Route path='/classManagement' component={ClassManagement} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;

// const App = () => (
//   <div>
//     <ClassManagement />
//   </div>
// );
