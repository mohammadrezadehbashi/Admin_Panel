import * as React from "react";
import { createTheme, ThemeProvider,  } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
import {Paper} from "@mui/material";

const theme = createTheme({
  palette: {
    // primary: lime,
    mode:"light",
    secondary: purple,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily:"Rubik"
  }
});
// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });
export default function Theme({children}) {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        {/* <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
        Secondary
      </Button> */}
        {children}
      </Paper>
    </ThemeProvider>
  );
}
