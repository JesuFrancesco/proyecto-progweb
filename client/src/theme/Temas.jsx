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
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
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
      primary: "#ffffff",
      secondary: "#000000",
    }
  }
});

export const temaLogin = createTheme({
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
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: "url(https://images.pexels.com/photos/7130557/pexels-photo-7130557.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }
      }
    }
  }
});