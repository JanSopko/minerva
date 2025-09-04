"use client";

import { FunctionComponent, useState, MouseEvent, ReactNode, PropsWithChildren } from "react";
import {
  Button,
  IconButton,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const NavbarMobileMenu: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleToggle = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(prev => (prev ? null : event.currentTarget));
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button variant='outlined' color="secondary" >
        Get Started
      </Button>
      <IconButton
        color="inherit"
        aria-expanded={open ? "true" : undefined}
        onClick={handleToggle}
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        keepMounted
      >
        { children }
      </Menu>
    </>
  );
}
