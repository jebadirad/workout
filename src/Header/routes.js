import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const routes = {
  home: {
    to: '/',
    icon: <HomeIcon />,
    primary: 'Home'
  },
  workout: {
    to: '/workout',
    icon: <FitnessCenterIcon />,
    primary: '30-min Workout'
  }
};
export default routes;
