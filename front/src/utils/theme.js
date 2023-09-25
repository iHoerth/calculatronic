import { createTheme } from '@mui/material';
// import { cyan, teal, blue, lightBlue } from '@mui/material/colors';

import '@fontsource/poppins';
import '@fontsource/roboto';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
    },
  },
  // palette: {
  //   primary: {},
  //   secondary: {},
  //   background: {},
  // },
  typography: {
    fontFamily: `'Poppins', "Roboto", "Helvetica", "Arial", 'sans-serif'`,
  },

  heights: {
    homeSection: 720,
  },

  components: {
    // MuiAutocomplete: {
    //   styleOverrides: {
    //     input: {
    //       fontSize: '16px',
    //     },
    //   },
    // },
  },
});
console.log(theme)
export default theme;
