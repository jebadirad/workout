import React from 'react';

const WorkoutTimer = (props) => {
  const { seconds } = props;


  return (
    <div>
      {seconds}
    </div>
  );
};

export default WorkoutTimer;
