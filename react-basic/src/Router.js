import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GifContainer from "./views/GifContainer";
import ColorsContainer from "./views/Colors";
import AsteroidsContainer from "./views/AsteroidsContainer";
import CountContainer from "./views/CountContainer";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "inherit",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "8px 8px",
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  appBarBackground: {
    backgroundColor: '#d80606',
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <HideOnScroll {...props}>
          <AppBar className={classes.appBarBackground}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Colores" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button component={Link} to="/gifs">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Gifs" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button component={Link} to="/count">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Contador" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button component={Link} to="/asteroids">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Asteroides" />
            </ListItem>
          </List>
        </Drawer>
        <Container>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
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
        </Container>
      </div>
    </Router>
  );
}
