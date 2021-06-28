import { Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header />
      <Typography variant="h6" className="text-center">
        More content to appear soon!
      </Typography>
    </div>
  );
}

export default App;
