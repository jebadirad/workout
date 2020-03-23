import React from 'react';
import {
  Typography, Grid, IconButton, Card, CardHeader, CardMedia, Collapse, CardActions, CardContent
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(1)
  },
  chipContainer: {
    paddingLeft: theme.spacing(2)
  }
}));

const WorkoutCard = (props) => {
  const styles = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {
    title, areas, information, url
  } = props;
  return (
    <Card>
      <CardHeader title={title} />
      <Grid container spacing={2} classes={{ container: styles.chipContainer }}>
        {areas.map((item, key) => (
          <Grid key={key} item>
            <Chip color="primary" variant="outlined" label={item} />
          </Grid>
        ))}
      </Grid>
      <CardMedia classes={{
        root: styles.imageContainer
      }}
      >
        {url.indexOf('.gif') > -1 ? <img src={url} style={{ maxHeight: '40rem' }} /> : (
          <video controls>
            <source src={url} />
          </video>
        ) }

      </CardMedia>

      <CardActions>
        <IconButton
          className={clsx(styles.expand, {
            [styles.expandOpen]: expanded
          })}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {information.map((item, key) => <Typography variant="body1" key={key}>{item}</Typography>)}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default WorkoutCard;
