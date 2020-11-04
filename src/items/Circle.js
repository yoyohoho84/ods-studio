import React, { useState, useEffect } from "react";
import {
  makeStyles,
  CssBaseline,
  Typography,
  Container,
  Link,
} from "@material-ui/core/";
import { COLOR_BRAND } from "../constants";
import {
  Icon28LogoVkOutline,
  Icon28LogoInstagram,
  Icon24LogoFacebook,
  Icon24LogoTwitter,
} from "@vkontakte/icons/dist/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: COLOR_BRAND,
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    backgroundColor: "white",
    backgroundClip: "padding-box",
    border: "20px solid hsla(0, 0%, 110%, .5)",
    margin: "20px 20px 0px 20px",
    // minHeight: "60vh",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: COLOR_BRAND,
    padding: "0px 0px 0px 20px",
    fontSize: "1.5em",
    wordWrap: "break-all"
  },
}));

const Circle = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>{text}</div>
    </div>
  );
};
export { Circle };
