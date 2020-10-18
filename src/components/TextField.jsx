import React from 'react';

const TextField = (props) => {
  const { renderedText, correctWords, inputValue } = props;
  return (
    <div className="text-container">
      <p className="text">
        {renderedText.split(' ').map((word, wordIndex) => {
          let highlight = false;
          let currentWord = false;

          if (correctWords.length > wordIndex) {
            highlight = true;
          }

          if (correctWords.length === wordIndex) {
            currentWord = true;
          }

          return (
            <span
              className={`word ${highlight && 'green'} ${
                currentWord && 'underline'
              }`}
              key={wordIndex}
            >
              {word.split('').map((letter, letterIndex) => {
                const isCurrentWord = wordIndex === correctWords.length;
                const isWronglyTyped = letter !== inputValue[letterIndex];
                const shouldBeHighlighted = letterIndex < inputValue.length;

                return (
                  <span
                    className={`letter ${
                      isCurrentWord && shouldBeHighlighted
                        ? isWronglyTyped
                          ? 'red'
                          : 'green'
                        : ''
                    }`}
                    key={letterIndex}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default TextField;
