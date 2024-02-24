import { createTheme } from "@mui/material/styles";

export const temaClaro = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff7b00"
    },
    secondary: {
      main: "#ffb145"
    },
    error: {
      main: "#ff7b00"
    },
    warning: {
      main: "#e00707"
    }
  }
});

// jejeje se ve feo no usar
export const temaOscuro = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff7b00',
    },
    secondary: {
      main: '#ffb145',
    },
    error: {
      main: "#ff7b00"
    },
    warning: {
      main: "#e00707"
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: "#fafafa",
      secondary: "#fafafa",
    }
  }
});