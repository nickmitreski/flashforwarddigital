import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + op);
    setIsNewNumber(true);
  };

  const handleEquals = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setIsNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="border-2 border-win98-border-light border-r-win98-border-dark border-b-win98-border-dark bg-win98-gray p-1 text-sm w-12 h-8"
    >
      {children}
    </button>
  );

  return (
    <div className="bg-win98-gray p-2">
      <div className="bg-white border border-inset p-1 mb-2 text-right">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-1">
        <Button onClick={handleClear}>C</Button>
        <Button onClick={() => handleOperator('/')}>/</Button>
        <Button onClick={() => handleOperator('*')}>*</Button>
        <Button onClick={() => handleOperator('-')}>-</Button>
        
        <Button onClick={() => handleNumber('7')}>7</Button>
        <Button onClick={() => handleNumber('8')}>8</Button>
        <Button onClick={() => handleNumber('9')}>9</Button>
        <Button onClick={() => handleOperator('+')}>+</Button>
        
        <Button onClick={() => handleNumber('4')}>4</Button>
        <Button onClick={() => handleNumber('5')}>5</Button>
        <Button onClick={() => handleNumber('6')}>6</Button>
        <Button onClick={handleEquals}>=</Button>
        
        <Button onClick={() => handleNumber('1')}>1</Button>
        <Button onClick={() => handleNumber('2')}>2</Button>
        <Button onClick={() => handleNumber('3')}>3</Button>
        <Button onClick={() => handleNumber('0')}>0</Button>
      </div>
    </div>
  );
};

export default Calculator;