import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

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
      <div className="App">
        <WeatherCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
