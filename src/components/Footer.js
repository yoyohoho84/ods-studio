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
// import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
// import Icon28LogoVkOutline from '@vkontakte/icons/dist/28/logo_vk_outline';
// import Icon24LogoFacebook from '@vkontakte/icons/dist/24/logo_facebook';
// import Icon24LogoTwitter from '@vkontakte/icons/dist/24/logo_twitter';

function Copyright() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
     
      <Link
        color="inherit"
        href="https://vk.com/akbarsnedvizimost"
        target="_blank"
      >
        <Icon28LogoVkOutline height={32} width={32} fill={COLOR_BRAND} />
      </Link>

      <Link
        color="inherit"
        href="https://www.instagram.com/akbarsdom.ru/"
        target="_blank"
      >
        <Icon28LogoInstagram height={32} width={32} fill={COLOR_BRAND} />
      </Link>
      <Link
        color="inherit"
        href="https://www.facebook.com/AkBarsDom/"
        target="_blank"
      >
        <Icon24LogoFacebook height={32} width={32} fill={COLOR_BRAND} />
      </Link>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: COLOR_BRAND
    // minHeight: "60vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const Footer = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" >Мы в соцсетях:</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};
export { Footer };
