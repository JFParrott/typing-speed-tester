import React from 'react';

const Status = (props) => {
  return (
    <p>
      {props.wpm} WPM
      <br />
      {Math.ceil(props.timeElapsed * 60)} seconds
    </p>
  );
};

export default Status;
