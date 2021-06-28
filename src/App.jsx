import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './App.css';
import Header from './components/header/header';

const theme = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: {
      paper: 'rgba(0, 0, 0, 1)',
      default: 'rgba(33, 1, 86, 0.86)',
    },
    primary: {
      light: 'rgba(17, 100, 76, 1)',
      main: 'rgba(6, 154, 149, 1)',
      dark: 'rgba(29, 4, 66, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
      disabled: 'rgba(221, 231, 230, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Typography variant="h6" className="text-center">
        More content to appear soon!
      </Typography>
    </MuiThemeProvider>
  );
}

export default App;
