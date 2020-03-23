import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerFontSize: {
    fontSize: '3rem'
  }
});
const Home = () => {
  const styles = useStyles();
  return (
    <Typography
      variant="h1"
      classes={{
        h1: styles.headerFontSize
      }}
    >
      Home
    </Typography>
  );
};


export default Home;
