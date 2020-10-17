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
    renderedText: '',
    words: [],
    completedWords: [],
    inputValue: '',
    wpm: 0,
    startTime: undefined,
    timeElapsed: 0,
    wordsPerMinute: 0,
  };

  renderText = () => {
    const textOptions = [
      'Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. Attention affection at my preferred offending shameless me if agreeable. Life lain held calm and true neat she. Much feet each so went no from. Truth began maids linen an treat to after.',
      'Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners.',
      'Respect forming clothes do in he. Course so piqued no an by appear. Themselves reasonable pianoforte so motionless he as difficulty be. Abode way begin ham there power whole. Do unpleasing indulgence impossible to conviction. Suppose neither evident welcome it at do civilly uncivil. Sing tall much you get nor.',
      'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.',
      'Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious. Replying an marianne do it an entrance advanced. Two dare say play when hold. Required bringing me material stanhill jointure is as he. Mutual indeed yet her living result matter him bed whence.',
      'In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities.',
    ];
    const renderedText =
      textOptions[Math.floor(Math.random() * textOptions.length)];
    const words = renderedText.split(' ');
    this.setState({
      renderedText,
      words,
      completedWords: [],
    });
  };

  startTest = () => {
    this.renderText();
    this.setState({
      testStarted: true,
      startTime: Date.now(),
      testFinished: false,
    });
  };

  handleChange = (e) => {
    const { words, completedWords } = this.state;
    const inputValue = e.target.value;
    const lastLetter = inputValue[inputValue.length - 1];
    const currentWord = words[0];
    if (lastLetter === ' ' || lastLetter === '.') {
      if (inputValue.trim() === currentWord) {
        const newWords = [...words.slice(1)];
        const newCompletedWords = [...completedWords, currentWord];
        this.setState({
          words: newWords,
          completedWords: newCompletedWords,
          inputValue: '',
          completed: newWords.length === 0,
        });
      }
    } else {
      this.setState({
        inputValue,
        lastLetter,
      });
    }

    this.calculateWPM();
  };

  calculateWPM = () => {
    const { startTime, completedWords } = this.state;
    const timeAtInputChange = Date.now();
    const timeElapsed = (timeAtInputChange - startTime) / 60000;
    const wordsTyped = Math.ceil(
      completedWords.reduce((acc, word) => (acc += word.length), 0) / 5
    );
    const wpm = Math.ceil(wordsTyped / timeElapsed);
    this.setState({
      wpm,
      timeElapsed,
    });
  };

  render() {
    const {
      renderedText,
      inputValue,
      completedWords,
      wpm,
      timeElapsed,
      testStarted,
      testFinished,
    } = this.state;
    if (!testStarted) {
      return <Intro startTest={this.startTest} />;
    }
    if (testFinished) {
      return <Results />;
    }
    return (
      <div>
        <Clock timeElapsed={timeElapsed} />
        <Status wpm={wpm} />
        <TextField
          renderedText={renderedText}
          completedWords={completedWords}
          inputValue={inputValue}
        />
        <TextInput handleChange={this.handleChange} inputValue={inputValue} />
      </div>
    );
  }
}

export default Tester;
