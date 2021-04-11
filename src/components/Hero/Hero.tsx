import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import HeroImage from "../../assets/hero.webp";

const styles = makeStyles({
  root: {
    height: "55vh",
    width: "100%",
    backgroundImage: `url(${HeroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroText: {
    color: "white",

    fontSize: "5rem",
  },
});

const Hero = () => {
  const theme = styles();
  return (
    <div className={theme.root}>
      <Typography variant="h6" className={theme.heroText}>
        Darshan's Blog
      </Typography>
    </div>
  );
};

export default Hero;
