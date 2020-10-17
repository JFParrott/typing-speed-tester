import React from 'react';

const Intro = (props) => {
  return (
    <div>
      <p>
        Welcome to my typing speed tester. Click the button below to start the
        test. The timer will begin as soon as the button is clicked. Good luck!
      </p>
      <button onClick={props.startTest}>Begin!</button>
    </div>
  );
};

export default Intro;
