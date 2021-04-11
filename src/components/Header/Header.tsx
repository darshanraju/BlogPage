import { AppBar, Toolbar, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Dispatch, SetStateAction } from "react";
import { content } from "../../App";

const styles = makeStyles({
  appBar: {
    backgroundColor: "#112240",
    position: "fixed",
  },
  navContainer: {
    display: "flex",
    justifyContent: "center",
    minHeight: "10px",
  },
});

const Header = ({ changeContent }: HeaderProps) => {
  const classes = styles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.navContainer}>
          <Button onClick={() => changeContent("Blogs")} color="inherit">
            Blogs
          </Button>
          <Button onClick={() => changeContent("Podcasts")} color="inherit">
            Podcasts
          </Button>
          <Button onClick={() => changeContent("Math")} color="inherit">
            Math
          </Button>
          <Button onClick={() => changeContent("Philosophy")} color="inherit">
            Philosophy
          </Button>
          <Button onClick={() => changeContent("Music")} color="inherit">
            Music
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

interface HeaderProps {
  changeContent: Dispatch<SetStateAction<content>>;
}

export default Header;
