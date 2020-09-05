import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "inherit",
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
}));

export default function Navigation(props) {
  const classes = useStyles();
  const {
    window,
    onHandlerOpenNavigationDesktop,
    onHandlerCloseNavigationDesktop,
    onHandlerOpenNavigationMobile,
    onHandlerCloseNavigationMobile,
  } = props;
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List onClick={onHandlerCloseNavigationMobile}>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Colores" />
        </ListItem>
      </List>
      <Divider />
      <List onClick={onHandlerCloseNavigationMobile}>
        <ListItem button component={Link} to="/gifs">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Gifs" />
        </ListItem>
      </List>
      <Divider />
      <List onClick={onHandlerCloseNavigationMobile}>
        <ListItem button component={Link} to="/count">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contador" />
        </ListItem>
      </List>
      <Divider />
      <List onClick={onHandlerCloseNavigationMobile}>
        <ListItem button component={Link} to="/asteroids">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Asteroides" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={onHandlerOpenNavigationMobile}
            onClose={onHandlerCloseNavigationMobile}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Toolbar />
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={onHandlerOpenNavigationDesktop}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={onHandlerCloseNavigationDesktop}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List onClick={onHandlerCloseNavigationDesktop}>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Colores" />
              </ListItem>
            </List>
            <Divider />
            <List onClick={onHandlerCloseNavigationDesktop}>
              <ListItem button component={Link} to="/gifs">
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Gifs" />
              </ListItem>
            </List>
            <Divider />
            <List onClick={onHandlerCloseNavigationDesktop}>
              <ListItem button component={Link} to="/count">
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Contador" />
              </ListItem>
            </List>
            <Divider />
            <List onClick={onHandlerCloseNavigationDesktop}>
              <ListItem button component={Link} to="/asteroids">
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Asteroides" />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
