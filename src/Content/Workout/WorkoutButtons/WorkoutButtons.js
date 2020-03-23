import React from 'react';
import Button from '@material-ui/core/Button';

const WorkoutButtons = (props) => {
  const { disabled, onStartButtonPressed } = props;

  return (
    <Button
      disabled={disabled}
      color="primary"
      variant="contained"
      size="large"
      onClick={() => onStartButtonPressed()}
    >
      Start
    </Button>
  );
};

export default WorkoutButtons;
