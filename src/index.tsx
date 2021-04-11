import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import blogTheme from "./components/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={blogTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
