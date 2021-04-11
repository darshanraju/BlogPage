import { createMuiTheme } from "@material-ui/core/styles";

const blogTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#112240",
      contrastText: "#66fcf1",
    },
  },
  background: {
    default: "#0a192f",
  },
});

export default blogTheme;
