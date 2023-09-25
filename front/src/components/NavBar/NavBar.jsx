import styled from 'styled-components';

import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Title = styled.div`
font-family: 'Poppins';
font-size: 24px;
border: 1px solid white;
padding: 6px;
`;

const NavBar = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Title>Calculatronic</Title>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
