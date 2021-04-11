// import React from "react";
import {
  AppBar,
  Toolbar,
  //   Typography,
  Button,
  IconButton,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const styles = makeStyles({
  grow: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = styles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />

          {/* <Typography variant="h6">Dar</Typography> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
