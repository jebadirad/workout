import React from 'react';
import {
  Typography, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import { Link } from 'react-router-dom';

function ListItemLink(props) {
  const {
    icon, primary, to, toggleDrawer
  } = props;

  const renderLink = React.useMemo(
    () => (
      // eslint-disable-next-line prefer-arrow-callback
      React.forwardRef(function RenderLink(linkProps, ref) {
        return (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Link ref={ref} to={to} {...linkProps} />
        );
      })),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} onClick={() => toggleDrawer(null, false)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={<Typography variant="body2">{primary}</Typography>} />
      </ListItem>
    </li>
  );
}


export default ListItemLink;
