import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  makeStyles,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Button,
} from "@material-ui/core/";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";

import { COLOR_BRAND, NAME_PROJECT } from "../constants";
import { APIManager } from "../helpers/api-manager";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    // background: "#ff2262"
  },
  menuButton: {
    boxShadow: "none",
    margin: "10px 0px 0px 0px",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: "20px",
  },

  headerItem: {
    margin: "30px 30px 0px 0px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  headerItemLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.5rem",
  },

  menuAppBar: {
    background: COLOR_BRAND,
  },
  menuAppBarItemLink: {
    textDecoration: "none",
    color: COLOR_BRAND,
    fontSize: "1.5rem",
  },

  hiddenMenu: {
    // backgroundColor: "#003838eb",
  },

  hiddenMenuIconClose: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    // width: "100%",
    // marginBottom: "20px",
  },


}));

const { callMethod } = APIManager;

const MenuApp = ({ admin, userId, setUserId }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function logout() {
    callMethod("logout").then((res) => {
      if (res.response && res.response === true) {
        setUserId(null);
      }
    });
  }

  const itemLi = [
    {
      name: "Услуги",
      link: "/services",
    },
    {
      name: "О компании",
      link: "/about-company",
    },
    {
      name: "Контакты",
      link: "/contacts",
    },
  ];
  const [toggle, setToggle] = useState(false);

  const renderItems = (type) => {
    if (type === "hidden-menu") {
      return itemLi.map((item, index) => (
        <ListItem
          button
          key={index}
          // style={{ marginTop: index === 0 && "10px" }}
        >
          <Link className={classes.menuAppBarItemLink} to={item.link}>
            {/* <ListItemText primary={item.name} /> */}
            {item.name}
          </Link>
        </ListItem>
      ));
    } else {
      return itemLi.map((item, index) => (
        <Typography key={index} variant="h6" className={classes.headerItem}>
          <Link className={classes.headerItemLink} to={item.link}>
            {item.name}
          </Link>
        </Typography>
      ));
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.menuAppBar} position="static">
        <Toolbar>
          <Link className={classes.headerItemLink} to="/">
            <div className="logoIcon"></div>
            {/* {NAME_PROJECT} */}
          </Link>

          <div className={classes.header}>{renderItems()}</div>

          <div>
            <IconButton
              edge="left"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setToggle(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
          <Drawer
            variant="temporary"
            transitionDuration={1000}
            className={classes.hiddenMenu}
            anchor="left"
            open={toggle}
            onClose={() => setToggle(false)}
          >
            <List>
              <div className={classes.hiddenMenuIconClose}>
                <IconButton onClick={() => setToggle(false)}>
                  <CloseIcon />
                </IconButton>
              </div>

              {renderItems("hidden-menu")}
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export { MenuApp };
