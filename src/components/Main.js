import React, { useState, useEffect } from "react";
import { makeStyles, Box, Grid } from "@material-ui/core/";
import Fade from 'react-reveal/Fade';

import { Circle } from "../items";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    paddingBottom: "20px"
  },
}));

const Main = ({ admin }) => {
  const classes = useStyles();
  const data = [
    {
      name: "dev",
      text: "Разрабатываем приложения VK Mini apps и сайты",
      animation: { left: true, bottom: false, right: false },
    },
    {
      name: "support",
      text: "Осуществляем техническую поддержку проектов",
      animation: { left: false, bottom: true, right: false },
    },
    {
      name: "business",
      text: "Геймификация вашего бизнеса",
      animation: { left: false, bottom: false, right: true },
    },
  ];

  const renderData = data.map((item, index) => {
    return (
      <Fade
        left={item.animation.left}
        bottom={item.animation.bottom}
        right={item.animation.right}
        duration={5000}
      >
        <Grid item>
          <Circle text={item.text} />
        </Grid>
      </Fade>
    );
  });

  return (
    // <Box
    //   className={classes.box}
    //   display="flex"
    //   flexDirection="column"
    //   justifyContent="center"
    //   alignItems="center"
    // >

    // </Box>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {renderData}
        </Grid>
      </Grid>
    </Grid>
  );
};
export { Main };
