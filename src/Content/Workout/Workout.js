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
  const [coolDownExpiration, setCoolDownExpiration] = React.useState(null);
  const [slideIn, setSlideIn] = React.useState(true);
  const [cooldown, setCooldown] = React.useState(false);
  const [slideDirection, setSlideDirection] = React.useState('left');
  const placeHolderDate = new Date();
  const workouts = program && programIndex < program.length ? program[programIndex] : null;
  useEffect(() => {
    setProgram(myWorkout());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const otherTimer = useTimer({
    expiryTimestamp: coolDownExpiration || placeHolderDate,
    onExpire: () => {
      setCooldown(false);
    }
  });
  const coolDownSeconds = otherTimer.seconds;
  const coolDownRestart = otherTimer.restart;
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

  useEffect(() => {
    if (expiration) {
      coolDownRestart(coolDownExpiration);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coolDownExpiration]);
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
          {cooldown ? <WorkoutTimer seconds={coolDownSeconds} /> : null }

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
              setCooldown(true);
              const cooldownDate = new Date();
              cooldownDate.setSeconds(cooldownDate.getSeconds() + 30);
              setCoolDownExpiration(cooldownDate);
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
          {programIndex >= program.length ? null : (
            <WorkoutButtons
              disabled={workoutInProgress || cooldown}
              onStartButtonPressed={() => {
                const date = new Date();
                date.setSeconds(date.getSeconds() + 60);
                setExpiration(date);
                setWorkoutInProgress(true);
              }}
            />
          )}

        </Grid>
      </Grid>
    </Container>
  );
};

export default Workout;
