import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Lato"
  },
  palette: {
    primary: {
      light: "##fff",
      dark: "#000000",
      contrastText: "#fff",
    },
  },
});

export default theme;
