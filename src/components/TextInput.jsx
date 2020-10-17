import React from 'react';

const TextInput = (props) => {
  return (
    <label>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.inputValue}
      ></input>
    </label>
  );
};

export default TextInput;
