import data from './data';

/*
function shuffle(array) {
  const arrayHolder = array;
  let currentIndex = arrayHolder.length; let temporaryValue; let
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arrayHolder[currentIndex];
    arrayHolder[currentIndex] = arrayHolder[randomIndex];
    arrayHolder[randomIndex] = temporaryValue;
  }

  return array;
} */

function addStep(steps, array, stepCount) {
  if (stepCount < steps.length) {
    array.push(steps[stepCount]);
    stepCount += 1;
  } else {
    stepCount = 0;
    array.push(steps[stepCount]);
    stepCount += 1;
  }
  return stepCount;
}
const generateMyWorkout = () => {
  const { legs } = data;
  const upper = data.upperbody;
  const steps = data.aerobic;

  const myWorkout = [];
  let stepCount = 0;
  upper.forEach((arm, index) => {
    if (myWorkout.length < 30) {
      myWorkout.push(arm);
      if (myWorkout.length < 30) {
        stepCount = addStep(steps, myWorkout, stepCount);
      }
      if (myWorkout.length < 30) {
        if (index < legs.length) {
          myWorkout.push(legs[index]);
        }
      }
      if (myWorkout.length < 30) {
        stepCount = addStep(steps, myWorkout, stepCount);
      }
    }
  });
  return myWorkout;
};

export default generateMyWorkout;
