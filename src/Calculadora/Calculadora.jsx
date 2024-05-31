import React, { useState } from 'react';
import './Calculadora.css';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';

function Calculadora() {
  const [displayValue, setDisplayValue] = useState('0');
  const [values, setValues] = useState([0, 0]);
  const [clear, setClear] = useState(false);
  const [current, setCurrent] = useState(0);
  const [operation, setOperation] = useState(null);

  const cleanDisplay = () => {
    setDisplayValue('0');
  }

  const cleanMemory = () => {
    setValues([0, 0]);
    setCurrent(0);
    setDisplayValue('0');
  }

  const handleOperation = (operationClick) => {
    if (current == 0) {
      setCurrent(1);
      setOperation(operationClick);
      cleanDisplay();
    } else {
      const equal = operation == '=';
      const currentOperation = operation;

      const val = values;

      val[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      val[1] = 0;

      setDisplayValue(val[0]);
      setValues(val);
      setOperation( equal ? null : operation );
      setCurrent(equal ? 0  : 1);
    }

  }

  const addDigit = (digit) => {
    if (digit == '.' && displayValue.includes('.')) {
      return;
    }

    const clearDisplay = displayValue == '0' || clear;
    const currentValue = clearDisplay ? '' : displayValue;
    const displayValueNew = currentValue + digit;
    setDisplayValue(displayValueNew);

    if (digit != '.') {
      const i = current;
      const valueNew = parseInt(displayValueNew);
      let valuesCopy = values;
      valuesCopy[i] = valueNew;
      setValues(valuesCopy);
      console.log(values)
    }
  }


  return (
    <>
      <div className='container'>
        <Display value={displayValue} />
        <div className='wrap'>
          <Button label={"AC"} onClick={cleanMemory} triple={true}></Button>
          <Button label={"/"} onClick={handleOperation} operation={true}></Button>
          <Button label={"7"} onClick={addDigit}></Button>
          <Button label={"8"} onClick={addDigit}></Button>
          <Button label={"9"} onClick={addDigit}></Button>
          <Button label={"*"} onClick={handleOperation} operation={true}></Button>
          <Button label={"4"} onClick={addDigit}></Button>
          <Button label={"5"} onClick={addDigit}></Button>
          <Button label={"6"} onClick={addDigit}></Button>
          <Button label={"-"} onClick={handleOperation} operation={true}></Button>
          <Button label={"1"} onClick={addDigit}></Button>
          <Button label={"2"} onClick={addDigit}></Button>
          <Button label={"3"} onClick={addDigit}></Button>
          <Button label={"+"} onClick={handleOperation} operation={true}></Button>
          <Button label={"0"} onClick={addDigit} double={true}></Button>
          <Button label={"."} onClick={addDigit}></Button>
          <Button label={"="} onClick={handleOperation} operation={true}></Button>
        </div>
      </div>
    </>
  )
}

export default Calculadora
