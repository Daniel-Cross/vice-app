import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: red,
    accent1Color: pink,
    textColor: { main: '#ffffff' },
    input: { main: '#ffffff' },
    text: { main: '#ffffff' }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Home />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
