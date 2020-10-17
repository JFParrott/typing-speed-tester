import React from 'react';

const Status = (props) => {
  return (
    <p>
      {props.wpm}
      <br />
      {Math.ceil(props.timeElapsed * 60)}
    </p>
  );
};

export default Status;
