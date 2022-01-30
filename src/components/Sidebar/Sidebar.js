import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  List,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
