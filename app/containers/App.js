//App template
import React, { PropTypes } from 'react';
import HomePage from './HomePage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const App = () => (
    <MuiThemeProvider>
      <HomePage/>
    </MuiThemeProvider>

);

export default App;
