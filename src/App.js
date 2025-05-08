import { createTheme, ThemeProvider, Typography } from "@mui/material";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
  palette: {
    primary: {
      main: "#311b92",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ fontFamily: "IBM" }}>
        <Typography variant="h1" gutterBottom>
          طقساوي
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
