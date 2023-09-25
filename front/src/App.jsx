import './App.css';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material';

import theme from './utils/theme';

import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <SearchBar />
    </ThemeProvider>
  );
}

export default App;
