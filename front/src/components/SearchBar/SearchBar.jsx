import SearchIcon from '@mui/icons-material/Search';

import { Container, SearchIconWrapper, StyledInputBase } from './components';

const SearchBar = () => {
  return (
    <Container>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </Container>
  );
};

export default SearchBar;
