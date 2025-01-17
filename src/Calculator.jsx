// src/Calculator.js

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './styles.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEvaluate = () => {
    try {
      // Evaluate the expression and update the input with the result
      const evaluatedResult = eval(input);
      setInput(evaluatedResult.toString());
      setResult('');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setInput('Error');
      setResult('');
    }
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="0"
          disabled
        />
      </div>

      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button className="clear" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
