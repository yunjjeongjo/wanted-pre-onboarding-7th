import React from "react";
import Router from "./Routes/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./lib/styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
