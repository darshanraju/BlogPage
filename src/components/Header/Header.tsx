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
import { isClassExpression } from "typescript";

const styles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#112240",
  },
});

const Header = () => {
  const classes = styles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">Podcasts</Button>
          <Button color="inherit">Math</Button>
          <Button color="inherit">Philosophy</Button>
          <Button color="inherit">Music</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
