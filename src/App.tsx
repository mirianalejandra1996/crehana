import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4b22f4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
