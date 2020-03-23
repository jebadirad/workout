import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from './Drawer';

const Header = () => {
  const [open, setIsOpen] = useState(false);
  const toggleDrawer = (anchor, isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={(event) => toggleDrawer(event.currentTarget, true)} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Workout
        </Typography>
      </Toolbar>
      <Drawer open={open} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
};

export default Header;
