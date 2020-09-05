import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GifContainer from "./views/GifContainer";
import ColorsContainer from "./views/Colors";
import AsteroidsContainer from "./views/AsteroidsContainer";
import CountContainer from "./views/CountContainer";
import Navigation from "./views/Navigation";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Hidden from "@material-ui/core/Hidden";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "inherit",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    paddingTop: 64,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  appBarBackground: {
    backgroundColor: "#d80606",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function App(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <div className={classes.root}>
        <HideOnScroll {...props}>
          <AppBar className={classes.appBarBackground}>
            <Toolbar>
              <Hidden smUp implementation="css">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden xsDown implementation="css">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Navigation
          onHandlerOpenNavigationDesktop={open}
          onHandlerCloseNavigationDesktop={handleDrawerClose}
          onHandlerOpenNavigationMobile={mobileOpen}
          onHandlerCloseNavigationMobile={handleDrawerToggle}
        />

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
          onClick={handleDrawerClose}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/">
              <ColorsContainer />
            </Route>
            <Route path="/gifs">
              <GifContainer />
            </Route>
            <Route path="/count">
              <CountContainer />
            </Route>
            <Route path="/asteroids">
              <AsteroidsContainer />
            </Route>
            <Route>
              <h1>404 Not found</h1>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
