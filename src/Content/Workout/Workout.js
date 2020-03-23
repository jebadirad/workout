import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { useTimer } from 'react-timer-hook';
import WorkoutCard from './WorkoutCard';
import WorkoutButtons from './WorkoutButtons';
import WorkoutTimer from './WorkoutTimer';
import myWorkout from './myWorkout';

const useStyles = makeStyles({
  headerStyles: {
    fontSize: '3rem'
  }
});
const Workout = () => {
  const styles = useStyles();

  const [workoutInProgress, setWorkoutInProgress] = React.useState(false);
  const [program, setProgram] = React.useState([]);
  const [programIndex, setProgramIndex] = React.useState(0);
  const [expiration, setExpiration] = React.useState(null);
  const [slideIn, setSlideIn] = React.useState(true);
  const [slideDirection, setSlideDirection] = React.useState('left');
  const placeHolderDate = new Date();
  const workouts = program && programIndex < program.length ? program[programIndex] : null;
  useEffect(() => {
    setProgram(myWorkout());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const { seconds, restart } = useTimer({
    expiryTimestamp: expiration || placeHolderDate,
    onExpire: () => {
      if (workoutInProgress) {
        setWorkoutInProgress(false);
        setSlideDirection('right');
        setSlideIn(false);
      }
    }
  });
  useEffect(() => {
    if (expiration) {
      restart(expiration);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expiration]);


  return (

    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" classes={{ h1: styles.headerStyles }}>30-min Express Workout</Typography>
        </Grid>
        <Grid item xs={12}>
          {workoutInProgress ? (
            <WorkoutTimer
              seconds={seconds}
            />
          ) : null}

        </Grid>
        <Grid item xs={12}>
          <Slide
            in={slideIn}
            mountOnEnter
            unmountOnExit
            direction={slideDirection}
            onExited={() => {
              setProgramIndex(programIndex + 1);
              setSlideDirection('left');
              setSlideIn(true);
            }}
          >
            <div>
              {program && workouts
                ? (
                  <WorkoutCard
                    title={workouts.title}
                    areas={workouts.areas}
                    information={workouts.information}
                    url={workouts.url}
                  />
                ) : null}
              {programIndex >= program.length ? <div>Congrats you finished!</div> : null}
            </div>
          </Slide>
        </Grid>
        <Grid item xs={12}>
          <WorkoutButtons
            disabled={workoutInProgress}
            onStartButtonPressed={() => {
              const date = new Date();
              date.setSeconds(date.getSeconds() + 3);
              setExpiration(date);
              setWorkoutInProgress(true);
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Workout;
