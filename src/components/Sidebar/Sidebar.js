import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import Flex from "../Flex";
import useStyles from "./useStyles";

export default function Sidebar({ children, window }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    console.log(open);
  };

  return (
    <Flex>
      <Drawer
        container={container}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className={classes.toolbar}>
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </div>
        <Divider />
        <List className={classes.list}>
          <Link to="/account/person">
            <ListItem>
              <ListItemIcon>
                <PersonRoundedIcon />
              </ListItemIcon>

              <ListItemText primary={"Sua Conta"} />
            </ListItem>
          </Link>

          <Link to="/account/products">
            <ListItem>
              <ListItemIcon>
                <WorkRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Produtos"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <main className={classes.content}>
        <div>{children}</div>
      </main>
    </Flex>
  );
}
