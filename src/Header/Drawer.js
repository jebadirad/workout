import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItemLink from './ListItemLink';
import routes from './routes';

const Drawer = (props) => {
  const { open, anchor, toggleDrawer } = props;
  const items = [];
  Object.entries(routes).forEach((entry) => {
    const [key, value] = entry;
    const {
      icon, to, primary
    } = value;
    items.push(<ListItemLink key={key} to={to} icon={icon} primary={primary} toggleDrawer={toggleDrawer} />);
  });

  return (
    <SwipeableDrawer
      open={open}
      anchor={anchor}
      onClose={() => toggleDrawer(anchor, false)}
      onOpen={() => toggleDrawer(anchor, true)}
    >
      <List>{items}</List>
    </SwipeableDrawer>
  );
};


export default Drawer;
