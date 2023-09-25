import { styled } from 'styled-components';
import { alpha } from '@mui/material';
import InputBase from '@mui/material/InputBase';

export const Container = styled.div`
  border: 1px solid black;
  width: 200px;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIconWrapper = styled.div`
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    width: '100%',
  },
}));
