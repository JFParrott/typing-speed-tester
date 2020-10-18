import React from 'react';

const Results = (props) => {
  return (
    <div className="results-container">
      <p>Your WPM is {props.wpm}</p>
      <button onClick={props.startTest}>Play again</button>
    </div>
  );
};

export default Results;
