import React from 'react';
import Intro from './Intro';
import Clock from './Clock';
import TextField from './TextField';
import TextInput from './TextInput';
import Status from './Status';
import Results from './Results';

class Tester extends React.Component {
  state = {
    testStarted: false,
    testFinished: false,
  };

  startTest = () => {};

  handleChange = () => {};

  render() {
    if (!this.state.testStarted) {
      return <Intro startTest={this.startTest} />;
    }
    if (this.state.testStarted) {
      return (
        <div>
          <Clock />
          <Status />
          <TextField />
          <TextInput handleChange={this.handleChange} />
        </div>
      );
    }
    if (this.state.testFinished) {
      return <Results />;
    }
  }
}

export default Tester;
